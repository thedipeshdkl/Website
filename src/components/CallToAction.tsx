import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const CallToAction: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 relative z-10 border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="clean-panel rounded-3xl p-8 sm:p-12 border border-gray-700/50 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex-1 space-y-4 text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--purple)]">
              Need A Developer? Need A Friend?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              If you're interested 😋, shoot me an email or hit me up on social media. Best case scenario, we become friends; worst case scenario, I'll bring a smile 😃 to your face and drift apart.
            </p>
            <div className="pt-2">
              <button
                onClick={scrollToContact}
                className="flex items-center justify-center gap-1.5 px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-amber-600 text-white font-semibold text-sm transition-transform hover:scale-105 shadow-[0_0_15px_rgba(168,85,247,0.4)]"
              >
                Lets Connect <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 shrink-0 md:pl-8 md:border-l border-gray-700/50">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-6 bg-[var(--purple)] opacity-50"></div>
              <span className="text-xs font-mono text-[var(--purple)]">Links</span>
              <div className="h-[1px] w-6 bg-[var(--purple)] opacity-50"></div>
            </div>
            <div className="flex gap-5">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-amber-400 transition-colors">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-amber-400 transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-amber-500 hover:text-amber-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
