import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProfileEditorModal from './components/ProfileEditorModal';
import { usePortfolioData } from './hooks/usePortfolioData';
import { Sparkles, Edit3 } from 'lucide-react';

export default function App() {
  const { data, updatePersonal, updateSocials, resetToDefault } = usePortfolioData();
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#121316] font-sans selection:bg-[#FEF08A] selection:text-[#121316]">
      {/* Floating Header Navbar */}
      <Navbar 
        personal={data.personal} 
        onOpenEditor={() => setIsEditorOpen(true)} 
      />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero 
          personal={data.personal} 
          onOpenEditor={() => setIsEditorOpen(true)} 
        />

        {/* 2. About Me Section */}
        <About 
          about={data.about} 
          personal={data.personal} 
        />

        {/* 3. Skills & Interests Section */}
        <Skills 
          categories={data.skillCategories} 
        />

        {/* 4. Projects Section */}
        <Projects 
          projects={data.projects} 
        />

        {/* 5. Experience & Activities Section */}
        <Experience 
          experiences={data.experiences} 
          onOpenEditor={() => setIsEditorOpen(true)} 
        />

        {/* 6. Contact Section */}
        <Contact 
          socials={data.socials} 
          personal={data.personal} 
        />
      </main>

      {/* Footer */}
      <Footer 
        personal={data.personal} 
        onOpenEditor={() => setIsEditorOpen(true)} 
      />

      {/* Profile Customizer Modal */}
      <ProfileEditorModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        data={data}
        onUpdatePersonal={updatePersonal}
        onUpdateSocials={updateSocials}
        onReset={resetToDefault}
      />

      {/* Floating Bottom Quick Action Pill */}
      <aside aria-label="Portfolio customization" className="fixed bottom-5 right-5 z-30">
        <button
          onClick={() => setIsEditorOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#121316] text-[#FEF08A] hover:bg-[#2563EB] hover:text-white transition-all shadow-[0_8px_25px_rgba(0,0,0,0.18)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.4)] text-xs font-bold transform hover:-translate-y-1 active:translate-y-0 border border-white/10 cursor-pointer"
          title="Click to customize portfolio details"
        >
          <Edit3 className="w-4 h-4" />
          <span>Customize Profile</span>
        </button>
      </aside>
    </div>
  );
}
