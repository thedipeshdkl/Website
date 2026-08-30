import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { CyberTerminalModal } from './components/CyberTerminalModal';
import { ResumeModal } from './components/ResumeModal';
import { ChatBot } from './components/ChatBot';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isTerminalOpen, setIsTerminalOpen] = useState<boolean>(false);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  // Active section scroll observer
  useEffect(() => {
    const sections = [
      'home',
      'about',
      'projects',
      'experience',
      'education',
      'blogs',
      'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut (⌘K or Ctrl+K) to toggle CLI terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--background)] relative font-sans">
      
      {/* Global Background Image */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: 'url(/cyber-bg.jpg)' }}
      />
      {/* Global Dark Overlay to ensure readability */}
      <div className="fixed inset-0 z-0 bg-black/60 backdrop-blur-sm pointer-events-none" />

      {/* Top Navigation */}
      <Navbar
        activeSection={activeSection}
      />

      {/* Main Content Area */}
      <div className="min-h-screen pt-28 pb-12 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto relative z-10 space-y-24">
        
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />

        <About />

        <Projects />

        <Skills />

        <Experience />

        <Education />

        <Certificates />

        <Contact />

        <CallToAction />

        <Footer />
      </div>

      {/* Interactive Modals */}
      <CyberTerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* AI Chat Assistant */}
      <ChatBot />

    </div>
  );
}

export default App;
