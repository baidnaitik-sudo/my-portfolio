import React, { useEffect } from 'react';
import { X, ExternalLink, Sparkles, Layers, Calendar, User, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#FBF9F5] rounded-3xl border border-[#121316]/10 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#121316]/10 bg-white/70 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${project.badgeColor || 'bg-blue-50 text-blue-700 border-blue-200'}`}>
              {project.categoryLabel}
            </span>
            <span className="text-xs text-[#646A78] hidden sm:inline">•</span>
            <span className="text-xs font-semibold text-[#646A78] hidden sm:inline">{project.period}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-200/60 text-[#646A78] hover:text-[#121316] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Visual Banner Placeholder */}
          <div className={`w-full h-44 rounded-2xl bg-gradient-to-br ${project.gradient || 'from-blue-600/20 to-transparent'} border border-[#121316]/10 flex flex-col items-center justify-center p-6 text-center relative overflow-hidden`}>
            <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#121316]/60 mb-1">
              Case Study Snapshot
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#121316]">
              {project.title}
            </h3>
            <span className="mt-2 text-xs font-medium px-3 py-1 bg-white/80 rounded-full border border-black/5 text-[#121316]">
              Role: {project.role}
            </span>
          </div>

          {/* Project Details */}
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#646A78] mb-1.5">Project Overview</h4>
              <p className="text-sm sm:text-base text-[#32353E] leading-relaxed">
                {project.fullDesc || project.shortDesc}
              </p>
            </div>

            {/* Meta Attributes */}
            <div className="grid grid-cols-2 gap-4 py-3 border-y border-[#121316]/5">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-white border border-[#121316]/10 text-[#2563EB]">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#646A78]">Role</div>
                  <div className="text-xs font-bold text-[#121316]">{project.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-white border border-[#121316]/10 text-amber-600">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#646A78]">Context</div>
                  <div className="text-xs font-bold text-[#121316]">{project.period}</div>
                </div>
              </div>
            </div>

            {/* Tools Used */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#646A78] mb-2">Technologies & Creative Tools</h4>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 rounded-xl text-xs font-bold bg-white border border-[#121316]/10 text-[#121316] shadow-2xs"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="p-4 rounded-2xl bg-white border border-[#121316]/10 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#121316]">
                <Sparkles className="w-4 h-4 text-[#2563EB]" />
                <span>What I Learned Building This</span>
              </div>
              <ul className="text-xs text-[#4B5262] space-y-1.5 leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Iterative prototyping and handling real-world edge cases.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Balancing visual presentation with code maintainability and structure.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer Links */}
        <div className="px-6 py-4 bg-white/80 border-t border-[#121316]/10 flex items-center justify-between gap-4">
          <div className="text-xs text-[#646A78]">
            Editable in <code className="font-mono text-[#121316]">portfolioData.js</code>
          </div>

          <div className="flex items-center gap-3">
            {project.links?.github && project.links.github !== '#' && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#121316] bg-white border border-[#121316]/15 hover:bg-neutral-100 transition shadow-2xs"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            )}

            {project.links?.demo && project.links.demo !== '#' && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition shadow-xs"
              >
                <span>Live Project / Preview</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {(!project.links?.demo || project.links.demo === '#') && (!project.links?.github || project.links.github === '#') && (
              <span className="text-xs font-semibold text-[#646A78] italic">
                Demo links can be added in project config
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
