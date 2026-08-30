import React, { useState } from 'react';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { CERTIFICATES, PERSONAL_INFO } from '../data/portfolioData';

export const Certificates: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Cybersecurity', 'UI/UX', 'Networking'];

  const filteredCertificates = selectedCategory === 'All'
    ? CERTIFICATES
    : CERTIFICATES.filter((c) => c.category === selectedCategory);

  return (
    <section id="certificates" className="py-20 relative z-10 border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[var(--purple)] font-mono text-xs">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-100 tracking-tight">
            Certifications & <span className="text-[var(--purple)]">Credentials</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Completed courses and technical certifications. Verification links can be updated directly.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl font-mono text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-500 text-stone-950 shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                  : 'bg-[var(--secondary)] text-gray-500 border border-gray-700/50 hover:text-gray-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCertificates.map((cert) => (
            <div
              key={cert.id}
              className="clean-panel rounded-2xl p-6 border border-gray-700/50 clean-panel-hover transition-all flex flex-col justify-between text-left group"
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[var(--secondary)] border border-emerald-500/30 flex items-center justify-center text-[var(--purple)] group-hover:scale-110 transition-all">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-[#0f172a] border border-gray-700/50 text-[10px] font-mono text-[var(--purple)]">
                    {cert.category}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-stone-100 group-hover:text-emerald-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono text-gray-500 mt-1">
                    Issued by: {cert.organization}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-500 font-mono pt-2 border-t border-gray-700/50">
                  <ShieldCheck className="w-4 h-4 text-[var(--purple)]" />
                  <span>Status: Active</span>
                </div>

              </div>

              {/* Verification Button */}
              <div className="pt-4 mt-4 border-t border-gray-700/50 flex items-center justify-between">
                <span className="text-[10px] font-mono text-gray-500">
                  [Editable Link]
                </span>
                <a
                  href={cert.verificationUrl || PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-[var(--purple)] hover:text-emerald-300 hover:underline"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
