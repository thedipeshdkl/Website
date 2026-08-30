import React, { useState } from 'react';
import { Mail, MapPin, ShieldCheck, Copy, Check, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message content is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 relative z-10 border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[var(--purple)] font-mono text-xs">
            <Mail className="w-3.5 h-3.5" />
            <span>CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-100 tracking-tight">
            Get In <span className="text-[var(--purple)]">Touch</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            For project inquiries, security audits, or collaboration opportunities, send a message directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="clean-panel rounded-3xl p-6 sm:p-8 border border-gray-700/50 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-stone-100 mb-2">Contact</h3>
                <p className="text-gray-500 text-xs sm:text-sm">
                  Available for cybersecurity consultations, web development projects, and general inquiries.
                </p>
              </div>

              {/* Info Items */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--secondary)] border border-gray-700/50">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-[var(--purple)] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-[10px] font-mono text-gray-500 uppercase">EMAIL</span>
                    <span className="text-sm font-semibold text-stone-100 truncate block">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-[#0f172a] hover:bg-[#0f172a] border border-gray-700/50 text-gray-500 hover:text-[var(--purple)] transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-[var(--purple)]" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--secondary)] border border-gray-700/50">
                  <div className="w-10 h-10 rounded-xl bg-amber-950 border border-amber-500/30 flex items-center justify-center text-[var(--purple)] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-gray-500 uppercase">LOCATION</span>
                    <span className="text-sm font-semibold text-stone-100">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>

              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-gray-700/50">
                <span className="block text-xs font-mono text-gray-500 mb-3">SOCIAL PROFILES</span>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-start gap-1 px-4 py-2.5 rounded-xl bg-[var(--secondary)] border border-gray-700/50 text-gray-400 hover:text-[var(--purple)] clean-panel-hover text-xs font-mono transition-all group"
                  >
                    <span className="flex items-center gap-2 font-semibold">
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                    </span>
                    <span className="text-[10px] text-gray-500 group-hover:text-emerald-500/70">@thedipeshdkl</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-start gap-1 px-4 py-2.5 rounded-xl bg-[var(--secondary)] border border-gray-700/50 text-gray-400 hover:text-[var(--purple)] clean-panel-hover text-xs font-mono transition-all group"
                  >
                    <span className="flex items-center gap-2 font-semibold">
                      <LinkedinIcon className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </span>
                    <span className="text-[10px] text-gray-500 group-hover:text-emerald-500/70">@thedipeshdkl</span>
                  </a>


                </div>
              </div>

            </div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-7">
            <div className="clean-panel rounded-3xl p-6 sm:p-8 border border-gray-700/50">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-950 border border-emerald-500/40 text-[var(--purple)] flex items-center justify-center mx-auto shadow-xl">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-100">Message Sent</h3>
                  <p className="text-gray-400 text-sm max-w-md mx-auto">
                    Thank you, {formData.name}. Your message has been received. Note: this form is a frontend preview and does not transmit messages.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[var(--secondary)] hover:bg-[#0f172a] border border-stone-700 text-gray-400 text-xs font-mono transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-gray-400">
                        NAME <span className="text-[var(--purple)]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={`w-full px-4 py-3 rounded-xl bg-[var(--secondary)] border text-stone-100 text-xs font-mono placeholder:text-stone-600 focus:outline-none focus:border-emerald-400 transition-all ${
                          errors.name ? 'border-red-500/60' : 'border-gray-700/50'
                        }`}
                      />
                      {errors.name && <p className="text-[10px] text-red-400">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-gray-400">
                        EMAIL <span className="text-[var(--purple)]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@domain.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[var(--secondary)] border text-stone-100 text-xs font-mono placeholder:text-stone-600 focus:outline-none focus:border-emerald-400 transition-all ${
                          errors.email ? 'border-red-500/60' : 'border-gray-700/50'
                        }`}
                      />
                      {errors.email && <p className="text-[10px] text-red-400">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-gray-400">
                      SUBJECT <span className="text-[var(--purple)]">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Pentesting Audit / Hello"
                      className={`w-full px-4 py-3 rounded-xl bg-[var(--secondary)] border text-stone-100 text-xs font-mono placeholder:text-stone-600 focus:outline-none focus:border-emerald-400 transition-all ${
                        errors.subject ? 'border-red-500/60' : 'border-gray-700/50'
                      }`}
                    />
                    {errors.subject && <p className="text-[10px] text-red-400">{errors.subject}</p>}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-gray-400">
                      MESSAGE <span className="text-[var(--purple)]">*</span>
                    </label>
                    <textarea
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your project, timeline, or security requirements..."
                      className={`w-full px-4 py-3 rounded-xl bg-[var(--secondary)] border text-stone-100 text-xs font-mono placeholder:text-stone-600 focus:outline-none focus:border-emerald-400 transition-all resize-none ${
                        errors.message ? 'border-red-500/60' : 'border-gray-700/50'
                      }`}
                    />
                    {errors.message && <p className="text-[10px] text-red-400">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 to-amber-600 hover:from-emerald-400 hover:to-amber-500 text-stone-950 font-bold font-mono text-xs transition-all shadow-[0_0_20px_rgba(16,185,129,0.35)]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
