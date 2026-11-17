import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Code2, 
  Palette, 
  Film, 
  Megaphone, 
  Sparkles, 
  Layers, 
  ExternalLink, 
  Eye,
  Bookmark
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import ProjectModal from './ProjectModal';
import { WashiTape, Sticker, TechnicalStamp, BarcodeTag, CornerCrosshairs } from './ScrapbookElements';

export default function Projects({ projects }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', label: `All Works (${projects.length})` },
    { id: 'code', label: 'Dev & Code' },
    { id: 'design', label: 'UI/UX & Design' },
    { id: 'video', label: 'Video & Motion' },
    { id: 'branding', label: 'Branding & Reach' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const tapeColors = ['yellow', 'blue', 'rose', 'neutral'];

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 bg-[#FAF8F4] relative border-t border-[#121316]/5 overflow-hidden">
      {/* Polka Dot Matrix Layer */}
      <div className="absolute inset-0 bg-polka-subtle opacity-70 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header with Scrapbook Stamp */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#121316]/10 text-xs font-bold text-[#2563EB] shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                <span className="font-mono">03 // FEATURED CASE FILES</span>
              </div>
              <Sticker variant="yellow" rotation="rotate-2" className="text-[11px] py-0.5">
                <span>PORTFOLIO LOGS</span>
              </Sticker>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-[#121316] tracking-tight">
              Selected works & <span className="text-[#2563EB]">creative builds</span>.
            </h2>
            <p className="text-[#646A78] text-base sm:text-lg max-w-xl">
              From academic C experiments and React visualizers to brand guidelines and cinematic video reels.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1.5 bg-white p-1.5 rounded-2xl border border-[#121316]/10 shadow-xs">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#121316] text-[#FEF08A] shadow-xs'
                    : 'text-[#646A78] hover:text-[#121316] hover:bg-neutral-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with Scrapbook Washi Tape & Polka Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => {
            const tapeColor = tapeColors[idx % tapeColors.length];
            return (
              <div
                key={project.id}
                className="group bg-white rounded-3xl border border-[#121316]/10 hover:border-[#2563EB]/40 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_40px_rgba(37,99,235,0.1)] transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer relative hover:-translate-y-1"
                onClick={() => setSelectedProject(project)}
              >
                {/* Washi Tape strip on card header */}
                <div className="absolute -top-3 right-6 z-30 pointer-events-none">
                  <WashiTape color={tapeColor} rotation={idx % 2 === 0 ? 'rotate-2' : '-rotate-2'} width="w-24" height="h-5">
                    <span className="font-mono text-[8px] font-bold opacity-80">CASE #{idx + 1}</span>
                  </WashiTape>
                </div>

                <div>
                  {/* Visual Placeholder / Mockup Area with Polka Dots inside */}
                  <div className={`relative h-48 w-full bg-gradient-to-br ${project.gradient} p-5 flex flex-col justify-between overflow-hidden border-b border-[#121316]/5`}>
                    {/* Polka dot pattern inside card canvas */}
                    <div className="absolute inset-0 bg-polka-dots opacity-40 pointer-events-none" />

                    {/* Top Bar inside mockup */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${project.badgeColor} shadow-2xs`}>
                        {project.categoryLabel}
                      </span>
                      <span className="text-[10px] font-semibold text-[#121316]/80 bg-white/80 px-2.5 py-0.5 rounded-full backdrop-blur-xs font-mono">
                        {project.period}
                      </span>
                    </div>

                    {/* Center Graphic Artwork Mockup with Die-Cut Sticker style */}
                    <div className="relative z-10 my-auto text-center transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-300">
                      <div className="inline-block p-3.5 rounded-2xl bg-white/95 shadow-md border-2 border-white sticker-border">
                        {project.category === 'code' && <Code2 className="w-8 h-8 text-[#2563EB]" />}
                        {project.category === 'design' && <Palette className="w-8 h-8 text-emerald-600" />}
                        {project.category === 'video' && <Film className="w-8 h-8 text-purple-600" />}
                        {project.category === 'branding' && <Megaphone className="w-8 h-8 text-amber-600" />}
                      </div>
                    </div>

                    {/* Bottom Preview Pill */}
                    <div className="relative z-10 flex items-center justify-between text-[11px] text-[#121316]/80 font-medium">
                      <span className="truncate max-w-[180px] font-mono text-[10px]">{project.role}</span>
                      <span className="inline-flex items-center gap-1 text-[#2563EB] font-bold group-hover:underline">
                        <Eye className="w-3.5 h-3.5" /> Quick View
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold font-heading text-[#121316] group-hover:text-[#2563EB] transition-colors leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs text-[#4B5262] leading-relaxed line-clamp-3">
                      {project.shortDesc}
                    </p>

                    {/* Tools Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tools.slice(0, 3).map((tool, tIdx) => (
                        <span 
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-lg text-[10px] font-bold bg-[#FBF9F5] text-[#121316] border border-[#121316]/10 font-mono"
                        >
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 3 && (
                        <span className="px-2 py-0.5 rounded-lg text-[10px] font-semibold text-[#646A78] bg-neutral-100 font-mono">
                          +{project.tools.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 flex items-center justify-between gap-2 border-t border-[#121316]/5 mt-4 pt-4">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#121316] hover:text-[#2563EB] transition-colors cursor-pointer"
                  >
                    <span>View Case File</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  <div className="flex items-center gap-1">
                    {project.links?.github && project.links.github !== '#' && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-xl text-[#646A78] hover:text-[#121316] hover:bg-neutral-100 transition-colors"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}

                    {project.links?.demo && project.links.demo !== '#' && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-xl text-[#2563EB] hover:bg-blue-50 transition-colors"
                        title="Open Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Git & Open Source Footnote Sticker */}
        <div className="mt-14 p-6 rounded-3xl bg-white border border-[#121316]/10 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 relative overflow-hidden">
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-2xl bg-[#121316] text-[#FEF08A] shadow-xs">
              <GithubIcon className="w-5 h-5" />
            </span>
            <div>
              <h4 className="text-sm font-bold text-[#121316]">Curious to Inspect the Source?</h4>
              <p className="text-xs text-[#646A78]">All academic algorithms, prototypes, and web apps are open-source and documented on GitHub.</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <BarcodeTag code="GIT-MAIN-HEAD" coordinates="SHA: 8A4C91" />
          </div>
        </div>

        {/* Project Callout Footer */}
        <div className="mt-8 text-center text-xs text-[#646A78]">
          Have a cool idea for a college project or hackathon?{' '}
          <a href="#contact" className="text-[#2563EB] font-bold hover:underline">
            Let's collaborate and build it together!
          </a>
        </div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
