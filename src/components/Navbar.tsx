import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Project' },
    { id: 'labs', label: 'Labs' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'blogs', label: 'Blogs', external: true, url: 'https://thedipeshdkl.medium.com' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/40 backdrop-blur-md shadow-lg border-b border-gray-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <img 
              src="/profile-photo.jpg" 
              alt="Dipesh Dhakal" 
              className="w-9 h-9 rounded-full object-cover border border-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.2)]"
            />
            <span className="text-2xl font-bold tracking-tighter text-stone-100">
              Dipesh Dhakal
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium transition-colors hover:text-[#df4a22] text-stone-100"
                  >
                    {link.label}
                  </a>
                ) : (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`text-base font-medium transition-colors hover:text-[#df4a22] ${
                      activeSection === link.id ? 'text-[#df4a22]' : 'text-stone-100'
                    }`}
                  >
                    {link.label}
                  </button>
                )
              ))}
            </nav>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-stone-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[var(--background)] border-b border-gray-700/50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-stone-100 hover:text-[#df4a22] hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                    activeSection === link.id ? 'text-[#df4a22] bg-gray-50' : 'text-stone-100 hover:text-[#df4a22] hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </button>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
