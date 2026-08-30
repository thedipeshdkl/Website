import React, { useState } from 'react';
import { X, Printer, Copy, Check, FileText } from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES, PROJECTS, EXPERIENCES, EDUCATION } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const copyAsText = () => {
    const text = `
==================================================
DIPESH DHAKAL — CURRICULUM VITAE
${PERSONAL_INFO.headline}
Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.github}
==================================================

SUMMARY:
${PERSONAL_INFO.bio}

EDUCATION:
${EDUCATION.map(e => `- ${e.degree} | ${e.institution} (${e.duration})`).join('\n')}

EXPERIENCE:
${EXPERIENCES.map(e => `- ${e.title} at ${e.organization} (${e.duration})\n  Key Focus: ${e.focusArea}`).join('\n')}

FEATURED PROJECTS:
${PROJECTS.map(p => `- ${p.title} (${p.categoryLabel}): ${p.description}\n  GitHub: ${p.githubUrl}`).join('\n')}

SKILLS:
${SKILL_CATEGORIES.map(c => `${c.title}: ${c.skills.map(s => s.name).join(', ')}`).join('\n')}
    `;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0f172a]/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      
      <div className="relative w-full max-w-4xl bg-[var(--secondary)] border border-gray-700/50 rounded-3xl shadow-2xl overflow-hidden clean-panel my-8 text-left">
        
        {/* Top Control Bar */}
        <div className="p-4 sm:p-6 bg-[#0f172a] border-b border-gray-700/50 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-[var(--purple)]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-stone-100">Dipesh_Dhakal_Resume.pdf</h3>
              <p className="text-xs font-mono text-[var(--purple)]">Cybersecurity Specialist & Developer CV</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyAsText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--secondary)] border border-gray-700/50 text-gray-400 hover:text-stone-100 text-xs font-mono transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[var(--purple)]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--secondary)] border border-gray-700/50 text-gray-400 hover:text-stone-100 text-xs font-mono transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-[var(--secondary)] text-gray-500 hover:text-stone-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="p-6 sm:p-10 space-y-8 max-h-[75vh] overflow-y-auto font-sans text-gray-400">
          
          {/* Resume Header */}
          <div className="border-b border-gray-700/50 pb-6 space-y-2">
            <h1 className="text-3xl font-extrabold text-stone-100">{PERSONAL_INFO.name}</h1>
            <p className="text-[var(--purple)] font-mono text-sm font-semibold">{PERSONAL_INFO.headline}</p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-500 pt-2">
              <span>Email: {PERSONAL_INFO.email}</span>

              <span>Location: {PERSONAL_INFO.location}</span>
              <span>GitHub: {PERSONAL_INFO.github}</span>
            </div>
          </div>

          {/* Profile Bio */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono text-[var(--purple)] uppercase tracking-widest">PROFESSIONAL SUMMARY</h4>
            <p className="text-sm text-gray-400 leading-relaxed">{PERSONAL_INFO.bio}</p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-[var(--purple)] uppercase tracking-widest">EDUCATION</h4>
            <div className="space-y-3">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="p-4 rounded-xl bg-[#0f172a] border border-gray-700/50">
                  <div className="flex justify-between items-start">
                    <h5 className="font-bold text-stone-100 text-sm">{edu.degree}</h5>
                    <span className="text-xs font-mono text-[var(--purple)]">{edu.duration}</span>
                  </div>
                  <p className="text-xs font-mono text-gray-500">{edu.institution} — {edu.location}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-[var(--purple)] uppercase tracking-widest">EXPERIENCE & ROLES</h4>
            <div className="space-y-3">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-[#0f172a] border border-gray-700/50 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="font-bold text-stone-100 text-sm">{exp.title}</h5>
                      <p className="text-xs font-mono text-[var(--purple)]">{exp.organization}</p>
                    </div>
                    <span className="text-xs font-mono text-gray-500">{exp.duration}</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-gray-400 space-y-1">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-[var(--purple)] uppercase tracking-widest">PROJECTS</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="p-3.5 rounded-xl bg-[#0f172a] border border-gray-700/50 text-xs">
                  <span className="font-bold text-stone-100 block">{proj.title}</span>
                  <span className="text-[10px] font-mono text-[var(--purple)]">{proj.categoryLabel}</span>
                  <p className="text-[11px] text-gray-500 mt-1">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
