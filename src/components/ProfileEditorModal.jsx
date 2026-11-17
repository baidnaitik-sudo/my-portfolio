import React, { useState } from 'react';
import { X, Sparkles, Check, RotateCcw, Copy } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ProfileEditorModal({ isOpen, onClose, data, onUpdatePersonal, onUpdateSocials, onReset }) {
  const [personal, setPersonal] = useState({ ...data.personal });
  const [socials, setSocials] = useState({ ...data.socials });
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e) => {
    e.preventDefault();
    onUpdatePersonal(personal);
    onUpdateSocials(socials);
    setSavedSuccess(true);
    
    // Fun confetti burst
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // ignore
    }

    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 900);
  };

  const handleReset = () => {
    if (window.confirm("Reset all customizations back to default values?")) {
      onReset();
      setPersonal({ ...data.personal });
      setSocials({ ...data.socials });
      onClose();
    }
  };

  const handleCopyJson = () => {
    const exportCode = `export const initialPortfolioData = ${JSON.stringify({ ...data, personal, socials }, null, 2)};`;
    navigator.clipboard.writeText(exportCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-[#FBF9F5] rounded-3xl border border-[#121316]/10 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#121316]/10 bg-white/60 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-[#FEF08A] text-[#121316]">
              <Sparkles className="w-5 h-5 text-[#2563EB]" />
            </span>
            <div>
              <h2 className="text-lg font-bold font-heading text-[#121316]">Quick Profile Customizer</h2>
              <p className="text-xs text-[#646A78]">Change your name, bio, and links in real time!</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-neutral-200/60 text-[#646A78] hover:text-[#121316] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-6 space-y-6">
          {savedSuccess && (
            <div className="p-3 bg-emerald-100 border border-emerald-300 text-emerald-900 rounded-xl text-sm font-medium flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-700" />
              Profile updated successfully! Refresh anytime, changes stay saved.
            </div>
          )}

          {/* Section: Personal Info */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#646A78] mb-3">1. Personal Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#121316] mb-1">Your Full Name</label>
                <input 
                  type="text" 
                  value={personal.name} 
                  onChange={(e) => setPersonal({ ...personal, name: e.target.value })}
                  placeholder="e.g. Alex Rivera or Naitik"
                  className="w-full px-3 py-2 text-sm bg-white border border-[#E8E2D8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 font-medium text-[#121316]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#121316] mb-1">College / Academic Status</label>
                <input 
                  type="text" 
                  value={personal.college} 
                  onChange={(e) => setPersonal({ ...personal, college: e.target.value })}
                  placeholder="e.g. Computer Science Engineering • Year 1"
                  className="w-full px-3 py-2 text-sm bg-white border border-[#E8E2D8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 text-[#121316]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-[#121316] mb-1">Hero Subtitle</label>
                <input 
                  type="text" 
                  value={personal.headline} 
                  onChange={(e) => setPersonal({ ...personal, headline: e.target.value })}
                  placeholder="e.g. A developer in progress, a creative at heart."
                  className="w-full px-3 py-2 text-sm bg-white border border-[#E8E2D8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 text-[#121316]"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-[#121316] mb-1">Short Bio</label>
                <textarea 
                  rows={3}
                  value={personal.bio} 
                  onChange={(e) => setPersonal({ ...personal, bio: e.target.value })}
                  placeholder="Brief introduction about your passions and goals..."
                  className="w-full px-3 py-2 text-sm bg-white border border-[#E8E2D8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 text-[#121316] leading-relaxed resize-none"
                />
              </div>
            </div>
          </div>

          {/* Section: Social & Contact Links */}
          <div className="pt-2 border-t border-[#121316]/10">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#646A78] mb-3">2. Social Links & Email</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#121316] mb-1">Contact Email</label>
                <input 
                  type="email" 
                  value={socials.email} 
                  onChange={(e) => setSocials({ ...socials, email: e.target.value })}
                  placeholder="youremail@example.com"
                  className="w-full px-3 py-2 text-sm bg-white border border-[#E8E2D8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 text-[#121316]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#121316] mb-1">LinkedIn Profile</label>
                <input 
                  type="url" 
                  value={socials.linkedin} 
                  onChange={(e) => setSocials({ ...socials, linkedin: e.target.value })}
                  placeholder="https://linkedin.com/in/yourname"
                  className="w-full px-3 py-2 text-sm bg-white border border-[#E8E2D8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 text-[#121316]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#121316] mb-1">GitHub Profile</label>
                <input 
                  type="url" 
                  value={socials.github} 
                  onChange={(e) => setSocials({ ...socials, github: e.target.value })}
                  placeholder="https://github.com/yourname"
                  className="w-full px-3 py-2 text-sm bg-white border border-[#E8E2D8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 text-[#121316]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#121316] mb-1">Instagram Profile</label>
                <input 
                  type="url" 
                  value={socials.instagram} 
                  onChange={(e) => setSocials({ ...socials, instagram: e.target.value })}
                  placeholder="https://instagram.com/yourhandle"
                  className="w-full px-3 py-2 text-sm bg-white border border-[#E8E2D8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 text-[#121316]"
                />
              </div>
            </div>
          </div>

          <div className="p-3 bg-[#FEF9C3]/80 border border-[#FEF08A] rounded-xl text-xs text-[#713F12] flex items-center justify-between">
            <span>💡 <strong>Tip:</strong> Changes save in your browser automatically. You can also edit <code>src/data/portfolioData.js</code> directly!</span>
            <button
              type="button"
              onClick={handleCopyJson}
              className="ml-2 px-2.5 py-1 text-xs bg-white text-[#713F12] rounded-lg border border-[#FDE047] hover:bg-neutral-50 flex items-center gap-1 font-semibold transition"
            >
              <Copy className="w-3 h-3" />
              {copiedCode ? "Copied!" : "Copy Code"}
            </button>
          </div>

          {/* Footer Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-[#121316]/10">
            <button
              type="button"
              onClick={handleReset}
              className="px-3 py-2 text-xs font-medium text-[#646A78] hover:text-rose-600 flex items-center gap-1 transition"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Defaults
            </button>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-[#646A78] hover:text-[#121316] rounded-xl hover:bg-neutral-200/50 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                Save & Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
