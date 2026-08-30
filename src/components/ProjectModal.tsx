import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Shield, 
  TrendingUp, 
  Lock, 
  Globe, 
  CheckCircle2, 
  Code2, 
  Layers 
} from 'lucide-react';
import type { Project } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const iconMap: Record<string, React.ElementType> = {
    Shield,
    TrendingUp,
    Lock,
    Globe,
  };

  const ProjectIcon = iconMap[project.iconName] || Code2;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#0f172a]/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Backdrop overlay */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative w-full max-w-3xl bg-[var(--secondary)] border border-gray-700/50 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 text-left clean-panel animate-in zoom-in-95 duration-200">
        
        {/* Modal Header Banner */}
        <div className={`p-6 sm:p-8 bg-gradient-to-r ${project.gradientClass} border-b border-gray-700/50 relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#0f172a]/70 border border-stone-700 text-gray-400 hover:text-stone-100 hover:border-stone-500 transition-all z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-3 pr-8 relative z-10">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="px-3 py-1 rounded-full bg-[#0f172a]/80 border border-emerald-500/40 text-[var(--purple)]">
                {project.categoryLabel}
              </span>
              {project.isPrimaryFeatured && (
                <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 flex items-center gap-1 font-sans">
                  ★ Featured Project
                </span>
              )}
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-100 flex items-center gap-3">
              <ProjectIcon className="w-7 h-7 text-[var(--purple)] shrink-0" />
              {project.title}
            </h3>
          </div>
        </div>

        {/* Project Poster / Image preview if available */}
        {project.imagePath && (
          <div className="w-full max-h-72 overflow-y-auto bg-[#0f172a] border-b border-gray-700/50">
            <img
              src={project.imagePath}
              alt={project.title}
              className="w-full object-contain"
            />
          </div>
        )}

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          
          {/* Detailed Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono text-[var(--purple)] uppercase tracking-widest flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" />
              PROJECT OVERVIEW
            </h4>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              {project.detailedDescription || project.description}
            </p>
          </div>

          {/* Key Features & Highlights */}
          <div className="space-y-3 pt-4 border-t border-gray-700/50">
            <h4 className="text-xs font-mono text-[var(--purple)] uppercase tracking-widest flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5" />
              KEY FEATURES
            </h4>
            <ul className="space-y-2.5">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Tags */}
          <div className="space-y-3 pt-4 border-t border-gray-700/50">
            <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2">
              <Code2 className="w-3.5 h-3.5" />
              TECHNOLOGY STACK
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techTags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-lg bg-[#0f172a] border border-gray-700/50 text-xs font-mono text-emerald-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Action Links */}
          <div className="pt-6 border-t border-gray-700/50 flex flex-wrap items-center justify-between gap-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0f172a] hover:bg-[#0f172a] border border-stone-700 hover:border-emerald-400 text-stone-100 font-mono text-xs transition-all shadow-md group"
            >
              <GithubIcon className="w-4 h-4 text-[var(--purple)] group-hover:scale-110 transition-transform" />
              <span>View Repository on GitHub</span>
            </a>

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-xs transition-all shadow-md"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-[#0f172a] hover:bg-stone-700 text-gray-400 text-xs font-mono"
            >
              Close
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
