import React, { useEffect, useState } from 'react';
import { ExternalLink, GitFork, Star, RefreshCw, FolderGit2 } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';

interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

export const GithubSection: React.FC = () => {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [repoCount, setRepoCount] = useState<number | null>(null);
  const [followersCount, setFollowersCount] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const [profileRes, reposRes] = await Promise.all([
          fetch('https://api.github.com/users/thedipeshdkl'),
          fetch('https://api.github.com/users/thedipeshdkl/repos?sort=updated&per_page=6'),
        ]);
        if (!profileRes.ok || !reposRes.ok) throw new Error('Failed to fetch GitHub data');

        const profile = await profileRes.json();
        const data = await reposRes.json();

        setRepoCount(typeof profile.public_repos === 'number' ? profile.public_repos : null);
        setFollowersCount(typeof profile.followers === 'number' ? profile.followers : null);

        if (Array.isArray(data)) {
          setRepos(data);
        } else {
          setError(true);
        }
      } catch (err) {
        console.warn('GitHub API fetch fallback:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="github" className="py-14 relative z-10 border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto">
      <div className="space-y-8 text-left">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--secondary)] border border-gray-700/50 text-gray-400 font-mono text-xs">
            <GithubIcon className="w-3.5 h-3.5 text-[var(--purple)]" />
            <span>OPEN SOURCE & REPOSITORIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-100 tracking-tight">
            GitHub Repositories
          </h2>
          <p className="text-gray-500 text-sm">
            Repository data loaded from GitHub profile <span className="font-mono text-[var(--purple)]">@thedipeshdkl</span>
          </p>
        </div>

        {/* GitHub Profile Banner Card with Photo Header */}
        <div className="clean-panel rounded-2xl border border-gray-700/50 overflow-hidden shadow-xl text-left">
          
          {/* Top Picture Banner */}
          <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-[#0f172a]">
            <img
              src="/github-banner.jpg"
              alt="GitHub Repositories Banner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />
            
            {/* Top Right GitHub Badge */}
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full bg-[#0f172a]/90 border border-stone-700 font-mono text-xs text-emerald-300 flex items-center gap-1.5 shadow-md">
                <GithubIcon className="w-3.5 h-3.5 text-[var(--purple)]" />
                <span>github.com/thedipeshdkl</span>
              </span>
            </div>
          </div>

          {/* Profile Details Bar */}
          <div className="p-6 sm:p-8 pt-0 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 -mt-12">
            
            <div className="flex items-end gap-5">
              {/* Profile Photo Avatar */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-4 border-stone-950 bg-[var(--secondary)] shadow-2xl shrink-0">
                <img
                  src={PERSONAL_INFO.profilePicture}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="pb-1">
                <h3 className="text-xl sm:text-2xl font-bold text-stone-100 flex items-center gap-2">
                  Dipesh Dhakal
                  <span className="text-xs font-mono text-[var(--purple)] font-normal">@thedipeshdkl</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
                  Security tools, web applications, and utility scripts.
                </p>
              </div>
            </div>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-amber-600 hover:from-emerald-400 hover:to-amber-500 text-stone-950 font-bold font-mono text-xs transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] shrink-0"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Visit GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

          </div>

        </div>

        {/* Live profile stats */}
        {(repoCount !== null || followersCount !== null) && (
          <div className="pt-0 -mt-4 px-6 sm:px-8 pb-2 flex flex-wrap items-center gap-3">
            {repoCount !== null && (
              <span className="px-3 py-1.5 rounded-xl bg-[var(--secondary)] border border-gray-700/50 font-mono text-xs text-gray-400 flex items-center gap-1.5">
                <FolderGit2 className="w-3.5 h-3.5 text-[var(--purple)]" />
                <span className="text-stone-100 font-bold">{repoCount}</span>
                Public Repos
              </span>
            )}
            {followersCount !== null && (
              <span className="px-3 py-1.5 rounded-xl bg-[var(--secondary)] border border-gray-700/50 font-mono text-xs text-gray-400 flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-[var(--purple)]" />
                <span className="text-stone-100 font-bold">{followersCount}</span>
                Followers
              </span>
            )}
            <span className="text-[11px] font-mono text-gray-500">Data from GitHub API</span>
          </div>
        )}

        {/* Repositories Grid */}
        {loading ? (
          <div className="py-12 text-center text-gray-500 font-mono text-xs flex items-center justify-center gap-2">
            <RefreshCw className="w-4 h-4 animate-spin text-[var(--purple)]" />
            <span>Fetching GitHub repositories...</span>
          </div>
        ) : error || repos.length === 0 ? (
          // Fallback to static project repository cards with picture previews
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className="clean-panel rounded-2xl border border-gray-700/50 text-left clean-panel-hover transition-all flex flex-col justify-between overflow-hidden shadow-lg group"
              >
                {/* Photo Banner */}
                <div className="relative h-36 w-full overflow-hidden border-b border-gray-700/50 bg-[#0f172a]">
                  <img
                    src={proj.imagePath}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[var(--purple)] flex items-center gap-1.5 font-bold">
                        <FolderGit2 className="w-4 h-4" />
                        {proj.title}
                      </span>
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-[var(--purple)]"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-xs text-gray-400 line-clamp-2">
                      {proj.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-700/50 flex items-center justify-between font-mono text-[11px] text-gray-500">
                    <span className="text-emerald-300">{proj.techTags[0]}</span>
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--purple)] hover:underline"
                    >
                      View Code →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Live GitHub Repos Grid
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <div
                key={repo.id}
                className="clean-panel rounded-2xl p-6 border border-gray-700/50 text-left clean-panel-hover transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-stone-100 text-base group-hover:text-emerald-300 transition-colors flex items-center gap-2 truncate">
                      <FolderGit2 className="w-4 h-4 text-[var(--purple)] shrink-0" />
                      <span className="truncate">{repo.name}</span>
                    </h4>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-[var(--purple)] shrink-0"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <p className="text-xs text-gray-400 line-clamp-2 min-h-[32px]">
                    {repo.description || 'Repository for a cybersecurity or development project.'}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-700/50 flex items-center justify-between font-mono text-[11px] text-gray-500">
                  {repo.language && (
                    <span className="flex items-center gap-1 text-emerald-300">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      {repo.language}
                    </span>
                  )}
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-gray-500">
                      <Star className="w-3.5 h-3.5 text-[var(--purple)]" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1 text-gray-500">
                      <GitFork className="w-3.5 h-3.5 text-gray-500" />
                      {repo.forks_count}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
      </div>
    </section>
  );
};
