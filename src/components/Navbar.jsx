import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Send, Edit3, ArrowUpRight } from 'lucide-react';

export default function Navbar({ personal, onOpenEditor }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPos = window.scrollY + 160;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-4 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <nav 
            className={`flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${
              isScrolled 
                ? 'bg-[#FBF9F5]/90 backdrop-blur-md border border-[#121316]/10 shadow-[0_8px_30px_rgb(0,0,0,0.06)]' 
                : 'bg-[#FBF9F5]/60 backdrop-blur-sm border border-[#121316]/5'
            }`}
          >
            {/* Logo / Monogram */}
            <a 
              href="#hero" 
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full bg-[#121316] text-[#FBF9F5] flex items-center justify-center font-heading font-extrabold text-sm tracking-tight group-hover:bg-[#2563EB] transition-colors shadow-sm">
                {(personal.name || 'N').charAt(0).toUpperCase()}
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-heading font-bold text-sm text-[#121316] leading-tight flex items-center gap-1.5">
                  {personal.name || 'Creative Dev'}
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Available for work" />
                </span>
                <span className="text-[11px] font-medium text-[#646A78]">CSE Student & Creator</span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 bg-[#121316]/[0.03] p-1 rounded-full border border-[#121316]/5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                      isActive 
                        ? 'bg-white text-[#121316] shadow-xs' 
                        : 'text-[#646A78] hover:text-[#121316] hover:bg-black/[0.02]'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </div>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2">
              {/* Quick Profile Edit Pill */}
              <button
                onClick={onOpenEditor}
                className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#FEF08A]/70 hover:bg-[#FEF08A] text-[#121316] border border-[#FDE047] transition-all transform hover:scale-[1.02] shadow-xs"
                title="Customize your name and details"
              >
                <Edit3 className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Customize Name</span>
              </button>

              {/* Let's Talk CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Let's Talk</span>
                <Send className="w-3 h-3" />
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-full bg-white/80 border border-[#121316]/10 text-[#121316] hover:bg-neutral-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 z-40 md:hidden bg-[#FBF9F5] border border-[#121316]/10 rounded-3xl p-5 shadow-2xl backdrop-blur-xl animate-fade-in space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#121316]/5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-[#121316]">{personal.college || 'CSE Undergrad'}</span>
            </div>
            <button
              onClick={onOpenEditor}
              className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#FEF08A] text-[#121316] border border-[#FDE047] flex items-center gap-1"
            >
              <Edit3 className="w-3 h-3" />
              Customize Name
            </button>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-2.5 rounded-2xl text-sm font-semibold text-[#121316] hover:bg-[#FEF08A]/40 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-[#646A78]" />
              </button>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-2xl text-center text-sm font-bold text-white bg-[#2563EB] flex items-center justify-center gap-2 shadow-md"
            >
              <span>Get in Touch</span>
              <Send className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
