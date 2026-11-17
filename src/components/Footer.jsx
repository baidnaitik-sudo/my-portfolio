import React from 'react';
import { ArrowUp, Heart, Sparkles, Terminal, Code, Cpu } from 'lucide-react';
import { WashiTape, Sticker, TechnicalStamp, BarcodeTag } from './ScrapbookElements';

export default function Footer({ personal, onOpenEditor }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 px-4 sm:px-8 bg-[#121316] text-[#FAF8F4] relative overflow-hidden">
      {/* Subtle Polka Dot Accent in Footer */}
      <div className="absolute inset-0 bg-polka-dots opacity-5 pointer-events-none" />

      {/* Subtle top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#FEF08A]/40 to-transparent" />

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-[#FEF08A] text-[#121316] font-bold flex items-center justify-center font-heading text-sm shadow-sm">
                {(personal.name || 'N').charAt(0).toUpperCase()}
              </span>
              <span className="text-lg font-bold font-heading text-white">
                {personal.name || '[YOUR NAME]'}
              </span>
              <Sticker variant="yellow" rotation="rotate-2" className="text-[10px] py-0.5 ml-1">
                <span>EST. 2024</span>
              </Sticker>
            </div>
            <p className="text-xs text-neutral-400 mt-1.5 max-w-sm font-mono">
              CSE Undergrad • Creative Technologist & Visual Craftsman
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Quick Back to Top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-all transform hover:-translate-y-0.5 border border-white/10 cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-1.5 flex-wrap justify-center sm:justify-start font-mono text-[11px]">
            <span>© {new Date().getFullYear()} {personal.name || 'Dev'}. Engineered with</span>
            <span className="text-[#FEF08A] font-semibold">React + Tailwind</span>
            <span>&</span>
            <span className="text-blue-400 font-semibold">Vite</span>
          </div>

          <div className="flex items-center gap-3 font-mono text-[11px]">
            <button
              onClick={onOpenEditor}
              className="text-neutral-400 hover:text-[#FEF08A] transition-colors underline underline-offset-4 cursor-pointer"
            >
              Customize profile info
            </button>
            <span>•</span>
            <span className="text-neutral-500 italic">"Code gives it function. Design gives it soul."</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
