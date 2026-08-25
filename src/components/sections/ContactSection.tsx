'use client';

import { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, Send, Github, Linkedin } from 'lucide-react';

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSent(true);

      const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        formData.subject || `Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
    }, 500);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-24 pointer-events-auto"
      aria-label="Contact Section"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Personal Contact Information */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-foreground-subtle tracking-widest uppercase">
            <span>// 06 CONTACT</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-foreground tracking-tight">
              Let&apos;s build something.
            </h2>
            <p className="text-sm sm:text-base font-mono text-foreground-muted">
              {PERSONAL_INFO.status}
            </p>
          </div>

          <p className="text-sm sm:text-base text-foreground/90 font-sans leading-relaxed">
            Have a project, software engineering opportunity, or technical idea worth discussing? I&apos;d love to connect.
          </p>

          {/* Contact Details List */}
          <div className="space-y-3 pt-2">
            {/* Email with copy button */}
            <div className="flex items-center justify-between p-4 rounded-lg bg-background-surface/80 border border-border">
              <div className="flex items-center space-x-3.5">
                <div className="p-2 rounded bg-white/[0.04] border border-border text-white">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-foreground-subtle uppercase">EMAIL</div>
                  <span className="text-xs sm:text-sm font-mono text-foreground select-all">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </div>

              <button
                onClick={copyEmail}
                className="p-2 rounded hover:bg-white/[0.08] text-foreground-muted hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-white flex items-center space-x-1.5 text-xs font-mono"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 text-[11px]">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span className="text-[11px]">COPY</span>
                  </>
                )}
              </button>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-3.5 p-4 rounded-lg bg-background-surface/80 border border-border">
              <div className="p-2 rounded bg-white/[0.04] border border-border text-white">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-foreground-subtle uppercase">PHONE / WHATSAPP</div>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-xs sm:text-sm font-mono text-foreground hover:text-white transition-colors"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-3.5 p-4 rounded-lg bg-background-surface/80 border border-border">
              <div className="p-2 rounded bg-white/[0.04] border border-border text-white">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-foreground-subtle uppercase">LOCATION</div>
                <span className="text-xs sm:text-sm font-mono text-foreground">
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Contact Form */}
        <div className="lg:col-span-6">
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 rounded-xl bg-background-surface/80 border border-border/80 backdrop-blur-md space-y-4 shadow-xl"
          >
            <div className="border-b border-border/60 pb-3 flex items-center justify-between">
              <span className="text-xs font-mono text-foreground-subtle">
                GET IN TOUCH
              </span>
              <span className="text-[11px] font-mono text-emerald-400 flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>ACTIVE</span>
              </span>
            </div>

            <div className="space-y-3.5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-mono text-foreground-muted mb-1"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Your name or organization"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#07070a] border border-border rounded-lg px-3.5 py-2.5 text-xs sm:text-sm font-sans text-foreground placeholder:text-foreground-faint focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-mono text-foreground-muted mb-1"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#07070a] border border-border rounded-lg px-3.5 py-2.5 text-xs sm:text-sm font-sans text-foreground placeholder:text-foreground-faint focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-mono text-foreground-muted mb-1"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  placeholder="Project inquiry, role opportunity, or collaboration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-[#07070a] border border-border rounded-lg px-3.5 py-2.5 text-xs sm:text-sm font-sans text-foreground placeholder:text-foreground-faint focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono text-foreground-muted mb-1"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Tell me about your project, idea, or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#07070a] border border-border rounded-lg px-3.5 py-2.5 text-xs sm:text-sm font-sans text-foreground placeholder:text-foreground-faint focus:outline-none focus:border-white transition-colors resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full flex items-center justify-center space-x-2 text-xs font-mono bg-white hover:bg-neutral-200 text-black font-semibold py-3 rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50"
            >
              {sending ? (
                <span>Sending...</span>
              ) : sent ? (
                <>
                  <Check className="w-4 h-4 text-black" />
                  <span>Message Prepared & Opened</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
