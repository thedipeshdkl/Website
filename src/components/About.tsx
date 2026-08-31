import React from 'react';
import { 
  ShieldAlert, 
  GlobeLock, 
  ScanSearch, 
  Network,
  Bot,
  Code2,
  BookOpen
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const focusAreas = [
    {
      title: "Ethical Hacking & Pentesting",
      desc: "Simulating attacks to identify and patch system vulnerabilities.",
      icon: ShieldAlert,
      bgClass: "bg-red-950/40 border-red-500/30 text-red-400"
    },
    {
      title: "Web App Security",
      desc: "Securing web applications against OWASP Top 10 and advanced threats.",
      icon: GlobeLock,
      bgClass: "bg-emerald-950/40 border-emerald-500/30 text-emerald-400"
    },
    {
      title: "Vulnerability Assessment",
      desc: "Systematic review of security weaknesses and risk evaluation.",
      icon: ScanSearch,
      bgClass: "bg-amber-950/40 border-amber-500/30 text-amber-400"
    },
    {
      title: "Network Security",
      desc: "Analyzing network traffic and defending infrastructure.",
      icon: Network,
      bgClass: "bg-blue-950/40 border-blue-500/30 text-blue-400"
    },
    {
      title: "Security Automation",
      desc: "Building scripts and tools to automate security workflows.",
      icon: Bot,
      bgClass: "bg-purple-950/40 border-purple-500/30 text-purple-400"
    },
    {
      title: "Secure Software Dev",
      desc: "Integrating security practices throughout the SDLC.",
      icon: Code2,
      bgClass: "bg-stone-800/40 border-stone-500/30 text-stone-300"
    },
    {
      title: "Cybersecurity Research",
      desc: "Studying emerging threats and novel mitigation techniques.",
      icon: BookOpen,
      bgClass: "bg-rose-950/40 border-rose-500/30 text-rose-400"
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

        {/* Areas of Focus Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {focusAreas.map((card, idx) => {
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
