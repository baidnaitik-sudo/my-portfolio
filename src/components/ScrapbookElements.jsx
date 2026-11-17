import React from 'react';
import { Sparkles, Terminal, Code2, Zap, CheckCircle2, Bookmark, Flame } from 'lucide-react';

/**
 * Washi Tape strip for pinning cards, photos, or badges like in a physical sketchbook.
 */
export function WashiTape({ 
  color = 'yellow', 
  className = '', 
  rotation = '-rotate-2',
  width = 'w-24',
  height = 'h-5',
  children
}) {
  const colorMap = {
    yellow: 'washi-tape-yellow text-amber-950 font-bold',
    blue: 'washi-tape-blue text-blue-950 font-bold',
    rose: 'washi-tape-rose text-rose-950 font-bold',
    neutral: 'washi-tape-neutral text-stone-800 font-bold',
  };

  return (
    <div 
      aria-hidden={!children}
      className={`inline-flex items-center justify-center text-[10px] font-mono tracking-wider select-none pointer-events-none z-20 ${width} ${height} ${colorMap[color] || colorMap.yellow} ${rotation} ${className}`}
      style={{ minHeight: '18px' }}
    >
      {children}
    </div>
  );
}

/**
 * Die-Cut Sticker with thick white sticker edge, shadow, and interactive tilt.
 */
export function Sticker({ 
  children, 
  className = '', 
  rotation = 'rotate-0',
  hoverRotation = 'group-hover:rotate-0',
  variant = 'white', // 'white', 'dark', 'yellow', 'holo', 'tag'
  interactive = true,
  onClick
}) {
  const baseVariants = {
    white: 'bg-white text-[#121316] sticker-border',
    dark: 'bg-[#121316] text-[#FEF08A] sticker-border-dark',
    yellow: 'bg-[#FEF08A] text-[#121316] border-2 border-white shadow-[0_4px_12px_rgba(245,158,11,0.25)]',
    blue: 'bg-[#2563EB] text-white border-2 border-white shadow-[0_4px_14px_rgba(37,99,235,0.35)]',
    holo: 'bg-gradient-to-r from-pink-100 via-sky-100 to-amber-100 text-[#121316] sticker-border border border-white/60',
    tag: 'bg-[#FAF8F4] text-[#121316] border border-[#121316]/20 shadow-xs'
  };

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold transition-all duration-300 select-none ${
        interactive ? 'cursor-pointer hover:scale-105 active:scale-95' : ''
      } ${baseVariants[variant] || baseVariants.white} ${rotation} ${hoverRotation} ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Perforated / stamped technical seal (looks like ink stamp on engineering blueprint).
 */
export function TechnicalStamp({ 
  text = 'VERIFIED // CSE', 
  subtext = 'BUILD: 2026.01',
  color = 'blue', // 'blue', 'red', 'charcoal'
  className = '',
  rotation = '-rotate-6'
}) {
  const colorStyles = {
    blue: 'text-[#2563EB] border-[#2563EB]/40 bg-[#2563EB]/5',
    red: 'text-rose-600 border-rose-500/40 bg-rose-500/5',
    charcoal: 'text-[#121316] border-[#121316]/30 bg-[#121316]/5'
  };

  return (
    <div className={`inline-flex flex-col items-center justify-center px-3 py-1.5 rounded-lg border-2 border-dashed font-mono text-center select-none uppercase tracking-widest ${colorStyles[color]} ${rotation} ${className}`}>
      <span className="text-[11px] font-black leading-tight flex items-center gap-1">
        <CheckCircle2 className="w-3 h-3 inline" />
        {text}
      </span>
      {subtext && <span className="text-[8px] font-semibold opacity-75 tracking-wider">{subtext}</span>}
    </div>
  );
}

/**
 * Barcode & Coordinate Tag for a technical hardware / engineering scrapbook look.
 */
export function BarcodeTag({ 
  code = 'CSE-DEV-2026', 
  coordinates = '12.97°N 77.59°E',
  className = '' 
}) {
  return (
    <div className={`inline-flex items-center gap-3 px-3 py-1 rounded-md bg-white/80 border border-[#121316]/10 font-mono text-[10px] text-[#646A78] shadow-2xs backdrop-blur-xs select-none ${className}`}>
      {/* Mini SVG Barcode */}
      <svg className="h-4 w-14 fill-current text-[#121316]" viewBox="0 0 100 24">
        <rect x="0" y="0" width="4" height="24" />
        <rect x="6" y="0" width="2" height="24" />
        <rect x="11" y="0" width="5" height="24" />
        <rect x="18" y="0" width="2" height="24" />
        <rect x="23" y="0" width="4" height="24" />
        <rect x="30" y="0" width="6" height="24" />
        <rect x="39" y="0" width="3" height="24" />
        <rect x="44" y="0" width="2" height="24" />
        <rect x="49" y="0" width="5" height="24" />
        <rect x="56" y="0" width="4" height="24" />
        <rect x="63" y="0" width="2" height="24" />
        <rect x="67" y="0" width="7" height="24" />
        <rect x="76" y="0" width="3" height="24" />
        <rect x="82" y="0" width="4" height="24" />
        <rect x="88" y="0" width="2" height="24" />
        <rect x="92" y="0" width="6" height="24" />
      </svg>
      <div className="flex flex-col text-[9px] leading-tight">
        <span className="font-bold text-[#121316]">{code}</span>
        {coordinates && <span className="opacity-70 text-[8px]">{coordinates}</span>}
      </div>
    </div>
  );
}

/**
 * Pinned Sticky Note with paperclip or tape.
 */
export function StickyNote({ 
  title = "Dev Note", 
  children, 
  color = "yellow", // "yellow", "blue", "cream"
  rotation = "rotate-2",
  className = "" 
}) {
  const bgColors = {
    yellow: "bg-[#FEF9C3] text-amber-950 border-amber-300/80 shadow-[0_6px_20px_rgba(245,158,11,0.15)]",
    blue: "bg-[#EFF6FF] text-blue-950 border-blue-200 shadow-[0_6px_20px_rgba(37,99,235,0.12)]",
    cream: "bg-[#FFFDF9] text-[#121316] border-[#E8E2D8] shadow-[0_6px_20px_rgba(0,0,0,0.06)]"
  };

  return (
    <div className={`relative p-4 rounded-xl border font-sans text-xs max-w-xs transition-transform duration-300 hover:rotate-0 ${bgColors[color]} ${rotation} ${className}`}>
      {/* Decorative Washi Tape across top */}
      <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-4 washi-tape-yellow -rotate-1 rounded-xs pointer-events-none opacity-85" />

      {/* Title / Header */}
      {title && (
        <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-black/10 font-mono text-[10px] font-bold uppercase tracking-wider opacity-80">
          <span>// {title}</span>
          <span>📌</span>
        </div>
      )}

      {/* Content */}
      <div className="space-y-1 text-xs leading-relaxed">
        {children}
      </div>
    </div>
  );
}

/**
 * Blueprint / Technical corner crosshairs (+)
 */
export function CornerCrosshairs({ className = "" }) {
  return (
    <>
      <span className={`absolute -top-2 -left-2 text-[#2563EB]/40 font-mono text-xs select-none pointer-events-none font-bold ${className}`}>+</span>
      <span className={`absolute -top-2 -right-2 text-[#2563EB]/40 font-mono text-xs select-none pointer-events-none font-bold ${className}`}>+</span>
      <span className={`absolute -bottom-2 -left-2 text-[#2563EB]/40 font-mono text-xs select-none pointer-events-none font-bold ${className}`}>+</span>
      <span className={`absolute -bottom-2 -right-2 text-[#2563EB]/40 font-mono text-xs select-none pointer-events-none font-bold ${className}`}>+</span>
    </>
  );
}
