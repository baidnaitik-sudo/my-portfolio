import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Users, 
  Trophy, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  PlusCircle, 
  ArrowRight,
  Pin
} from 'lucide-react';
import { WashiTape, Sticker, TechnicalStamp, BarcodeTag, StickyNote, CornerCrosshairs } from './ScrapbookElements';

export default function Experience({ experiences, onOpenEditor }) {
  const tapeColors = ['yellow', 'blue', 'rose', 'neutral'];

  return (
    <section id="experience" className="py-24 px-4 sm:px-8 bg-[#FBF9F5] relative overflow-hidden">
      {/* Polka Dot Matrix Layer */}
      <div className="absolute inset-0 bg-polka-subtle opacity-70 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header with Scrapbook Stamp */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#121316]/10 text-xs font-bold text-[#2563EB] shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                <span className="font-mono">04 // EXPERIENCE & MILESTONES</span>
              </div>
              <Sticker variant="holo" rotation="-rotate-1" className="text-[11px] py-0.5">
                <span>LOGBOOK</span>
              </Sticker>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#121316] tracking-tight">
              Campus milestones & <span className="text-[#2563EB]">collaborations</span>.
            </h2>
            <p className="text-[#646A78] text-base sm:text-lg max-w-xl">
              Student leadership, event media, hackathon sprints, and engineering coursework that shape my journey.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <TechnicalStamp text="1ST YEAR LOG" subtext="ACTIVE SPRINT" color="blue" rotation="rotate-2" />
          </div>
        </div>

        {/* Timeline Layout with Scrapbook Log Cards */}
        <div className="relative border-l-2 border-[#121316]/15 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, idx) => {
            const tapeColor = tapeColors[idx % tapeColors.length];
            return (
              <div key={idx} className="relative group">
                {/* Timeline Marker Dot */}
                <div 
                  className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-[#2563EB] group-hover:scale-125 transition-transform duration-300 shadow-sm"
                />

                {/* Experience Card */}
                <div className="bg-white rounded-3xl border border-[#121316]/10 hover:border-[#2563EB]/40 p-6 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_35px_rgba(37,99,235,0.08)] transition-all duration-300 space-y-4 relative">
                  {/* Washi Tape strip on top corner */}
                  <div className="absolute -top-3 right-8 z-20 pointer-events-none">
                    <WashiTape color={tapeColor} rotation={idx % 2 === 0 ? '-rotate-2' : 'rotate-2'} width="w-24" height="h-5">
                      <span className="font-mono text-[8px] font-bold opacity-80">LOG #{idx + 1}</span>
                    </WashiTape>
                  </div>

                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#121316]/5 pb-4">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-[#2563EB] border border-blue-200 mb-1.5 font-mono">
                        {exp.type}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold font-heading text-[#121316]">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-[#4B5262]">
                        {exp.organization}
                      </div>
                    </div>

                    <div className="flex flex-row sm:flex-col items-start sm:items-end gap-1.5 text-xs text-[#646A78]">
                      <span className="inline-flex items-center gap-1 font-mono font-medium bg-[#FAF8F4] px-2.5 py-1 rounded-lg border border-[#121316]/5">
                        <Calendar className="w-3.5 h-3.5 text-[#2563EB]" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono">
                        <MapPin className="w-3 h-3 text-[#646A78]" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Highlights List */}
                  <div className="space-y-2">
                    {exp.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#32353E] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-[#FAF8F4] border border-[#121316]/5 text-[#4B5262] font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Milestone Box styled as Scrapbook Field Kit */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-white via-[#FAF8F4] to-white border-2 border-dashed border-[#121316]/20 flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-32 bg-polka-dots opacity-15 pointer-events-none" />

          <div className="flex items-center gap-3">
            <span className="p-3 rounded-2xl bg-[#FEF08A] text-[#121316] shadow-xs">
              <PlusCircle className="w-6 h-6 text-[#2563EB]" />
            </span>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#121316]">
                More milestones in the making!
              </h4>
              <p className="text-xs text-[#646A78]">
                New hackathons, club roles, or certifications? Add them easily inside <code className="font-mono bg-neutral-100 px-1.5 py-0.5 rounded text-[#121316]">src/data/portfolioData.js</code>.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-[#121316] bg-white border border-[#121316]/15 hover:border-[#2563EB] shadow-2xs hover:shadow-xs transition cursor-pointer shrink-0"
          >
            <span>Propose a Collaboration</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#2563EB]" />
          </a>
        </div>
      </div>
    </section>
  );
}
