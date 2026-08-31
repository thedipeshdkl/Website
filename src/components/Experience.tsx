import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Shield, Radio, Server, Building } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const getIconForOrg = (org: string) => {
    if (org.includes('GANGA')) return Shield;
    if (org.includes('Telecom')) return Server;
    if (org.includes('Radio')) return Radio;
    return Building;
  };

  return (
    <section id="experience" className="py-20 relative z-10 border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[var(--purple)] font-mono text-xs">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PROFESSIONAL EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-100 tracking-tight">
            Work <span className="text-[var(--purple)]">Experience</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Roles spanning security assessments, telecom IT infrastructure, branch management, and media broadcasting.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-amber-500 to-stone-800 -translate-x-1/2" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => {
              const Icon = getIconForOrg(exp.organization);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node Icon */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[var(--secondary)] border-2 border-emerald-400 flex items-center justify-center text-[var(--purple)] shadow-[0_0_15px_rgba(16,185,129,0.4)] z-10">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Experience Card */}
                  <div
                    className={`ml-12 sm:ml-0 sm:w-1/2 ${
                      isEven ? 'sm:pr-12 text-left' : 'sm:pl-12 text-left'
                    } w-full`}
                  >
                    <div className="clean-panel rounded-2xl p-6 sm:p-7 border border-gray-700/50 clean-panel-hover transition-all space-y-4">
                      
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 font-mono text-xs text-[var(--purple)]">
                          <Calendar className="w-3.5 h-3.5 text-[var(--purple)]" />
                          <span>{exp.duration}</span>
                          <span className="text-stone-600">•</span>
                          <MapPin className="w-3.5 h-3.5 text-gray-500" />
                          <span className="text-gray-500">{exp.location}</span>
                        </div>

                        <div className="flex items-center gap-3">
                          {exp.imagePath && (
                            <a href={exp.url || "#"} target={exp.url ? "_blank" : undefined} rel={exp.url ? "noopener noreferrer" : undefined}>
                              <img src={exp.imagePath} alt={exp.organization} className="w-12 h-12 object-contain bg-white/10 rounded-md border border-gray-700/50 p-1 hover:border-cyan-500/50 transition-colors shrink-0" />
                            </a>
                          )}
                          <div>
                            <h3 className="text-xl font-bold text-stone-100 tracking-wide">
                              {exp.url ? (
                                <a href={exp.url} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--purple)] transition-colors">
                                  {exp.title}
                                </a>
                              ) : (
                                exp.title
                              )}
                            </h3>
                            <h4 className="text-sm font-medium text-gray-400 font-mono">
                              {exp.organization}
                            </h4>
                          </div>
                        </div>
                      </div>

                      {/* Responsibilities list */}
                      <ul className="space-y-2 pt-2 border-t border-gray-700/50">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2 text-xs text-gray-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[var(--purple)] mt-0.5 shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tag badges */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {exp.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded bg-[#0f172a] border border-gray-700/50 text-[10px] font-mono text-gray-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
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
