import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const roles = [
    "Cyber Security",
    "Web Development",
    "Ethical Hacking",
    "Penetration Testing",
    "Web App Security",
    "UI/UX Design",
    "OSINT"
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [nameText, setNameText] = useState('');

  // Typing effect for the name (types once on load)
  useEffect(() => {
    const fullName = PERSONAL_INFO.name;
    let i = 0;
    const interval = setInterval(() => {
      setNameText(fullName.substring(0, i + 1));
      i++;
      if (i >= fullName.length) {
        clearInterval(interval);
      }
    }, 100); // 100ms per letter
    return () => clearInterval(interval);
  }, []);

  // Typing effect for the roles (cycles infinitely)
  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        setText(currentRole.substring(0, text.length - 1));
        if (text.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      } else {
        setText(currentRole.substring(0, text.length + 1));
        if (text.length === currentRole.length) {
          // Pause at the end of typing
          setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

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
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          
          {/* Left Text Column */}
          <div className="w-full lg:w-2/3 space-y-4 text-left pt-10">
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-stone-100 tracking-wide">
              Hi There,
            </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-stone-100 tracking-wide">
              I am <span className="text-cyan-400">{nameText}</span>
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-stone-100 tracking-wide h-[48px] sm:h-[60px] lg:h-[60px]">
              I am Into <span className="text-cyan-400">{text}</span>
              <span className="text-orange-500 animate-pulse">|</span>
            </h2>


            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center justify-center gap-1.5 px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium text-xs sm:text-sm w-max shadow-[0_0_15px_rgba(14,165,233,0.5)] transition-transform hover:scale-105"
              >
                Contact <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center justify-center gap-1.5 px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium text-xs sm:text-sm w-max shadow-[0_0_15px_rgba(14,165,233,0.5)] transition-transform hover:scale-105"
              >
                Resume 
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="flex w-full lg:w-1/3 justify-center lg:justify-end items-start pt-8 lg:pt-0 lg:pr-10">
            <div className="relative w-56 h-56 lg:w-64 lg:h-64 shrink-0 rounded-full border-2 border-cyan-500/50 overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-500 hover:shadow-[0_0_50px_rgba(6,182,212,0.6)]">
              <img 
                src={PERSONAL_INFO.profilePicture} 
                alt="Profile" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
