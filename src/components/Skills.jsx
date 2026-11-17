import React, { useState } from 'react';
import { 
  Code2, 
  Palette, 
  Film, 
  Lightbulb, 
  Megaphone, 
  Sparkles,
  Layers,
  Check,
  ChevronRight,
  Terminal,
  Cpu,
  Tag
} from 'lucide-react';
import { WashiTape, Sticker, TechnicalStamp, CornerCrosshairs } from './ScrapbookElements';

export default function Skills({ categories }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const iconMap = {
    Code2: Code2,
    Palette: Palette,
    Film: Film,
    Lightbulb: Lightbulb,
    Megaphone: Megaphone,
  };

  const filterTabs = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'dev', label: 'Programming & Dev' },
    { id: 'design', label: 'UI/UX & Design' },
    { id: 'video', label: 'Video & Motion' },
    { id: 'thinking', label: 'Problem Solving' },
    { id: 'branding', label: 'Branding & Reach' },
  ];

  const filteredCategories = activeFilter === 'all' 
    ? categories 
    : categories.filter(c => c.id === activeFilter);

  // Slight subtle scrapbook rotation per index
  const rotations = ['-rotate-[0.6deg]', 'rotate-[0.8deg]', '-rotate-[0.5deg]', 'rotate-[0.6deg]', '-rotate-[0.8deg]', 'rotate-[0.5deg]'];
  const tapeColors = ['yellow', 'blue', 'rose', 'neutral'];

  return (
    <section id="skills" className="py-24 px-4 sm:px-8 bg-[#FBF9F5] relative overflow-hidden">
      {/* Polka Dot Matrix Layer */}
      <div className="absolute inset-0 bg-polka-subtle opacity-75 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header with Scrapbook Pill */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#121316]/10 text-xs font-bold text-[#2563EB] shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                <span className="font-mono">02 // SKILLS & SPECIMENS</span>
              </div>
              <Sticker variant="holo" rotation="-rotate-2" className="text-[11px] py-0.5">
                <span>INDEX CARDS</span>
              </Sticker>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#121316] tracking-tight">
              Tools, mindsets & <span className="text-[#2563EB]">creative craft</span>.
            </h2>
            <p className="text-[#646A78] text-base sm:text-lg max-w-xl">
              An authentic overview of my first-year engineering stack and creative toolkit. Grounded in practice, free of inflated percentages.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 bg-white p-1.5 rounded-2xl border border-[#121316]/10 shadow-xs">
            {filterTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#121316] text-[#FEF08A] shadow-xs'
                    : 'text-[#646A78] hover:text-[#121316] hover:bg-neutral-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Cards Grid with Scrapbook Tape & Specimen Aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredCategories.map((cat, idx) => {
            const IconComponent = iconMap[cat.icon] || Code2;
            const isElectric = cat.accent === 'electric';
            const cardRotation = rotations[idx % rotations.length];
            const tapeColor = tapeColors[idx % tapeColors.length];

            return (
              <div
                key={cat.id}
                className={`group bg-white rounded-3xl border border-[#121316]/10 hover:border-[#2563EB]/40 p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(37,99,235,0.09)] transition-all duration-300 flex flex-col justify-between relative hover:rotate-0 hover:-translate-y-1 ${cardRotation}`}
              >
                {/* Washi Tape strip pinned at the top center */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                  <WashiTape color={tapeColor} rotation={idx % 2 === 0 ? '-rotate-2' : 'rotate-2'} width="w-24" height="h-5">
                    <span className="font-mono text-[8px] font-bold opacity-80">REF #{idx + 1}</span>
                  </WashiTape>
                </div>

                {/* Subtle corner crosshairs on hover */}
                <CornerCrosshairs className="opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4 pt-1">
                    <span 
                      className={`p-3 rounded-2xl ${
                        isElectric 
                          ? 'bg-blue-50 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white' 
                          : 'bg-amber-50 text-amber-800 group-hover:bg-[#FEF08A] group-hover:text-[#121316]'
                      } transition-colors shadow-2xs`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#646A78] font-bold bg-[#FAF8F4] px-2.5 py-1 rounded-full border border-[#121316]/5">
                      {cat.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-[#121316] mb-1.5 group-hover:text-[#2563EB] transition-colors">
                    {cat.title}
                  </h3>

                  <p className="text-xs text-[#646A78] mb-6 leading-relaxed">
                    {cat.tagline}
                  </p>

                  {/* Skills List as Specimen entries */}
                  <div className="space-y-2.5">
                    {cat.skills.map((skill, sIdx) => (
                      <div 
                        key={sIdx}
                        className="p-2.5 rounded-xl bg-[#FAF8F4] group-hover:bg-white border border-[#121316]/5 hover:border-[#121316]/20 transition-all relative"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-bold text-[#121316]">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white border border-[#121316]/10 text-[#646A78] font-mono">
                            {skill.tag}
                          </span>
                        </div>
                        <p className="text-[11px] text-[#646A78] mt-0.5">
                          {skill.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer status */}
                <div className="mt-6 pt-4 border-t border-[#121316]/5 flex items-center justify-between text-[11px] text-[#646A78] font-mono">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
                    {cat.skills.length} Core Areas
                  </span>
                  <span className="font-semibold text-[#121316] bg-[#FEF9C3] px-2 py-0.5 rounded text-[10px]">
                    active // v1.0
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Learning Ethos Banner with Scrapbook Stamp */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-[#121316]/10 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden">
          <div className="absolute right-2 top-0 w-32 h-32 bg-polka-yellow opacity-15 pointer-events-none" />

          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-2xl bg-[#FEF08A] text-[#121316] shadow-xs">
              <Cpu className="w-5 h-5 text-[#2563EB]" />
            </span>
            <div>
              <h4 className="text-sm font-bold text-[#121316]">Always Expanding My Horizons</h4>
              <p className="text-xs text-[#646A78]">Currently experimenting with Three.js web 3D graphics, C memory internals, and kinetic motion reels.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <TechnicalStamp text="OPEN TO LEARN" subtext="HACKATHONS // CLUBS" color="blue" rotation="rotate-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
