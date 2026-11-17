import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Code2, Palette, Film, Terminal, Zap, Edit3, Compass, CheckCircle2, Bookmark } from 'lucide-react';
import { WashiTape, Sticker, TechnicalStamp, BarcodeTag, StickyNote, CornerCrosshairs } from './ScrapbookElements';

export default function Hero({ personal, onOpenEditor }) {
  const [activeTab, setActiveTab] = useState('code'); // 'code' or 'design'

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[94vh] pt-32 pb-20 px-4 sm:px-8 flex flex-col justify-center overflow-hidden bg-[#FBF9F5]">
      {/* Polka Dot Matrix & Grid Pattern Layers */}
      <div className="absolute inset-0 bg-polka-subtle opacity-80 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Subtle ambient warm & electric blur blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] sm:w-[680px] h-[360px] bg-gradient-to-tr from-[#FEF08A]/35 via-[#2563EB]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-[#FEF08A]/25 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Top Status & Technical Scrapbook Stamp Header */}
        <div className="flex flex-wrap items-center gap-3 mb-6 animate-fade-in">
          {/* Main Status Pill with Washi Tape accent */}
          <div className="relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-[#121316]/10 text-xs font-semibold text-[#121316] shadow-2xs backdrop-blur-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]"></span>
            </span>
            <span>{personal.college || "First-Year Computer Science Engineering"}</span>
            <span className="text-[#646A78]">•</span>
            <span className="text-[#2563EB] font-bold">Creative Technologist</span>
          </div>

          {/* Scrapbook Technical Stamp */}
          <TechnicalStamp 
            text="SPEC: CSE 2028" 
            subtext="LAB NOTEBOOK #01" 
            color="blue"
            rotation="-rotate-2"
            className="hidden sm:inline-flex"
          />

          {/* Barcode & Coordinate Tag */}
          <BarcodeTag 
            code="DEV-CSE-YR1" 
            coordinates="LAT 12.97°N // LON 77.59°E"
            className="hidden md:inline-flex"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Heading, Scrapbook Stickers & Text */}
          <div className="lg:col-span-7 space-y-6 relative">
            <div className="space-y-3">
              {/* Main Greeting with Highlighter Tape */}
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-display tracking-tight text-[#121316] leading-[1.08]">
                  Hey, I'm{' '}
                  <span className="relative inline-block text-[#121316]">
                    <span className="relative z-10 px-1">{personal.name || '[YOUR NAME]'}</span>
                    <span 
                      className="absolute left-0 bottom-1.5 sm:bottom-2 w-full h-3.5 sm:h-5 bg-[#FEF08A] -z-0 rounded-sm -rotate-1 transform origin-left opacity-90 border-b border-amber-300/40"
                      aria-hidden="true"
                    />
                  </span>
                  !
                </h1>
                
                {/* Quick customize tooltip button */}
                <button
                  onClick={onOpenEditor}
                  title="Click to change name and details"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium text-[#646A78] bg-white border border-[#E8E2D8] hover:text-[#121316] hover:border-[#2563EB] transition-colors shadow-2xs group cursor-pointer"
                >
                  <Edit3 className="w-3.5 h-3.5 text-[#2563EB] group-hover:rotate-12 transition-transform" />
                  <span className="text-[11px]">Edit info</span>
                </button>
              </div>

              {/* Subtitle */}
              <p className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-[#32353E] leading-snug">
                {personal.headline || "A developer in progress, a creative at heart."}
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#4B5262] leading-relaxed max-w-xl font-normal">
              {personal.bio || "First-year Computer Science Engineering student exploring technology, design and creative problem-solving. Building clean software with an artistic eye for motion, typography, and human connection."}
            </p>

            {/* Scrapbook Stickers Ribbon: Die-Cut + Technical Chips */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <Sticker variant="white" rotation="-rotate-1" hoverRotation="hover:rotate-0">
                <Code2 className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>C & Web Dev</span>
              </Sticker>

              <Sticker variant="yellow" rotation="rotate-2" hoverRotation="hover:rotate-0">
                <Palette className="w-3.5 h-3.5 text-amber-800" />
                <span>UI/UX & Figma</span>
              </Sticker>

              <Sticker variant="white" rotation="-rotate-2" hoverRotation="hover:rotate-0">
                <Film className="w-3.5 h-3.5 text-[#9333EA]" />
                <span>Video & Motion</span>
              </Sticker>

              <Sticker variant="holo" rotation="rotate-1" hoverRotation="hover:rotate-0">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Branding</span>
              </Sticker>

              <Sticker variant="dark" rotation="-rotate-1" hoverRotation="hover:rotate-0" className="hidden sm:inline-flex">
                <Zap className="w-3.5 h-3.5 text-[#FEF08A]" />
                <span className="font-mono text-[11px]">0 ERRORS</span>
              </Sticker>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={() => handleScrollTo('projects')}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] shadow-[0_10px_25px_-5px_rgba(37,99,235,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(37,99,235,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={() => handleScrollTo('contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-[#121316] bg-white hover:bg-[#FEF9C3] border border-[#121316]/15 hover:border-[#FDE047] shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#2563EB]" />
                <span>Let's Connect</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Scrapbook + Technical Terminal Card */}
          <div className="lg:col-span-5 relative">
            {/* Visual Card Container */}
            <div className="relative mx-auto max-w-md w-full">
              {/* Corner Blueprint Crosshairs */}
              <CornerCrosshairs />

              {/* Decorative Washi Tape Strips pinning the Card */}
              <div className="absolute -top-3.5 left-10 z-30 pointer-events-none">
                <WashiTape color="yellow" rotation="-rotate-3" width="w-24" height="h-5" />
              </div>
              <div className="absolute -top-3.5 right-12 z-30 pointer-events-none">
                <WashiTape color="blue" rotation="rotate-2" width="w-20" height="h-5" />
              </div>

              {/* Scrapbook Die-cut Badge - Top Left */}
              <div className="absolute -top-5 -left-4 z-20">
                <Sticker variant="white" rotation="-rotate-6" hoverRotation="hover:rotate-0">
                  <span className="w-2 h-2 rounded-full bg-[#FEF08A] border border-amber-400" />
                  <span>1st Year Undergrad</span>
                </Sticker>
              </div>

              {/* Scrapbook Die-cut Badge - Bottom Right */}
              <div className="absolute -bottom-4 -right-4 z-20">
                <Sticker variant="dark" rotation="rotate-3" hoverRotation="hover:rotate-0">
                  <Zap className="w-3.5 h-3.5 text-[#FEF08A]" />
                  <span>Logic + Aesthetic</span>
                </Sticker>
              </div>

              {/* Sticky Note Pinning Beside the Card */}
              <div className="hidden sm:block absolute -right-8 -bottom-14 z-30 pointer-events-auto">
                <StickyNote title="FIELD_LOG #01" color="yellow" rotation="rotate-3" className="w-44 text-[11px]">
                  <p className="font-mono text-amber-950/80">
                    <span className="text-[#2563EB] font-bold">while</span>(learning) &#123;<br/>
                    &nbsp;&nbsp;code();<br/>
                    &nbsp;&nbsp;design();<br/>
                    &#125;
                  </p>
                </StickyNote>
              </div>

              {/* Main Interactive Card with Polka & Paper texture */}
              <div className="bg-white rounded-3xl border border-[#121316]/10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-300 relative">
                {/* Subtle internal polka dot background */}
                <div className="absolute inset-0 bg-polka-subtle opacity-40 pointer-events-none" />

                {/* Card Topbar / Mode Switcher */}
                <div className="relative z-10 flex items-center justify-between px-5 py-3.5 bg-[#FAF8F4]/90 border-b border-[#121316]/8 backdrop-blur-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-400/80 inline-block border border-rose-500/20" />
                    <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block border border-amber-500/20" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block border border-emerald-500/20" />
                  </div>

                  {/* Dual Mode Switcher Tabs */}
                  <div className="flex items-center bg-white p-1 rounded-xl border border-[#121316]/10 shadow-2xs">
                    <button
                      onClick={() => setActiveTab('code')}
                      className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        activeTab === 'code'
                          ? 'bg-[#2563EB] text-white shadow-xs'
                          : 'text-[#646A78] hover:text-[#121316]'
                      }`}
                    >
                      <Terminal className="w-3 h-3" />
                      Code
                    </button>
                    <button
                      onClick={() => setActiveTab('design')}
                      className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        activeTab === 'design'
                          ? 'bg-[#121316] text-[#FEF08A] shadow-xs'
                          : 'text-[#646A78] hover:text-[#121316]'
                      }`}
                    >
                      <Palette className="w-3 h-3" />
                      Design
                    </button>
                  </div>
                </div>

                {/* Tab 1: Code Mode */}
                {activeTab === 'code' && (
                  <div className="relative z-10 p-6 font-mono text-xs text-[#121316] space-y-4 bg-gradient-to-b from-white/95 to-[#FDFBF7]/90">
                    <div className="flex items-center justify-between text-[11px] text-[#646A78] pb-2 border-b border-[#121316]/5 font-sans">
                      <span className="flex items-center gap-1 font-mono">
                        <span className="text-[#2563EB]">●</span> main.c & app.jsx
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                        Compiling 100%
                      </span>
                    </div>

                    <div className="space-y-1.5 text-xs text-[#32353E] leading-relaxed">
                      <p><span className="text-[#2563EB] font-bold">#include</span> <span className="text-amber-700">&lt;curiosity.h&gt;</span></p>
                      <p><span className="text-[#2563EB] font-bold">#include</span> <span className="text-amber-700">&lt;creativity.h&gt;</span></p>
                      <p className="pt-1"><span className="text-[#9333EA] font-bold">int</span> <span className="font-bold text-[#121316]">main</span>() &#123;</p>
                      <p className="pl-4 text-[#646A78]">// Scrapbook log: CSE Student</p>
                      <p className="pl-4">
                        <span className="text-[#2563EB] font-semibold">Student</span> me = &#123;
                      </p>
                      <p className="pl-8 text-neutral-800">.major = <span className="text-emerald-700">"Computer Science"</span>,</p>
                      <p className="pl-8 text-neutral-800">.passions = [<span className="text-amber-700">"Code"</span>, <span className="text-amber-700">"Design"</span>, <span className="text-amber-700">"Video"</span>],</p>
                      <p className="pl-8 text-neutral-800">.eagerToLearn = <span className="text-[#2563EB] font-bold">true</span></p>
                      <p className="pl-4">&#125;;</p>
                      <p className="pl-4 pt-1 text-[#2563EB] font-bold">while</p>
                      <p className="pl-8 text-neutral-700">exploreNewIdeas();</p>
                      <p className="pl-8 text-neutral-700">createImpactfulWork();</p>
                      <p className="pl-4">&#125;</p>
                      <p className="pl-4 text-[#9333EA] font-semibold">return <span className="text-[#2563EB]">0</span>;</p>
                      <p>&#125;</p>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-[11px] text-[#646A78]">
                      <span className="font-mono">gcc -Wall -O2 student.c</span>
                      <span className="text-emerald-600 font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                        0 Errors • 0 Warnings
                      </span>
                    </div>
                  </div>
                )}

                {/* Tab 2: Design & Creative Mode */}
                {activeTab === 'design' && (
                  <div className="relative z-10 p-6 space-y-4 bg-gradient-to-b from-white/95 to-[#FDFBF7]/90">
                    <div className="flex items-center justify-between text-xs text-[#646A78] pb-2 border-b border-[#121316]/5">
                      <span className="font-bold text-[#121316] flex items-center gap-1.5">
                        <Palette className="w-3.5 h-3.5 text-[#F59E0B]" />
                        Creative Toolkit & Canvas
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#FEF08A] text-[#121316] font-bold border border-[#FDE047]">
                        Figma & Premiere
                      </span>
                    </div>

                    {/* Color Swatches */}
                    <div>
                      <div className="text-[11px] font-semibold text-[#646A78] mb-1.5 flex items-center justify-between">
                        <span>Palette Harmony</span>
                        <span className="font-mono text-[9px]">SWATCH // 2026</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        <div className="p-2 rounded-xl bg-[#2563EB] text-white text-[10px] font-mono font-bold shadow-xs flex flex-col justify-between h-14">
                          <span>Electric</span>
                          <span>#2563EB</span>
                        </div>
                        <div className="p-2 rounded-xl bg-[#FEF08A] text-[#121316] text-[10px] font-mono font-bold shadow-xs flex flex-col justify-between h-14 border border-[#FDE047]">
                          <span>Butter</span>
                          <span>#FEF08A</span>
                        </div>
                        <div className="p-2 rounded-xl bg-[#121316] text-[#FBF9F5] text-[10px] font-mono font-bold shadow-xs flex flex-col justify-between h-14">
                          <span>Charcoal</span>
                          <span>#121316</span>
                        </div>
                        <div className="p-2 rounded-xl bg-[#F5EFEB] text-[#121316] text-[10px] font-mono font-bold shadow-xs flex flex-col justify-between h-14 border border-[#E8E2D8]">
                          <span>Cream</span>
                          <span>#F5EFEB</span>
                        </div>
                      </div>
                    </div>

                    {/* Timeline & Typography Preview */}
                    <div className="p-3 bg-neutral-50/80 rounded-2xl border border-neutral-200/70 space-y-2">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-semibold text-neutral-800 flex items-center gap-1">
                          <Film className="w-3 h-3 text-[#9333EA]" />
                          Video Timeline Cut
                        </span>
                        <span className="font-mono text-[10px] text-neutral-500">00:00:24:18 • 60 FPS</span>
                      </div>
                      {/* Simulated timeline tracks */}
                      <div className="space-y-1">
                        <div className="h-2 rounded bg-indigo-200 w-full relative overflow-hidden">
                          <div className="absolute top-0 left-1/4 w-1/3 h-full bg-[#2563EB] rounded" />
                        </div>
                        <div className="h-2 rounded bg-amber-200 w-full relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-1/2 h-full bg-[#F59E0B] rounded" />
                          <div className="absolute top-0 right-1/6 w-1/4 h-full bg-amber-600 rounded" />
                        </div>
                      </div>
                    </div>

                    <p className="text-[11px] text-[#646A78] italic text-center">
                      "Design without code is static. Code without design is soulless."
                    </p>
                  </div>
                )}

                {/* Card Footer Vibe with Scrapbook Spec Note */}
                <div className="relative z-10 px-5 py-3 bg-[#FAF8F4]/90 border-t border-[#121316]/5 flex items-center justify-between text-xs text-[#646A78]">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Compass className="w-3.5 h-3.5 text-[#2563EB]" />
                    Year 1 Roadmap
                  </span>
                  <span className="text-[#121316] font-mono text-[11px] font-bold">5+ Domains Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Small Scrolling Indicator */}
        <div className="pt-16 sm:pt-20 flex flex-col items-center justify-center animate-bounce duration-1000">
          <button
            onClick={() => handleScrollTo('about')}
            className="flex flex-col items-center gap-1.5 text-xs font-semibold text-[#646A78] hover:text-[#121316] transition-colors group cursor-pointer"
            aria-label="Scroll to About Me section"
          >
            <span className="tracking-wider uppercase text-[10px] font-bold font-mono">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-[#121316]/20 flex items-start justify-center p-1.5 group-hover:border-[#2563EB] transition-colors">
              <span className="w-1.5 h-2.5 rounded-full bg-[#2563EB] animate-pulse" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
