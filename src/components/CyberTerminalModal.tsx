import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES } from '../data/portfolioData';

interface CyberTerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export const CyberTerminalModal: React.FC<CyberTerminalModalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'sys.init',
      output: (
        <div className="space-y-1 text-[var(--purple)]">
          <p>Dipesh Dhakal Terminal Interface v1.0.4</p>
          <p className="text-gray-500">Type <span className="text-[var(--purple)] font-bold">help</span> to list available commands.</p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, history]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    let res: React.ReactNode;

    switch (trimmed) {
      case 'hi':
      case 'hello':
      case 'hi dipesh':
      case 'hello dipesh':
        res = (
          <div className="space-y-1 text-gray-400">
            <p className="text-[var(--purple)] font-bold">Hello{trimmed.includes('dipesh') ? ' Dipesh' : ''}!</p>
            <p>Welcome to the terminal. Type <span className="text-[var(--purple)] font-bold">help</span> to see available commands.</p>
          </div>
        );
        break;

      case 'full update':
      case 'update':
        res = (
          <div className="space-y-1 text-gray-400">
            <p className="text-[var(--purple)] font-bold">PROFILE STATUS: UP TO DATE</p>
            <p>Latest contact email: {PERSONAL_INFO.email}</p>
            <p>Location: {PERSONAL_INFO.location}</p>
            <p>Social profiles: GitHub, LinkedIn, Instagram, Facebook, WhatsApp, X, YouTube</p>
            <p>Education: BSc (Hons) Coventry University, NMIT, Gyankunj</p>
          </div>
        );
        break;

      case 'help':
        res = (
          <div className="space-y-1 text-gray-400">
            <p className="text-[var(--purple)] font-bold">AVAILABLE COMMANDS:</p>
            <p><span className="text-[var(--purple)] font-mono w-24 inline-block">hi</span> - Greeting message</p>
            <p><span className="text-[var(--purple)] font-mono w-24 inline-block">update</span> - Show profile status & latest details</p>
            <p><span className="text-[var(--purple)] font-mono w-24 inline-block">whoami</span> - Display profile identity summary</p>
            <p><span className="text-[var(--purple)] font-mono w-24 inline-block">skills</span> - List technical & security skills</p>
            <p><span className="text-[var(--purple)] font-mono w-24 inline-block">projects</span> - View project repositories</p>
            <p><span className="text-[var(--purple)] font-mono w-24 inline-block">saanjh</span> - Detail SaanjhCyber platform overview</p>
            <p><span className="text-[var(--purple)] font-mono w-24 inline-block">contact</span> - Display contact email & links</p>
            <p><span className="text-[var(--purple)] font-mono w-24 inline-block">github</span> - GitHub profile link</p>
            <p><span className="text-[var(--purple)] font-mono w-24 inline-block">clear</span> - Clear terminal history</p>
            <p><span className="text-[var(--purple)] font-mono w-24 inline-block">exit</span> - Close terminal window</p>
          </div>
        );
        break;

      case 'whoami':
        res = (
          <div className="space-y-1 text-gray-400">
            <p className="text-[var(--purple)] font-bold">{PERSONAL_INFO.name}</p>
            <p className="text-gray-500">{PERSONAL_INFO.headline}</p>
            <p className="text-xs text-gray-500 mt-1">{PERSONAL_INFO.bio}</p>
          </div>
        );
        break;

      case 'skills':
        res = (
          <div className="space-y-2 text-gray-400">
            <p className="text-[var(--purple)] font-bold">SKILLS:</p>
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.id}>
                <span className="text-amber-300 font-bold">{cat.title}: </span>
                <span className="text-gray-500">{cat.skills.map(s => s.name).join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        res = (
          <div className="space-y-2 text-gray-400">
            <p className="text-[var(--purple)] font-bold">PROJECTS:</p>
            {PROJECTS.map((p) => (
              <div key={p.id} className="pl-2 border-l-2 border-emerald-500/40">
                <p className="text-stone-100 font-bold">{p.title} <span className="text-xs text-[var(--purple)]">({p.categoryLabel})</span></p>
                <p className="text-xs text-gray-500">{p.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'saanjh':
      case 'saanjhcyber':
        res = (
          <div className="space-y-1 text-gray-400 bg-[#0f172a] p-3 rounded-lg border border-emerald-500/30">
            <p className="text-[var(--purple)] font-bold">SaanjhCyber — Cybercrime Reporting Platform</p>
            <p className="text-xs text-gray-400">
              Guided reporting, evidence submission, case tracking with unique IDs, suspicious entity verification, and admin moderation workflow.
            </p>
            <p className="text-xs text-amber-300 font-mono">Repo: https://github.com/thedipeshdkl/SaanjhCyber</p>
          </div>
        );
        break;

      case 'contact':
        res = (
          <div className="space-y-1 text-gray-400">
            <p className="text-[var(--purple)]">EMAIL: {PERSONAL_INFO.email}</p>

            <p className="text-gray-500">LOCATION: {PERSONAL_INFO.location}</p>
            <p className="text-[var(--purple)]">GITHUB: {PERSONAL_INFO.github}</p>
          </div>
        );
        break;

      case 'github':
        res = (
          <p className="text-[var(--purple)] font-mono">
            GitHub URL: <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="underline text-stone-100">{PERSONAL_INFO.github}</a>
          </p>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      case 'exit':
        onClose();
        return;

      default:
        res = (
          <p className="text-red-400 font-mono">
            Command not recognized: '{trimmed}'. Type <span className="text-[var(--purple)]">help</span> for command list.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: res }]);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal) return;
    handleCommand(inputVal);
    setInputVal('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0f172a]/80 backdrop-blur-md animate-in fade-in duration-200">
      
      <div className="relative w-full max-w-3xl h-[520px] bg-[#0f172a] border border-emerald-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col font-mono text-xs">
        
        {/* Terminal Titlebar */}
        <div className="bg-[var(--secondary)] border-b border-gray-700/50 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="text-gray-500 ml-2 text-[11px] flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[var(--purple)]" />
              dipesh@security-node:~
            </span>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-stone-100">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Output Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 text-left">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-[var(--purple)]">
                <span className="text-[var(--purple)]">guest@dipesh-dhakal:~$</span>
                <span>{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Prompt Bar */}
        <form onSubmit={onSubmit} className="bg-[var(--secondary)]/90 border-t border-gray-700/50 p-3 flex items-center gap-2">
          <span className="text-[var(--purple)] font-bold">guest@dipesh-dhakal:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="type 'help'..."
            className="flex-1 bg-transparent border-none text-stone-100 focus:outline-none font-mono text-xs placeholder:text-stone-600"
            autoFocus
          />
          <button type="submit" className="text-[var(--purple)] hover:text-emerald-300">
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>

      </div>

    </div>
  );
};
