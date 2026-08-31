import React from 'react';
import { BookOpen, CheckCircle2, ExternalLink, MapPin, Calendar } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-14 relative z-10 border-t border-gray-700/50">
      
      <div className="max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="space-y-3 text-left mb-8">
        <span className="text-xs font-mono text-[var(--purple)] uppercase tracking-widest block font-semibold">
          EDUCATION & TRAINING
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-100 tracking-tight">
          Education & Qualifications
        </h2>
        <p className="text-gray-500 text-sm max-w-2xl">
          Formal education in ethical hacking & cybersecurity, complemented by continuous technology learning.
        </p>
      </div>

      {/* Education Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {EDUCATION.map((edu) => (
          <div
            key={edu.id}
            className="clean-panel rounded-2xl border border-gray-700/50 clean-panel-hover transition-all flex flex-col justify-between text-left overflow-hidden shadow-lg group"
          >
            {/* Top Picture Banner */}
            <div className="relative h-36 w-full overflow-hidden border-b border-gray-700/50 bg-[#0f172a]">
              <img
                src={edu.imagePath}
                alt={edu.degree}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
              
              {/* Badge Overlay */}
              {edu.badge && (
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-full bg-[#0f172a]/90 border border-amber-500/40 text-amber-300 font-mono text-[10px] uppercase font-bold shadow-md">
                    {edu.badge}
                  </span>
                </div>
              )}
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-xs font-semibold text-[var(--purple)] font-mono">
                    {edu.institution}
                  </p>
                  <div className="flex flex-col gap-1.5 font-mono text-[11px] text-gray-500 pt-1">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-gray-500" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-amber-500/80">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Details list */}
                <div className="space-y-2 pt-3 border-t border-gray-700/50">
                  {edu.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-gray-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--purple)] mt-0.5 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-700/50 font-mono text-[11px] text-gray-500 flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-[var(--purple)]" />
                <span>Recorded in Resume</span>
                {edu.url && (
                  <a
                    href={edu.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto flex items-center gap-1 text-[var(--purple)] hover:text-emerald-300 hover:underline"
                  >
                    Visit Institution
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
      </div>

    </section>
  );
};
