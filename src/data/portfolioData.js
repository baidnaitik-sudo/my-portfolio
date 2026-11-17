/**
 * PORTFOLIO DATA CONFIGURATION
 * --------------------------------------------------------------------------
 * Customize your personal details, projects, skills, and links here.
 * You can also edit these directly in the live browser via the "Customize" button!
 */

export const initialPortfolioData = {
  personal: {
    name: "Naitik",
    greeting: "Hey, I'm",
    headline: "A developer in progress, a creative at heart.",
    bio: "First-year Computer Science Engineering student bridging the gap between logic and visual storytelling. Passionate about writing clean code, designing intuitive interfaces, crafting engaging video content, and exploring bold ideas that connect people.",
    college: "Computer Science Engineering • Year 1",
    status: "Available for projects & summer internships",
    location: "India",
    resumeUrl: "#contact", // or path to PDF
  },

  socials: {
    email: "naitik.developer@example.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    instagram: "https://instagram.com/yourhandle",
    twitter: "https://twitter.com/yourhandle",
  },

  about: {
    badge: "The Creative Technologist Journey",
    storyParagraph1: "I began my journey captivated by both sides of creation: the structured logic of coding and the boundless freedom of graphic design and filmmaking. Rather than picking just one, I treat software engineering and design as two halves of the same craft.",
    storyParagraph2: "As a freshman in Computer Science, my days are spent mastering foundational algorithms, C programming, and web technologies — while my evenings are dedicated to experimenting with Figma layouts, video cuts in Premiere Pro, and brand identities that make heads turn.",
    quickPills: [
      { label: "Logic & Code", desc: "Structured problem solver", icon: "Code2" },
      { label: "Visual Aesthetics", desc: "Eye for typography & layouts", icon: "Palette" },
      { label: "Motion & Media", desc: "Video storytelling & rhythm", icon: "Film" },
      { label: "Fast Learner", desc: "Curious and adaptable mindset", icon: "Sparkles" },
    ],
    vibeWidget: {
      currentlyListening: "Midnight City • Lo-Fi Coding Beats",
      currentlyLearning: "Data Structures & Three.js 3D Web",
      currentMotto: "Code gives it function. Design gives it soul.",
    },
    stats: [
      { value: "1st", label: "Year CSE Undergrad" },
      { value: "15+", label: "Creative Projects & Edits" },
      { value: "5+", label: "Core Creative Disciplines" },
      { value: "100%", label: "Curiosity & Energy" },
    ]
  },

  skillCategories: [
    {
      id: "dev",
      title: "Programming & Development",
      category: "Code & Logic",
      tagline: "Building solid foundations from command-line logic to responsive interfaces.",
      icon: "Code2",
      accent: "electric",
      skills: [
        { name: "C Programming", note: "Pointers, Data Structures, Memory basics", tag: "Academic Core" },
        { name: "Python", note: "Scripting, Automation & Logic building", tag: "In Progress" },
        { name: "HTML5 & CSS3", note: "Semantic structure, Flexbox, Grid", tag: "Daily Driver" },
        { name: "JavaScript (ES6+)", note: "DOM manipulation, Async JS, Modern syntax", tag: "Active Focus" },
        { name: "React.js", note: "Component architecture, State, Hooks", tag: "Modern Web" },
        { name: "Tailwind CSS", note: "Utility-first modern styling & animations", tag: "Design Systems" },
        { name: "Git & GitHub", note: "Version control, branching, open-source workflow", tag: "Essential" },
      ]
    },
    {
      id: "design",
      title: "UI/UX & Graphic Design",
      category: "Aesthetics & Usability",
      tagline: "Designing clean, human-centered interfaces and bold visual assets.",
      icon: "Palette",
      accent: "butter",
      skills: [
        { name: "Figma", note: "Wireframing, UI kits, interactive prototyping", tag: "Primary Tool" },
        { name: "Visual Hierarchy", note: "Spacing systems, scale, visual weight", tag: "Core Principle" },
        { name: "Typography", note: "Font pairing, editorial layouts, readability", tag: "Obsession" },
        { name: "Adobe Photoshop", note: "Photo manipulation, poster art, texture blend", tag: "Visual Asset" },
        { name: "Color Theory", note: "Accessible palettes, mood boards, harmonic contrast", tag: "Theory & Practice" },
        { name: "Design Systems", note: "Reusable tokens, component consistency", tag: "Modern Workflow" },
      ]
    },
    {
      id: "video",
      title: "Video Editing & Content Creation",
      category: "Motion & Narrative",
      tagline: "Transforming raw footage into rhythm-driven visual stories.",
      icon: "Film",
      accent: "electric",
      skills: [
        { name: "Adobe Premiere Pro", note: "Timeline pacing, multi-track cutting, color grade", tag: "Primary NLE" },
        { name: "DaVinci Resolve", note: "Color grading, node-based workflows, audio fairlight", tag: "Exploring" },
        { name: "Motion & Transitions", note: "Keyframing, kinetic speed ramps, smooth cuts", tag: "Style" },
        { name: "Audio Design & Sync", note: "Sound effects, beat-syncing, atmospheric beds", tag: "Immersion" },
        { name: "Short-Form Content", note: "Hook retention, vertical 9:16 reels, TikTok pacing", tag: "Growth Focus" },
        { name: "Storyboarding", note: "Visual script planning, shot lists, director notes", tag: "Pre-production" },
      ]
    },
    {
      id: "thinking",
      title: "Creative Thinking & Problem Solving",
      category: "Mindset & Approach",
      tagline: "Connecting unexpected dots to discover novel, elegant solutions.",
      icon: "Lightbulb",
      accent: "butter",
      skills: [
        { name: "Algorithmic Logic", note: "Breaking complex challenges into solvable steps", tag: "CS Foundation" },
        { name: "Design Sprints", note: "Rapid brainstorming, sketching, fast feedback loops", tag: "Creative Sprint" },
        { name: "User Empathy", note: "Thinking from the perspective of non-technical users", tag: "UX Philosophy" },
        { name: "Cross-Disciplinary Thinking", note: "Borrowing ideas from cinema, art, and architecture", tag: "Unique Edge" },
        { name: "Tenacious Debugging", note: "Patience and systematic troubleshooting", tag: "Resilience" },
      ]
    },
    {
      id: "branding",
      title: "Branding & Marketing",
      category: "Identity & Reach",
      tagline: "Helping ideas find their voice, personality, and audience.",
      icon: "Megaphone",
      accent: "electric",
      skills: [
        { name: "Brand Identity Design", note: "Logos, brand guidelines, tone of voice", tag: "Identity" },
        { name: "Social Media Strategy", note: "Visual themes, content calendars, engagement", tag: "Digital Reach" },
        { name: "Visual Storytelling", note: "Communicating complex ideas through graphics", tag: "Clarity" },
        { name: "Event Promotion", note: "Campus fest campaigns, teaser rollout plans", tag: "Campus Life" },
        { name: "Community Building", note: "Engaging peers through interactive initiatives", tag: "Teamwork" },
      ]
    }
  ],

  projects: [
    {
      id: "sorting-visualizer",
      title: "AlgoPlay — Algorithm Visualizer",
      category: "code",
      categoryLabel: "Dev & Code",
      shortDesc: "An interactive web visualizer built to demystify sorting algorithms (Bubble, Insertion, Merge) with adjustable speed, step-by-step playback, and dynamic sound effects.",
      fullDesc: "As a freshman diving into Data Structures and Algorithms, I found text-heavy diagrams dull. I built AlgoPlay to turn sorting passes into an intuitive, audio-visual symphony where each bar vibrates and rings at its relative pitch. It allows users to adjust array sizes, control execution speed, and inspect time complexity in real time.",
      tools: ["React", "JavaScript (ES6+)", "Tailwind CSS", "Web Audio API"],
      featured: true,
      role: "Solo Developer & UI Designer",
      period: "College Sem 1 Experiment",
      links: {
        demo: "https://example.com/algoplay-demo",
        github: "https://github.com/yourusername/algoplay",
      },
      gradient: "from-blue-600/20 via-sky-400/10 to-transparent",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      themeAccent: "#2563EB"
    },
    {
      id: "club-rebrand",
      title: "Synthetix — Tech Club Brand Identity",
      category: "branding",
      categoryLabel: "Branding & Identity",
      shortDesc: "Complete visual identity rebrand for the college tech society, including a bespoke logo glyph, typography system, sticker pack, and social templates.",
      fullDesc: "The campus tech club needed an identity that felt energized, modern, and welcoming to freshmen rather than intimating. I designed a modular visual system inspired by cyber-punk minimalism, neon accents, and clean Swiss typography. Delivered a 24-page brand guidebook, 15 customizable social post templates, and event badge badges.",
      tools: ["Figma", "Adobe Illustrator", "Photoshop", "Brand Guidelines"],
      featured: true,
      role: "Lead Visual Designer",
      period: "Campus Project",
      links: {
        demo: "https://www.behance.net/gallery/example",
        github: "#",
      },
      gradient: "from-amber-400/20 via-yellow-200/10 to-transparent",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
      themeAccent: "#F59E0B"
    },
    {
      id: "fest-motion-teaser",
      title: "PulseFest '26 — Official Teaser & Reel",
      category: "video",
      categoryLabel: "Video & Motion",
      shortDesc: "A high-octane 60-second festival launch video featuring speed ramps, custom sound design, kinetic typography, and 3D camera tracker titles.",
      fullDesc: "Created the flagship promotional video for the annual college cultural festival. Combined raw campus footage with glitch aesthetics, rhythm-matched audio editing, and kinetic typography. The video achieved over 12,000 views within 48 hours of release across Instagram and college WhatsApp groups.",
      tools: ["Premiere Pro", "DaVinci Resolve", "Audacity", "Motion Design"],
      featured: true,
      role: "Video Editor & Sound Designer",
      period: "College Media Team",
      links: {
        demo: "https://youtube.com/watch?v=example",
        github: "#",
      },
      gradient: "from-purple-500/20 via-pink-400/10 to-transparent",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      themeAccent: "#9333EA"
    },
    {
      id: "devpulse-app-ui",
      title: "StudyLoop — Peer Learning App UI/UX",
      category: "design",
      categoryLabel: "UI/UX & Design",
      shortDesc: "A mobile-first UI concept created in Figma solving how engineering students find study groups, share lecture notes, and track assignment deadlines.",
      fullDesc: "Interviewed 12 fellow freshmen to understand pain points in tracking assignment deadlines and organizing cram sessions. Designed high-fidelity prototypes featuring clean card layouts, a warm cream dark-mode palette, quick-action navigation, and micro-interactions for homework completion.",
      tools: ["Figma", "User Research", "Wireframing", "Interactive Prototype"],
      featured: false,
      role: "Product Designer (Concept)",
      period: "Personal UX Case Study",
      links: {
        demo: "https://figma.com/@example/studyloop",
        github: "#",
      },
      gradient: "from-emerald-500/20 via-teal-300/10 to-transparent",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
      themeAccent: "#059669"
    },
    {
      id: "cli-finance-c",
      title: "CacheTrack — Terminal Expense Manager in C",
      category: "code",
      categoryLabel: "Dev & Code",
      shortDesc: "A modular CLI finance tool built in pure C featuring file-based persistence, dynamic memory allocation, and categorized spending reports.",
      fullDesc: "To deeply understand memory management, pointer arithmetic, and struct layouts in C, I engineered a command-line tool that lets students log expenses, filter by budget categories, compute monthly burn rates, and export summary reports to CSV. Includes robust error handling and input sanitization.",
      tools: ["C Language", "GCC", "Makefiles", "Data Structures"],
      featured: false,
      role: "Solo Developer",
      period: "Academic Project",
      links: {
        demo: "#",
        github: "https://github.com/yourusername/cachetrack-c",
      },
      gradient: "from-blue-600/20 via-indigo-400/10 to-transparent",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      themeAccent: "#2563EB"
    },
    {
      id: "tech-explainers",
      title: "BiteSize Tech — Social Content & Graphics",
      category: "branding",
      categoryLabel: "Marketing & Content",
      shortDesc: "A 10-part visual carousel and reel campaign breaking down foundational computer science concepts (like APIs, Git, and Binary) for beginners.",
      fullDesc: "Designed and wrote high-retention visual carousels using custom isometric illustrations and simple analogies. Focused on making complex concepts approachable, resulting in 200+ shares and engaging discussions in the student developer community.",
      tools: ["Photoshop", "Content Strategy", "Copywriting", "Visual Storytelling"],
      featured: false,
      role: "Content Creator & Designer",
      period: "Personal Initiative",
      links: {
        demo: "https://instagram.com/yourhandle",
        github: "#",
      },
      gradient: "from-yellow-400/20 via-orange-300/10 to-transparent",
      badgeColor: "bg-yellow-50 text-yellow-800 border-yellow-200",
      themeAccent: "#D97706"
    }
  ],

  experiences: [
    {
      role: "First-Year Computer Science Engineering Student",
      organization: "Engineering Institute",
      location: "Campus",
      period: "2026 — Present",
      type: "Academic Journey",
      status: "Current",
      highlights: [
        "Studying foundational computer science principles: C Programming, Discrete Mathematics, Problem Solving, and Computer Architecture.",
        "Actively building side projects to bridge the gap between classroom theory and real-world software creation.",
        "Exploring web development stacks, Git workflows, and UI engineering."
      ],
      tags: ["C Language", "DSA Basics", "Computer Architecture", "Web Technologies"],
      accentColor: "#2563EB"
    },
    {
      role: "Creative & Design Lead",
      organization: "Google Developer Groups on Campus / Tech Club",
      location: "Campus Chapter",
      period: "2026 — Present",
      type: "Student Leadership",
      status: "Active",
      highlights: [
        "Overseeing the visual identity, event posters, banners, and digital collateral for club workshops and tech talks.",
        "Collaborated with technical leads to organize hands-on hackathons and intro-to-tech induction sessions for freshers.",
        "Established a reusable Figma design system that reduced promo graphic turnaround time by 50%."
      ],
      tags: ["Figma", "Design Direction", "Event Promotion", "Team Collaboration"],
      accentColor: "#F59E0B"
    },
    {
      role: "Media & Video Editor Volunteer",
      organization: "Annual College Cultural & Tech Fest",
      location: "College Media Team",
      period: "2026",
      type: "Event Media & Storytelling",
      status: "Completed",
      highlights: [
        "Edited high-energy teaser trailers, daily event recaps, and speaker spotlight reels with custom sound design.",
        "Managed on-ground media capture workflows and delivered same-day recap cuts for social media publishing.",
        "Gained hands-on experience working under tight event deadlines and rapid revision cycles."
      ],
      tags: ["Premiere Pro", "Pacing & Sound", "On-Ground Media", "Agile Editing"],
      accentColor: "#9333EA"
    },
    {
      role: "Hackathon Participant & UI Prototype Lead",
      organization: "Freshman HackSprint 2026",
      location: "Hackathon",
      period: "2026",
      type: "Collaborative Build",
      status: "Completed",
      highlights: [
        "Teamed up with 3 peers to build a campus assistance prototype within 24 intense hours.",
        "Owned the user journey, wireframing, and frontend presentation, pitching the solution to senior judges.",
        "Strengthened teamwork, Git branching collaboration, and rapid prototyping under high-pressure constraints."
      ],
      tags: ["24h Hackathon", "Pitch & Demo", "Frontend UI", "Teamwork"],
      accentColor: "#059669"
    }
  ],

  creativePlayground: [
    {
      title: "Graphic Experiments",
      desc: "Typography posters, Swiss style grids, abstract geometric shapes.",
      icon: "Sparkles",
      color: "bg-amber-100/70 border-amber-300 text-amber-900"
    },
    {
      title: "Audio & Rhythm",
      desc: "Beat-synced video transitions, Lo-Fi textures, foley sound layering.",
      icon: "Headphones",
      color: "bg-blue-100/70 border-blue-300 text-blue-900"
    },
    {
      title: "Creative Code",
      desc: "CSS micro-interactions, canvas particle physics, interactive cards.",
      icon: "Terminal",
      color: "bg-emerald-100/70 border-emerald-300 text-emerald-900"
    },
    {
      title: "Visual Branding",
      desc: "Logomarks, modern color harmonies, personality-driven identity.",
      icon: "Layers",
      color: "bg-purple-100/70 border-purple-300 text-purple-900"
    }
  ]
};
