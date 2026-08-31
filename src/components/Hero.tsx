import React from 'react';
import { ArrowRight, Download, Shield, Briefcase } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Offset for navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center -mt-28">
      <div className="max-w-7xl mx-auto w-full relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8 pt-10">
          
          {/* Left Text Column */}
          <div className="w-full lg:w-3/5 space-y-6 text-left">
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-mono text-cyan-400 font-semibold tracking-wide flex items-center gap-2">
                <Shield className="w-6 h-6" /> Dipesh Dhakal
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-100 tracking-tight leading-tight">
                Cybersecurity Specialist <br className="hidden sm:block" />
                <span className="text-stone-400 text-3xl sm:text-4xl lg:text-5xl">&amp; Security-Focused Developer</span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed">
              Building secure applications, exploring offensive security, and developing cybersecurity-focused solutions.
            </p>

            <div className="pt-2 pb-2">
              <p className="text-sm font-mono text-cyan-500/80 tracking-widest font-semibold flex flex-wrap gap-2 items-center uppercase">
                <span>Cybersecurity</span>
                <span className="text-stone-600">&bull;</span>
                <span>Web Security</span>
                <span className="text-stone-600">&bull;</span>
                <span>Security Automation</span>
                <span className="text-stone-600">&bull;</span>
                <span>Secure Development</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-stone-950 font-bold transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:scale-105"
                aria-label="View Projects"
              >
                <Briefcase className="w-4 h-4" /> View Projects
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-stone-800 hover:bg-stone-700 border border-stone-600 text-stone-200 font-medium transition-all hover:scale-105"
                aria-label="Download CV"
              >
                <Download className="w-4 h-4" /> Download CV
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-transparent hover:bg-stone-800/50 text-stone-300 font-medium transition-all hover:text-cyan-400 group"
                aria-label="Contact Me"
              >
                Contact Me <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="flex w-full lg:w-2/5 justify-center lg:justify-end items-center lg:pr-6">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 shrink-0 rounded-2xl border border-cyan-500/30 overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.3)] bg-stone-900 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/40 to-transparent mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
              <img 
                src={PERSONAL_INFO.profilePicture} 
                alt="Dipesh Dhakal" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500" 
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl z-20"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
