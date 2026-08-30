import React, { useState } from 'react';
import { 
  Code2, 
  ShieldCheck, 
  Wrench, 
  Sparkles, 
  Layers 
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const tabIcons: Record<string, React.ElementType> = {
    all: Layers,
    cybersecurity: ShieldCheck,
    development: Code2,
    tools: Wrench,
    other: Sparkles,
  };

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-amber-950/80 text-amber-300 border-amber-500/40 shadow-[0_0_8px_rgba(245,158,11,0.2)]';
      case 'Advanced':
        return 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40 shadow-[0_0_8px_rgba(16,185,129,0.2)]';
      case 'Intermediate':
      default:
        return 'bg-[var(--secondary)] text-gray-400 border-stone-700/60';
    }
  };

  const filteredCategories = activeTab === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-14 relative z-10 border-t border-gray-700/50">
      
      <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="space-y-3 text-left mb-8">
        <span className="text-xs font-mono text-[var(--purple)] uppercase tracking-widest block font-semibold">
          TECHNICAL SKILLS & COMPETENCIES
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-100 tracking-tight">
          Skills & Capabilities
        </h2>
        <p className="text-gray-500 text-sm max-w-2xl">
          Skills organized across offensive security, web application development, security tooling, and interface design.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        <button
          onClick={() => setActiveTab('all')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs font-semibold transition-all ${
            activeTab === 'all'
              ? 'bg-amber-600 text-stone-100 shadow-md'
              : 'bg-[var(--secondary)] text-gray-500 border border-gray-700/50 hover:text-gray-400'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>All Domains</span>
        </button>

        {SKILL_CATEGORIES.map((cat) => {
          const Icon = tabIcons[cat.id] || Sparkles;
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-amber-600 text-stone-100 shadow-md'
                  : 'bg-[var(--secondary)] text-gray-500 border border-gray-700/50 hover:text-gray-400'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{cat.title}</span>
            </button>
          );
        })}
      </div>

      {/* Category Cards Display with Image Banners */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            className="clean-panel rounded-2xl border border-gray-700/50 text-left clean-panel-hover transition-all space-y-5 overflow-hidden group shadow-lg"
          >
            {/* Category Picture Banner */}
            {category.imagePath && (
              <div className="relative h-36 w-full overflow-hidden border-b border-gray-700/50 bg-[#0f172a]">
                <img
                  src={category.imagePath}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-stone-100 tracking-wide">
                    {category.title}
                  </h3>
                  <span className="font-mono text-[10px] text-emerald-300 bg-[#0f172a]/90 px-2.5 py-0.5 rounded-full border border-stone-700">
                    {category.skills.length} competencies
                  </span>
                </div>
              </div>
            )}

            <div className="p-5 sm:p-6 space-y-4 pt-0">
              <p className="text-xs text-gray-500 font-normal">
                {category.description}
              </p>

              {/* Skills Badge Grid */}
              <div className="flex flex-wrap gap-2 pt-1">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`flex items-center justify-between gap-2.5 px-3 py-1.5 rounded-lg border font-mono text-xs transition-all hover:scale-105 cursor-default ${getLevelBadgeColor(
                      skill.level
                    )}`}
                  >
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-[9px] opacity-75 font-sans px-1.5 py-0.2 rounded bg-black/40">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
      </div>

    </section>
  );
};
