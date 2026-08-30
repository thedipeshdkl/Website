import React, { useEffect, useRef, useState } from 'react';
import { Bot, Send, X, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES, EDUCATION, EXPERIENCES, CERTIFICATES } from '../data/portfolioData';

interface ChatMessage {
  role: 'user' | 'bot';
  text: string;
  wa?: boolean;
  waText?: string;
}

const KNOWLEDGE: { keywords: string[]; reply: string }[] = [
  {
    keywords: ['hi', 'hello', 'hey', 'namaste', 'namaskar', 'hola'],
    reply: 'Hello! I am Enigma, the AI assistant for this portfolio. Ask me about Dipesh\'s skills, projects, education, experience, or contact details.'
  },
  {
    keywords: ['about dipesh', 'tell me about', 'about him', 'about dipesh dhakal', 'who is dipesh', 'who is dipesh dhakal', 'dipesh dhakal'],
    reply: `${PERSONAL_INFO.bio} ${PERSONAL_INFO.aboutParagraphs[0]}`
  },
  {
    keywords: ['who are you', 'your name', 'about you', 'what are you'],
    reply: `I am Enigma — a portfolio assistant that knows everything about ${PERSONAL_INFO.name}: skills, projects, education, and how to reach him. Try asking "What are his skills?" or "Top projects?".`
  },
  {
    keywords: ['full skills', 'all skills', 'complete skills'],
    reply: SKILL_CATEGORIES.map((c) => `${c.title}\n${c.skills.map((s) => `  \u2022 ${s.name} [${s.level}]`).join('\n')}`).join('\n\n')
  },
  {
    keywords: ['skill', 'tech', 'tools', 'competenc', 'stack', 'languages'],
    reply: 'Dipesh works across four areas:\n' +
      SKILL_CATEGORIES.map((c) => `\u2022 ${c.title}: ${c.skills.slice(0, 3).map((s) => s.name).join(', ')}...`).join('\n') +
      '\nAsk "full skills" for the complete list.'
  },
  {
    keywords: ['project', 'portfolio', 'built', 'code', 'work'],
    reply: PROJECTS.map((p) => `\u2022 ${p.title} \u2014 ${p.subtitle} (${p.category})\n  ${p.githubUrl}`).join('\n') +
      '\n\nAsk about any project by name (e.g. "SaanjhCyber") for details.'
  },
  {
    keywords: ['saanjh', 'saanjhcyber'],
    reply: (PROJECTS.find((p) => p.id === 'saanjhcyber')?.detailedDescription || '') +
      '\n\nGitHub: https://github.com/thedipeshdkl/SaanjhCyber'
  },
  {
    keywords: ['noir', 'noirlink', 'nepse', 'stock', 'trading'],
    reply: (PROJECTS.find((p) => p.id === 'noirlink-trading')?.detailedDescription || '') +
      '\n\nGitHub: https://github.com/thedipeshdkl/-NoirLink-Traderchang'
  },
  {
    keywords: ['file integrity', 'integrity'],
    reply: (PROJECTS.find((p) => p.id === 'file-integrity-system')?.detailedDescription || '') +
      '\n\nGitHub: https://github.com/thedipeshdkl/File-Integrity-Authenticity-Verification-System'
  },
  {
    keywords: ['news crawler', 'crawler', 'scraping', 'scraper'],
    reply: (PROJECTS.find((p) => p.id === 'news-crawler')?.detailedDescription || '') +
      '\n\nGitHub: https://github.com/thedipeshdkl/news_crawler'
  },
  {
    keywords: ['education', 'study', 'university', 'degree', 'college', 'academic'],
    reply: EDUCATION.map((e) => `\u2022 ${e.degree}\n  ${e.institution} \u2014 ${e.duration}${e.url ? `\n  ${e.url}` : ''}`).join('\n')
  },
  {
    keywords: ['coventry', 'bsc', 'hons', 'ethical hacking'],
    reply: 'Dipesh completed a BSc (Hons) in Ethical Hacking and Cyber Security at Coventry University (2022 \u2013 May 2025), specializing in penetration testing, web application security, digital forensics, cryptography, and system hardening.'
  },
  {
    keywords: ['experience', 'job', 'work history', 'career', 'intern', 'worked'],
    reply: EXPERIENCES.map((e) => `\u2022 ${e.title} \u2014 ${e.organization} (${e.duration})`).join('\n') +
      '\n\nAsk about any role for more detail.'
  },
  {
    keywords: ['certificate', 'certification', 'award', 'credential'],
    reply: CERTIFICATES.map((c) => `\u2022 ${c.title} \u2014 ${c.organization} (${c.issueDate})`).join('\n') +
      `\n\nIn total: ${PERSONAL_INFO.stats.find((s) => s.label === 'Certifications')?.value || '15+'} certifications.`
  },
  {
    keywords: ['facebook', 'facbook', 'facebok', 'fb page', 'facebook page'],
    reply: 'Facebook page: https://www.facebook.com/share/1BT9YVq5tp/'
  },
  {
    keywords: ['social', 'socials', 'social media', 'instagram', 'twitter', 'youtube', 'linkedin', 'follow', 'handles'],
    reply: 'Connect with Dipesh across platforms:\n' +
      `\u2022 LinkedIn: ${PERSONAL_INFO.linkedin}\n` +
      `\u2022 Instagram: ${PERSONAL_INFO.instagram}\n` +
      `\u2022 Facebook: ${PERSONAL_INFO.facebook}\n` +
      `\u2022 WhatsApp: ${PERSONAL_INFO.whatsapp}\n` +
      `\u2022 X (Twitter): ${PERSONAL_INFO.twitter}\n` +
      `\u2022 YouTube: ${PERSONAL_INFO.youtube}\n` +
      `\u2022 GitHub: ${PERSONAL_INFO.github}`
  },
  {
    keywords: ['whatsapp', 'whatsap', 'wa.me', 'direct chat'],
    reply: 'You can message Dipesh directly on WhatsApp: https://wa.me/dipeshdhakal1522'
  },
  {
    keywords: ['contact', 'email', 'phone', 'reach', 'message'],
    reply: `You can reach Dipesh at:\n\u2022 Email: ${PERSONAL_INFO.email}\n\u2022 LinkedIn: ${PERSONAL_INFO.linkedin}\n\u2022 GitHub: ${PERSONAL_INFO.github}\n\nOr use the contact form on this page.`
  },
  {
    keywords: ['location', 'where', 'based', 'kathmandu', 'nepal'],
    reply: `Dipesh is based in ${PERSONAL_INFO.location}.`
  },
  {
    keywords: ['github', 'open source', 'repos', 'repository', 'repositories'],
    reply: 'GitHub: ' + PERSONAL_INFO.github + '\n\nRepositories:\n' +
      PROJECTS.map((p) => `\u2022 ${p.title}: ${p.githubUrl}`).join('\n')
  },
  {
    keywords: ['stats', 'statistics', 'numbers', 'metrics'],
    reply: PERSONAL_INFO.stats.map((s) => `\u2022 ${s.value} ${s.label}`).join('\n')
  },
  {
    keywords: ['website', 'portfolio site', 'this site', 'live site', 'url'],
    reply: 'This portfolio is live at https://dipeshdhakal1522.com.np \u2014 explore the projects, skills, and contact sections, or use the Terminal CLI (\u2318K).'
  },
  {
    keywords: ['availability', 'hire', 'freelance', 'available', 'work with'],
    reply: 'Dipesh is available for security audits, penetration testing, and web development projects. Send a message via the contact form or email dipeshrajdhakal@gmail.com.'
  },
  {
    keywords: ['terminal', 'cli', 'command'],
    reply: 'You can explore this portfolio interactively using the Terminal CLI button (\u2318K) in the top bar — try commands like "skills", "projects", or "contact".'
  },
  {
    keywords: ['resume', 'cv', 'curriculum'],
    reply: 'Use the "Download CV" button in the sidebar to view the full resume with education, experience, and skills.'
  },
  {
    keywords: ['thanks', 'thank you', 'thx', 'dhan', 'dhanyabad', 'appreciate'],
    reply: 'You are welcome! Feel free to ask anything else about Dipesh\u2019s work. \uD83D\uDE42'
  },
  {
    keywords: ['bye', 'goodbye', 'exit', 'see you'],
    reply: 'Goodbye! Dipesh looks forward to hearing from you. \uD83D\uDC4B'
  }
];

const SUGGESTIONS = [
  'Who is Dipesh Dhakal?',
  'What are his skills?',
  'Top projects',
  'Education',
  'How to contact?'
];

const levenshtein = (a: string, b: string): number => {
  const m = a.length;
  const n = b.length;
  if (!m) return n;
  if (!n) return m;
  const dp: number[][] = Array.from({ length: m + 1 }, (_, i) => [i, ...Array<number>(n).fill(0)]);
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
  }
  return dp[m][n];
};

const fuzzyMatch = (q: string, keyword: string): boolean => {
  if (keyword.length <= 4) {
    if (new RegExp('\\b' + keyword + '\\b').test(q)) return true;
  } else if (q.includes(keyword)) {
    return true;
  }
  if (keyword.includes(' ')) {
    return levenshtein(q, keyword) <= 2;
  }
  const words = q.split(/\s+/).filter((w) => w.length >= 4);
  return words.some((w) => levenshtein(w, keyword) <= (w.length >= 6 ? 2 : 1));
};

const answer = (input: string): { reply: string; matched: boolean } => {
  const q = input.toLowerCase().trim();
  for (const item of KNOWLEDGE) {
    if (item.keywords.some((k) => fuzzyMatch(q, k))) return { reply: item.reply, matched: true };
  }
  return {
    reply: 'I am not sure about that one. Try asking about skills, projects, education, experience, or contact details \u2014 or send it directly to Dipesh on WhatsApp.',
    matched: false
  };
};

const WA_LINK = 'https://wa.me/dipeshdhakal1522';

export const ChatBot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'bot', text: `Hi! I am Enigma \u{1F916} — ask me anything about ${PERSONAL_INFO.name}'s portfolio.` }
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, typing, open]);

  const send = (text: string) => {
    const clean = text.trim();
    if (!clean) return;
    setMessages((m) => [...m, { role: 'user', text: clean }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      const { reply, matched } = answer(clean);
      setMessages((m) => [...m, { role: 'bot', text: reply, wa: !matched, waText: clean }]);
      setTyping(false);
    }, 700);
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-40 w-[calc(100vw-2rem)] max-w-sm">
          <div className="rounded-2xl overflow-hidden border border-gray-700/50 bg-[var(--secondary)]/95 backdrop-blur-xl shadow-[0_0_40px_rgba(16,185,129,0.15)]">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-emerald-950/80 to-stone-900 border-b border-gray-700/50">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-500 to-amber-500 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-stone-950" />
                </div>
                <div>
                  <p className="text-sm font-bold text-stone-100 leading-tight flex items-center gap-1.5">
                    Enigma <Sparkles className="w-3 h-3 text-[var(--purple)]" />
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 rounded-lg border border-stone-700 text-gray-500 hover:text-stone-100 hover:border-stone-500 flex items-center justify-center transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div ref={bodyRef} className="h-80 overflow-y-auto px-4 py-4 space-y-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed whitespace-pre-line ${
                      m.role === 'user'
                        ? 'bg-gradient-to-r from-amber-600 to-amber-600 text-stone-100 rounded-br-md'
                        : 'bg-[#0f172a]/90 border border-stone-700/60 text-gray-300 rounded-bl-md'
                    }`}
                  >
                    {m.text}
                    {m.wa && (
                      <a
                        href={`${WA_LINK}?text=${encodeURIComponent(`Hi Dipesh, regarding: ${m.waText || ''}`)}`}
                        target="_blank"
                        rel="noopener"
                        className="mt-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/15 border border-emerald-500/40 text-[var(--purple)] text-[11px] font-mono font-bold hover:bg-emerald-500/25 transition-colors"
                      >
                        Chat on WhatsApp &rarr;
                      </a>
                    )}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="px-3.5 py-2.5 rounded-2xl rounded-bl-md bg-[#0f172a]/90 border border-stone-700/60">
                    <span className="inline-flex gap-1">
                      {[0, 1, 2].map((d) => (
                        <span
                          key={d}
                          className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-bounce"
                          style={{ animationDelay: `${d * 0.15}s` }}
                        />
                      ))}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Suggestions */}
            <div className="px-4 pb-2 flex gap-1.5 overflow-x-auto">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="shrink-0 px-2.5 py-1.5 rounded-full border border-stone-700 text-[10px] font-mono text-gray-400 hover:border-emerald-500/50 hover:text-[var(--purple)] transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-gray-700/50">
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && send(input)}
                  placeholder="Ask about Dipesh..."
                  className="flex-1 bg-[#0f172a]/80 border border-gray-700 rounded-xl px-3.5 py-2.5 text-xs text-gray-300 placeholder-stone-500 outline-none focus:border-emerald-500/50"
                />
                <button
                  onClick={() => send(input)}
                  className="w-9 h-9 shrink-0 rounded-xl bg-gradient-to-tr from-emerald-500 to-amber-500 text-stone-950 flex items-center justify-center hover:brightness-110 transition-all"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="mt-2 text-center text-[10px] font-mono text-gray-500">
                Prefer a direct chat?{' '}
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener"
                  className="text-[var(--purple)] hover:underline"
                >
                  Message on WhatsApp &rarr;
                </a>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-5 right-4 sm:right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-amber-500 text-stone-950 flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:scale-105 transition-transform"
        aria-label="Toggle AI chat"
      >
        {open ? <X className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
      </button>
    </>
  );
};