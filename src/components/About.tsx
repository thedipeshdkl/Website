import React from 'react';
import { 
  ShieldAlert, 
  Code2, 
  Layout, 
  Database 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const capabilityCards = [
    {
      title: "Penetration Testing",
      desc: "Web application security audits, vulnerability scans, and OSINT research.",
      icon: ShieldAlert,
      bgClass: "bg-red-950/40 border-red-500/30 text-red-400"
    },
    {
      title: "Web Development",
      desc: "Developing React, TypeScript, and Python web software.",
      icon: Code2,
      bgClass: "bg-amber-950/40 border-amber-500/30 text-[var(--purple)]"
    },
    {
      title: "UI/UX Design",
      desc: "Designing dashboards and user interfaces for clarity and usability.",
      icon: Layout,
      bgClass: "bg-amber-950/40 border-amber-500/30 text-[var(--purple)]"
    },
    {
      title: "Data Analysis",
      desc: "Web crawlers, log analysis, and structured data extraction.",
      icon: Database,
      bgClass: "bg-emerald-950/40 border-emerald-500/30 text-[var(--purple)]"
    }
  ];

  return (
    <section id="about" className="py-14 relative z-10 border-t border-gray-700/50">
      
      <div className="max-w-7xl mx-auto">
      <div className="space-y-8 text-left">
        
        {/* Section Header */}
        <div className="space-y-3">
          <span className="text-xs font-mono text-[var(--purple)] uppercase tracking-widest block font-semibold">
            PROFILE & BACKGROUND
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-100 tracking-tight">
            About Me
          </h2>
          <div className="space-y-3 max-w-3xl">
            {PERSONAL_INFO.aboutParagraphs.map((para, idx) => (
              <p key={idx} className="text-gray-400 text-sm sm:text-base leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* 4 Capability Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          {capabilityCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="clean-panel rounded-2xl p-5 border border-gray-700/50 hover:border-stone-700 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${card.bgClass}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-stone-100 text-sm group-hover:text-emerald-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
      </div>

    </section>
  );
};
