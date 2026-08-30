import React, { useState } from 'react';
import { 
  FolderGit2, 
  Shield, 
  TrendingUp, 
  Lock, 
  Globe, 
  ArrowRight
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './SocialIcons';

export const Projects: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All Projects');

  const FILTERS = ['All Projects', 'Cybersecurity', 'Web Development', 'Data', 'Finance', 'Automation'];

  const filteredProjects = activeFilter === 'All Projects'
    ? PROJECTS
    : PROJECTS.filter((project) => project.category === activeFilter);

  const iconMap: Record<string, React.ElementType> = {
    Shield,
    TrendingUp,
    Lock,
    Globe,
  };

  return (
    <section id="projects" className="py-14 relative z-10 border-t border-gray-700/50">
      
      <div className="max-w-7xl mx-auto">
      {/* Header Row */}
      <div className="flex items-center justify-between mb-6">
        <div className="text-left">
          <span className="text-xs font-mono text-[var(--purple)] uppercase tracking-widest block font-semibold">
            SELECTED WORK & CODE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-100 tracking-tight">
            Featured Projects
          </h2>
        </div>

        <a
          href="https://github.com/thedipeshdkl"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 text-xs font-mono text-[var(--purple)] hover:text-emerald-300 hover:underline transition-all"
        >
          <GithubIcon className="w-4 h-4" />
          <span>github.com/thedipeshdkl</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-xl font-mono text-xs font-semibold transition-all ${
              activeFilter === filter
                ? 'bg-gradient-to-r from-emerald-500 to-amber-600 text-stone-950 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                : 'bg-[var(--secondary)] text-gray-500 border border-gray-700/50 hover:text-gray-400 hover:border-stone-700'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProjects.map((project, projectIdx) => {
          const Icon = iconMap[project.iconName] || FolderGit2;

          return (
            <div
              key={`${activeFilter}-${project.id}`}
              onClick={() => setActiveModalProject(project)}
              className="clean-panel rounded-2xl p-5 border border-gray-700/50 clean-panel-hover transition-all flex flex-col justify-between text-left cursor-pointer group shadow-lg animate-project-in"
              style={{ animationDelay: `${projectIdx * 60}ms` }}
            >
              <div className="space-y-4">
                
                {/* Project Graphic / Poster Banner Box */}
                <div className="relative h-44 rounded-xl overflow-hidden border border-gray-700/50 group-clean-panel-hover transition-all bg-[#0f172a]">
                  {project.imagePath ? (
                    <img
                      src={project.imagePath}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-tr ${project.gradientClass} p-4 flex flex-col items-center justify-center text-center space-y-2`}>
                      <div className="w-10 h-10 rounded-xl bg-[var(--secondary)]/90 border border-stone-700 flex items-center justify-center text-[var(--purple)] shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[11px] text-gray-400/90 font-medium">
                        {project.subtitle || project.title}
                      </span>
                    </div>
                  )}
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-lg font-bold text-stone-100 group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-gray-500 mt-0.5">
                    {project.subtitle || project.categoryLabel}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

              </div>

              {/* Tech Tags */}
              <div className="pt-4 mt-4 border-t border-gray-700/50 flex flex-wrap gap-1.5">
                {project.techTags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2 py-0.5 rounded-md bg-[#0f172a] border border-gray-700/50 text-[10px] font-mono text-emerald-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          );
        })}
      </div>

      {/* Empty state for categories without projects */}
      {filteredProjects.length === 0 && (
        <div className="py-14 text-center space-y-3">
          <FolderGit2 className="w-10 h-10 text-stone-600 mx-auto" />
          <p className="text-sm font-mono text-gray-500">
            No featured projects published under {activeFilter} yet.
          </p>
          <p className="text-xs text-gray-500">
            Projects in this category will appear here once published to the public GitHub profile.
          </p>
        </div>
      )}

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

      </div>
    </section>
  );
};
