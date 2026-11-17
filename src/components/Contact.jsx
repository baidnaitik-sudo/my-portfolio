import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  MessageSquare,
  Globe,
  Clock,
  Pin
} from 'lucide-react';
import { LinkedinIcon, GithubIcon, InstagramIcon } from './BrandIcons';
import confetti from 'canvas-confetti';
import { WashiTape, Sticker, TechnicalStamp, BarcodeTag, StickyNote, CornerCrosshairs } from './ScrapbookElements';

export default function Contact({ socials, personal }) {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    topic: 'Tech Collaboration & Code',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socials.email || 'developer@example.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending action
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 70,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // ignore
      }
    }, 600);
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: LinkedinIcon,
      url: socials.linkedin || 'https://linkedin.com',
      handle: 'Connect on LinkedIn',
      color: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/40',
      bgHover: 'hover:bg-blue-50'
    },
    {
      name: 'GitHub',
      icon: GithubIcon,
      url: socials.github || 'https://github.com',
      handle: 'View Repositories',
      color: 'hover:text-[#121316] hover:border-[#121316]/40',
      bgHover: 'hover:bg-neutral-100'
    },
    {
      name: 'Instagram',
      icon: InstagramIcon,
      url: socials.instagram || 'https://instagram.com',
      handle: 'Design & Life Updates',
      color: 'hover:text-[#E4405F] hover:border-[#E4405F]/40',
      bgHover: 'hover:bg-pink-50'
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-8 bg-[#FAF8F4] relative border-t border-[#121316]/5 overflow-hidden">
      {/* Polka Dot Matrix Layer */}
      <div className="absolute inset-0 bg-polka-subtle opacity-70 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header with Scrapbook Postal Stamp */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#121316]/10 text-xs font-bold text-[#2563EB] shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                <span className="font-mono">05 // DISPATCH & INBOX</span>
              </div>
              <Sticker variant="yellow" rotation="-rotate-2" className="text-[11px] py-0.5">
                <span>OPEN DISPATCH</span>
              </Sticker>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#121316] tracking-tight">
              Have an idea? Let's <span className="text-[#2563EB]">create something</span> together.
            </h2>
            <p className="text-[#646A78] text-base sm:text-lg max-w-2xl">
              Whether it's a student project, hackathon collaboration, video edit, brand design, or just a chat about technology — my inbox is always open!
            </p>
          </div>

          <div className="flex items-center gap-2">
            <TechnicalStamp text="DISPATCH // 2026" subtext="PORT 587 // TLS" color="blue" rotation="-rotate-2" />
          </div>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Email Copy Card */}
            <div className="bg-white p-7 rounded-3xl border border-[#121316]/10 shadow-[0_4px_25px_rgba(0,0,0,0.03)] space-y-4 relative">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#646A78] font-mono">
                  Direct Email //
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Fast Response
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#FBF9F5] border border-[#121316]/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span className="text-xs sm:text-sm font-mono font-bold text-[#121316] truncate">
                    {socials.email || 'developer@example.com'}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-[#121316] bg-white border border-[#121316]/10 hover:border-[#2563EB] hover:bg-neutral-50 transition shadow-2xs shrink-0 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#646A78]" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-xs text-[#646A78] flex items-center justify-between pt-1 font-mono">
                <span>Feel free to drop a line anytime!</span>
                <span className="text-[#2563EB] font-bold">Replies &lt; 24h</span>
              </div>
            </div>

            {/* Social Channels List with Scrapbook Paper Look */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#646A78] block px-1 font-mono">
                Social & Developer Profiles //
              </span>

              <div className="grid grid-cols-1 gap-2.5">
                {socialLinks.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className={`p-4 rounded-2xl bg-white border border-[#121316]/10 ${item.color} ${item.bgHover} transition-all duration-200 flex items-center justify-between shadow-2xs group`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="p-2.5 rounded-xl bg-[#FBF9F5] group-hover:bg-white text-[#121316] transition-colors border border-[#121316]/5">
                          <Icon className="w-4 h-4" />
                        </span>
                        <div>
                          <h4 className="text-xs font-bold text-[#121316]">{item.name}</h4>
                          <span className="text-[11px] text-[#646A78] font-mono">{item.handle}</span>
                        </div>
                      </div>

                      <span className="text-xs font-bold text-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5">
                        Visit ↗
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Location & Status Card as a Scrapbook Index Tag */}
            <div className="p-5 rounded-2xl bg-[#FEF08A]/40 border border-[#FDE047] text-xs space-y-1.5 text-[#713F12] relative overflow-hidden">
              <div className="font-bold flex items-center gap-1.5 font-mono">
                <Globe className="w-3.5 h-3.5 text-amber-700" />
                <span>Status & Availability //</span>
              </div>
              <p className="leading-relaxed">
                Currently open to student collaborations, hackathon teams, video editing projects, and summer tech internships.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Interactive Contact Form styled as a Technical Dispatch Sheet */}
          <div className="lg:col-span-7 relative">
            {/* Washi Tape strip on top */}
            <div className="absolute -top-3.5 left-14 z-20 pointer-events-none">
              <WashiTape color="yellow" rotation="-rotate-1" width="w-24" height="h-5">
                <span className="font-mono text-[9px] font-bold">MESSAGE_SHEET</span>
              </WashiTape>
            </div>

            <div className="bg-white p-7 sm:p-9 rounded-3xl border border-[#121316]/10 shadow-[0_10px_35px_rgba(0,0,0,0.03)] relative">
              <CornerCrosshairs />

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-[#121316]">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-[#4B5262] max-w-md mx-auto">
                    Thanks for reaching out, <strong>{formState.name}</strong>! I've received your note and will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', topic: 'Tech Collaboration & Code', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition shadow-xs cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-[#121316]/5">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-[#2563EB]" />
                      <h3 className="text-base font-bold font-heading text-[#121316]">Send a Direct Message</h3>
                    </div>
                    <BarcodeTag code="MSG-FORM-V1" coordinates="" className="hidden sm:inline-flex scale-85 origin-right" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#121316] mb-1.5 font-mono">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="What's your name?"
                        className="w-full px-4 py-3 text-sm bg-[#FAF8F4] border border-[#121316]/10 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 transition text-[#121316]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#121316] mb-1.5 font-mono">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-3 text-sm bg-[#FAF8F4] border border-[#121316]/10 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 transition text-[#121316]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#121316] mb-1.5 font-mono">
                      What are you interested in?
                    </label>
                    <select
                      value={formState.topic}
                      onChange={(e) => setFormState({ ...formState, topic: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-[#FAF8F4] border border-[#121316]/10 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 transition text-[#121316]"
                    >
                      <option value="Tech Collaboration & Code">💻 Tech Collaboration & Code (Hackathons / Projects)</option>
                      <option value="UI/UX & Graphic Design">🎨 UI/UX & Graphic Design (Logos, Posters, UI)</option>
                      <option value="Video Editing & Content">🎬 Video Editing & Motion (Reels, Trailers, YouTube)</option>
                      <option value="Summer Internship / Role">💼 Internship Opportunity / Team Role</option>
                      <option value="Just Saying Hi!">👋 Just saying hello and networking</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#121316] mb-1.5 font-mono">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell me about your idea, project, or event..."
                      className="w-full px-4 py-3 text-sm bg-[#FAF8F4] border border-[#121316]/10 rounded-2xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 transition text-[#121316] resize-none leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-2xl text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-all duration-200 shadow-[0_10px_25px_-5px_rgba(37,99,235,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
