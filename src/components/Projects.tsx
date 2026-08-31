import React, { useState } from 'react';
import { 
  FolderGit2, 
  Shield, 
  TrendingUp, 
  Lock, 
  Globe, 
  ArrowRight,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All Projects');

  const FILTERS = ['All Projects', 'Cybersecurity', 'Web Development', 'Data', 'Finance', 'Automation'];

  const filteredProjects = activeFilter === 'All Projects'
    ? PROJECTS
    : PROJECTS.filter((project) => project.category === activeFilter);

  // Find the primary featured project
  const featuredProject = filteredProjects.find(p => p.isPrimaryFeatured);
  // The rest go into the grid
  const gridProjects = filteredProjects.filter(p => !p.isPrimaryFeatured);

  const iconMap: Record<string, React.ElementType> = {
    Shield,
    TrendingUp,
    Lock,
    Globe,
  };

  const renderButtons = (project: Project) => (
    <div className="flex flex-wrap gap-3 mt-6">
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-sm font-semibold transition-colors border border-stone-600"
      >
        <GithubIcon className="w-4 h-4" /> GitHub
      </a>
      {project.liveDemoUrl && (
        <a
          href={project.liveDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-stone-950 text-sm font-semibold transition-colors"
        >
          <ExternalLink className="w-4 h-4" /> Live Demo
        </a>
      )}
      {project.caseStudyUrl && (
        <a
          href={project.caseStudyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-emerald-400 text-sm font-semibold transition-colors border border-stone-600"
        >
          <BookOpen className="w-4 h-4" /> Case Study
        </a>
      )}
    </div>
  );

  return (
    <section id="projects" className="py-14 relative z-10 border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div className="text-left">
            <span className="text-xs font-mono text-cyan-500 uppercase tracking-widest block font-semibold mb-1">
              SELECTED WORK & CODE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-100 tracking-tight">
              Security & Development Projects
            </h2>
          </div>

          <a
            href="https://github.com/thedipeshdkl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-mono text-cyan-400 hover:text-cyan-300 hover:underline transition-all"
          >
            <GithubIcon className="w-4 h-4" />
            <span>github.com/thedipeshdkl</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl font-mono text-xs font-semibold transition-all ${
                activeFilter === filter
                  ? 'bg-cyan-600 text-stone-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                  : 'bg-stone-800/80 text-gray-400 border border-stone-700 hover:text-stone-200 hover:border-stone-500'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <div className="mb-12 rounded-2xl overflow-hidden bg-stone-900 border border-stone-700/80 shadow-2xl flex flex-col lg:flex-row group transition-all hover:border-cyan-500/50">
            {/* Image Side */}
            <div className="lg:w-1/2 relative min-h-[300px] overflow-hidden bg-[#0f172a]">
              {featuredProject.imagePath ? (
                <img
                  src={featuredProject.imagePath}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className={`w-full h-full bg-gradient-to-tr ${featuredProject.gradientClass} flex items-center justify-center`}>
                  <Shield className="w-20 h-20 text-cyan-500/50" />
                </div>
              )}
              <div className="absolute top-4 left-4 bg-cyan-600 text-stone-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                Featured Project
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-100 mb-2">
                {featuredProject.title}
              </h3>
              <p className="text-sm font-mono text-cyan-400 mb-4">
                {featuredProject.subtitle}
              </p>
              
              <div className="space-y-5 text-gray-300 text-sm leading-relaxed">
                <p>{featuredProject.description}</p>
                
                <div>
                  <strong className="text-stone-200 block mb-1">Problem Solved:</strong>
                  <p className="text-gray-400">{featuredProject.problemSolved}</p>
                </div>

                <div>
                  <strong className="text-stone-200 block mb-2">Key Features:</strong>
                  <ul className="space-y-1">
                    {featuredProject.highlights.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                        <span className="text-gray-400">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="pt-6 mt-6 border-t border-stone-800 flex flex-wrap gap-2">
                {featuredProject.techTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-stone-950 border border-stone-700 text-xs font-mono text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {renderButtons(featuredProject)}
            </div>
          </div>
        )}

        {/* Regular Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {gridProjects.map((project, idx) => {
            const Icon = iconMap[project.iconName] || FolderGit2;

            return (
              <div
                key={`${activeFilter}-${project.id}`}
                className="rounded-2xl overflow-hidden bg-stone-900 border border-stone-700/80 shadow-lg flex flex-col group transition-all hover:border-cyan-500/30 animate-project-in"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                <div className="p-6 sm:p-8 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-stone-100 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-gray-500 mt-1">
                        {project.subtitle}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-stone-800 border border-stone-700 flex items-center justify-center text-cyan-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="space-y-4 text-sm text-gray-300 flex-1">
                    <p>{project.description}</p>
                    
                    <div>
                      <strong className="text-stone-200 block mb-1 text-xs uppercase tracking-wider">Problem Solved</strong>
                      <p className="text-gray-400 text-xs leading-relaxed">{project.problemSolved}</p>
                    </div>

                    <div>
                      <strong className="text-stone-200 block mb-1 text-xs uppercase tracking-wider">Key Features</strong>
                      <ul className="space-y-1">
                        {project.highlights.slice(0, 3).map((feat, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-xs text-gray-400">
                            <span className="text-cyan-500 mt-0.5">•</span>
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="pt-5 mt-5 border-t border-stone-800 flex flex-wrap gap-2">
                    {project.techTags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-stone-950 border border-stone-700 text-[10px] font-mono text-cyan-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {renderButtons(project)}
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="py-14 text-center space-y-3 bg-stone-900 rounded-2xl border border-stone-700/50">
            <FolderGit2 className="w-12 h-12 text-stone-600 mx-auto mb-2" />
            <p className="text-sm font-mono text-gray-400">
              No projects published under {activeFilter} yet.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
