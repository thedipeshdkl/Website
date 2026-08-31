import React from 'react';
import { Terminal, Shield, ExternalLink, Code, Search, Skull } from 'lucide-react';
import { SECURITY_LABS, type SecurityLab } from '../data/portfolioData';

export const SecurityLabs: React.FC = () => {
  const getIcon = (type: SecurityLab['type']) => {
    switch (type) {
      case 'CTF Write-up': return <Skull className="w-5 h-5" />;
      case 'Tool': return <Code className="w-5 h-5" />;
      case 'Research': return <Search className="w-5 h-5" />;
      case 'Vulnerability': return <Shield className="w-5 h-5" />;
      default: return <Terminal className="w-5 h-5" />;
    }
  };

  const getPlatformColor = (platform: SecurityLab['platform']) => {
    switch (platform) {
      case 'HackTheBox': return 'text-green-500 bg-green-500/10 border-green-500/30';
      case 'TryHackMe': return 'text-red-500 bg-red-500/10 border-red-500/30';
      case 'GitHub': return 'text-stone-300 bg-stone-700/30 border-stone-600/50';
      case 'Independent': return 'text-purple-400 bg-purple-500/10 border-purple-500/30';
      default: return 'text-gray-400 bg-gray-800 border-gray-700';
    }
  };

  return (
    <section id="labs" className="py-14 relative z-10 border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-8 text-left">
          {/* Section Header */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-[var(--purple)] uppercase tracking-widest block font-semibold">
              HANDS-ON EXPERIENCE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-100 tracking-tight flex items-center gap-3">
              <Terminal className="w-7 h-7 text-emerald-400" />
              Security Labs
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-3xl">
              A collection of simulated pentesting environments, custom tooling, and vulnerability research. 
              These labs represent practical applications of offensive security concepts and defensive mitigations.
            </p>
          </div>

          {/* Labs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SECURITY_LABS.map((lab: SecurityLab) => (
              <div 
                key={lab.id} 
                className="group relative bg-[#0f1115] border border-gray-800 hover:border-emerald-500/50 rounded-xl overflow-hidden transition-all duration-300 flex flex-col h-full"
              >
                {/* Mac-style Window Header */}
                <div className="bg-[#1a1d24] px-4 py-2 border-b border-gray-800 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="mx-auto font-mono text-[10px] text-gray-500 tracking-wider">
                    {lab.type.toLowerCase().replace(' ', '_')}.sh
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  {/* Meta header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className={`px-2.5 py-1 rounded-md border text-xs font-mono flex items-center gap-1.5 ${getPlatformColor(lab.platform)}`}>
                      {getIcon(lab.type)}
                      <span>{lab.platform}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-stone-100 font-bold text-lg mb-2 group-hover:text-emerald-400 transition-colors">
                    {lab.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {lab.description}
                  </p>

                  {/* Footer (Tags & Links) */}
                  <div className="mt-auto space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {lab.tags.map((tag: string) => (
                        <span key={tag} className="text-xs font-mono text-emerald-300/70 bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-900/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {lab.url && lab.url !== '#' && (
                      <a 
                        href={lab.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-mono text-stone-300 hover:text-emerald-400 transition-colors mt-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Details
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
