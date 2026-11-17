import React, { useState } from 'react';
import { 
  Code2, 
  Palette, 
  Film, 
  Megaphone, 
  Sparkles, 
  Headphones, 
  Play, 
  Pause, 
  Volume2, 
  Lightbulb,
  CheckCircle2,
  Compass,
  Zap,
  Bookmark,
  Pin
} from 'lucide-react';
import { WashiTape, Sticker, TechnicalStamp, BarcodeTag, CornerCrosshairs } from './ScrapbookElements';

export default function About({ about, personal }) {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section id="about" className="py-24 px-4 sm:px-8 bg-[#FAF8F4] relative border-t border-[#121316]/5 overflow-hidden">
      {/* Polka Dot Pattern layer */}
      <div className="absolute inset-0 bg-polka-subtle opacity-70 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header with Scrapbook Tag */}
        <div className="flex flex-col items-start gap-2 mb-14">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#121316]/10 text-xs font-bold text-[#2563EB] shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span className="font-mono">01 // ABOUT ME</span>
            </div>
            
            <Sticker variant="yellow" rotation="rotate-2" className="text-[11px] py-0.5">
              <span>FIELD NOTES</span>
            </Sticker>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#121316] tracking-tight">
            Engineering logic meets <span className="text-[#2563EB]">visual artistry</span>.
          </h2>
          <p className="text-[#646A78] text-base sm:text-lg max-w-2xl">
            A first-year engineering student on an energetic quest to build software that performs flawlessly and looks unforgettable.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: The Narrative Card as an Engineer's Journal Entry */}
          <div className="lg:col-span-7 space-y-6 relative">
            {/* Scrapbook Tape on Top of the Card */}
            <div className="absolute -top-3.5 left-12 z-20 pointer-events-none">
              <WashiTape color="rose" rotation="-rotate-1" width="w-28" height="h-5">
                <span className="font-mono text-[9px] text-rose-950 font-bold">DISCIPLINE_LOG</span>
              </WashiTape>
            </div>

            <div className="bg-white p-7 sm:p-9 rounded-3xl border border-[#121316]/10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] space-y-5 relative">
              <CornerCrosshairs />

              <div className="flex items-center justify-between pb-1 border-b border-[#121316]/5">
                <span className="font-mono text-[11px] text-[#646A78] uppercase tracking-wider flex items-center gap-1.5">
                  <Bookmark className="w-3.5 h-3.5 text-[#2563EB]" />
                  Entry 01 // The Dual Mindset
                </span>
                <BarcodeTag code="SPEC-CSE-28" coordinates="" className="scale-90 origin-right" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#121316]">
                Why choose between the terminal and the timeline?
              </h3>
              
              <p className="text-[#32353E] leading-relaxed text-sm sm:text-base">
                {about?.storyParagraph1 || "I began my journey captivated by both sides of creation: the structured logic of coding and the boundless freedom of graphic design and filmmaking. Rather than picking just one, I treat software engineering and design as two halves of the same craft."}
              </p>

              <p className="text-[#32353E] leading-relaxed text-sm sm:text-base">
                {about?.storyParagraph2 || "As a freshman in Computer Science, my days are spent mastering foundational algorithms, C programming, and web technologies — while my evenings are dedicated to experimenting with Figma layouts, video cuts in Premiere Pro, and brand identities that make heads turn."}
              </p>

              {/* 4 Core Pillars Grid styled as Specimen Cards */}
              <div className="pt-4 border-t border-[#121316]/5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#646A78] block mb-3 font-mono">
                  Core Passions & Disciplines //
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-[#FBF9F5] border border-[#121316]/8 flex items-start gap-3 hover:border-[#2563EB]/40 transition-colors">
                    <span className="p-2 rounded-xl bg-blue-100 text-[#2563EB] shrink-0">
                      <Code2 className="w-4 h-4" />
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-[#121316]">Coding & Systems</h4>
                      <p className="text-[11px] text-[#646A78]">C, Web tech, algorithm logic & systems thinking.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FBF9F5] border border-[#121316]/8 flex items-start gap-3 hover:border-amber-400/40 transition-colors">
                    <span className="p-2 rounded-xl bg-amber-100 text-amber-800 shrink-0">
                      <Palette className="w-4 h-4" />
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-[#121316]">UI/UX & Design</h4>
                      <p className="text-[11px] text-[#646A78]">Figma prototyping, visual hierarchy & posters.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FBF9F5] border border-[#121316]/8 flex items-start gap-3 hover:border-purple-400/40 transition-colors">
                    <span className="p-2 rounded-xl bg-purple-100 text-purple-700 shrink-0">
                      <Film className="w-4 h-4" />
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-[#121316]">Video & Motion</h4>
                      <p className="text-[11px] text-[#646A78]">Pacing, sound design, event trailers & reels.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FBF9F5] border border-[#121316]/8 flex items-start gap-3 hover:border-emerald-400/40 transition-colors">
                    <span className="p-2 rounded-xl bg-emerald-100 text-emerald-800 shrink-0">
                      <Megaphone className="w-4 h-4" />
                    </span>
                    <div>
                      <h4 className="text-xs font-bold text-[#121316]">Branding & Reach</h4>
                      <p className="text-[11px] text-[#646A78]">Social reach, campus campaigns & identity.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Philosophy Banner styled like a scrapbook clipping */}
            <div className="relative p-5 rounded-2xl bg-gradient-to-r from-[#FEF08A]/70 via-[#FEF9C3]/60 to-white border border-[#FDE047] shadow-sm flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="p-2.5 rounded-xl bg-white shadow-2xs text-[#121316]">
                  <Lightbulb className="w-5 h-5 text-amber-600" />
                </span>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-900 font-mono">Personal Motto //</div>
                  <div className="text-sm font-semibold text-[#121316] italic">
                    "{about?.vibeWidget?.currentMotto || 'Form follows function, but personality makes it memorable.'}"
                  </div>
                </div>
              </div>
              
              <Sticker variant="dark" rotation="-rotate-3" className="text-[10px] hidden sm:inline-flex">
                <span>GEN-Z ETHOS</span>
              </Sticker>
            </div>
          </div>

          {/* Right Column: Interactive Bento Cards with Polka & Scrapbook Accents */}
          <div className="lg:col-span-5 space-y-6">
            {/* Bento Card 1: Interactive Music / Vibe Widget */}
            <div className="bg-white p-6 rounded-3xl border border-[#121316]/10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] space-y-4 relative">
              <div className="absolute -top-3 right-8 pointer-events-none">
                <WashiTape color="blue" rotation="rotate-2" width="w-20" height="h-4" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-[#2563EB]/10 text-[#2563EB]">
                    <Headphones className="w-4 h-4" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#646A78] font-mono">Now Playing • Flow</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  In the zone
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FBF9F5] border border-[#121316]/8 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-10 h-10 rounded-full bg-[#121316] text-white flex items-center justify-center hover:bg-[#2563EB] transition-colors shadow-sm cursor-pointer"
                    aria-label={isPlaying ? "Pause music vibe" : "Play music vibe"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                  </button>
                  <div>
                    <div className="text-xs font-bold text-[#121316] truncate max-w-[180px]">
                      {about?.vibeWidget?.currentlyListening || "Midnight City • Lo-Fi Coding Beats"}
                    </div>
                    <div className="text-[11px] text-[#646A78] font-mono">Focus Playlist • 85 BPM</div>
                  </div>
                </div>

                {/* Animated Equalizer Waveform */}
                <div className="flex items-end gap-1 h-6">
                  <span className={`w-1 bg-[#2563EB] rounded-full transition-all duration-300 ${isPlaying ? 'h-4 animate-pulse' : 'h-1.5'}`} />
                  <span className={`w-1 bg-[#2563EB] rounded-full transition-all duration-500 ${isPlaying ? 'h-6 animate-pulse' : 'h-2'}`} />
                  <span className={`w-1 bg-[#2563EB] rounded-full transition-all duration-200 ${isPlaying ? 'h-3 animate-pulse' : 'h-1.5'}`} />
                  <span className={`w-1 bg-[#2563EB] rounded-full transition-all duration-400 ${isPlaying ? 'h-5 animate-pulse' : 'h-2'}`} />
                </div>
              </div>

              {/* Learning Status with Polka Dot accent */}
              <div className="pt-2 text-xs flex items-center justify-between text-[#646A78]">
                <span className="font-medium font-mono">Mastering Currently:</span>
                <span className="font-bold text-[#121316] bg-[#FEF08A] px-2.5 py-1 rounded-md text-[11px] border border-amber-300">
                  C Pointers & React 19
                </span>
              </div>
            </div>

            {/* Bento Card 2: Quick Metrics Grid with Scrapbook perforated borders */}
            <div className="grid grid-cols-2 gap-3">
              {(about?.stats || [
                { value: "1st", label: "Year CSE Undergrad" },
                { value: "15+", label: "Creative Projects" },
                { value: "5+", label: "Core Disciplines" },
                { value: "100%", label: "Curiosity & Grit" },
              ]).map((stat, idx) => (
                <div 
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-[#121316]/10 shadow-xs flex flex-col justify-between hover:border-[#2563EB]/40 hover:-translate-y-0.5 transition-all relative overflow-hidden"
                >
                  {/* Subtle Polka Dot Accent in background of metric */}
                  <div className="absolute right-0 bottom-0 w-16 h-16 bg-polka-dots opacity-20 pointer-events-none" />
                  
                  <div className="text-2xl sm:text-3xl font-extrabold font-display text-[#121316]">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-[#646A78] mt-1 font-mono">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Bento Card 3: Creative Values Pill */}
            <div className="bg-white p-6 rounded-3xl border border-[#121316]/10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] space-y-3 relative">
              <div className="flex items-center justify-between text-xs font-bold text-[#121316]">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#2563EB]" />
                  <span>What Drives Me</span>
                </div>
                <span className="font-mono text-[10px] text-[#646A78]">CORE_VALUES.MD</span>
              </div>
              <ul className="space-y-2 text-xs text-[#32353E]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Curiosity-driven problem solving over rote memorization</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Obsession with clean typography, micro-details, and flow</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Enthusiastic team player ready for hackathons and club projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
