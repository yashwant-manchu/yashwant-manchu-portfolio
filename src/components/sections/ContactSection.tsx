'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Linkedin,
  Github,
} from 'lucide-react';

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3500);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3500);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3500);
    }
  };

  const links = [
    {
      icon: Mail,
      label: 'yashwanthmanchu059@gmail.com',
      href: 'mailto:yashwanthmanchu059@gmail.com',
    },
    { icon: Phone, label: '+91 8367557617', href: 'tel:+918367557617' },
    { icon: MapPin, label: 'Pune, Maharashtra, India', href: '#' },
    {
      icon: Linkedin,
      label: 'linkedin.com/in/yashwant-manchu',
      href: 'https://linkedin.com/in/yashwant-manchu',
    },
    {
      icon: Github,
      label: 'github.com/yashwant-manchu',
      href: 'https://github.com/yashwant-manchu',
    },
  ];

  const inputStyle = {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    color: 'var(--text-primary)',
    fontFamily: "var(--font-outfit), 'Outfit', sans-serif",
  };

  const focusStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'var(--accent)';
    e.target.style.boxShadow = '0 0 0 3px var(--accent-glow)';
  };
  const blurStyle = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'var(--border-color)';
    e.target.style.boxShadow = 'none';
  };

  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mx-auto max-w-3xl"
        >
          {/* Section label */}
          <motion.div variants={item} className="mb-10 flex items-center gap-3">
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{
                color: 'var(--accent)',
                fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
              }}
            >
              04. Contact
            </span>
            <div className="bg-divider h-px flex-1" />
          </motion.div>

          <motion.h2
            variants={item}
            className="text-primary mb-3 text-2xl font-bold sm:text-3xl"
            style={{ fontFamily: "var(--font-syne), 'Syne', sans-serif" }}
          >
            Get In Touch
          </motion.h2>
          <motion.p variants={item} className="text-secondary mb-10 text-base leading-relaxed">
            I&apos;m currently open to new opportunities. Whether you have a project, a role, or
            just want to say hi — I&apos;ll do my best to get back to you.
          </motion.p>

          {/* Two-col layout — links + form aligned at top */}
          <div className="grid gap-10 md:grid-cols-5">
            {/* Left: contact links (no heading) */}
            <motion.div variants={item} className="space-y-3 md:col-span-2">
              {links.map((l) => {
                const Icon = l.icon;
                return (
                  <motion.a
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith('http') ? '_blank' : undefined}
                    rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="cursor-hover group flex items-center gap-3"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="border-divider bg-secondary flex-shrink-0 rounded-lg border p-2 transition-colors">
                      <Icon className="text-muted h-4 w-4" />
                    </div>
                    <span className="text-secondary truncate text-sm group-hover:underline">
                      {l.label}
                    </span>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Right: form */}
            <motion.div variants={item} className="md:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  {(['name', 'email'] as const).map((field) => (
                    <div key={field} className="space-y-1.5">
                      <label
                        htmlFor={field}
                        className="text-muted block text-xs font-semibold uppercase tracking-wide"
                      >
                        {field === 'name' ? 'Name' : 'Email'}
                      </label>
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        id={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        required
                        placeholder={field === 'name' ? 'Your name' : 'you@example.com'}
                        className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                        style={inputStyle}
                        onFocus={focusStyle}
                        onBlur={blurStyle}
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="text-muted block text-xs font-semibold uppercase tracking-wide"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="What's on your mind?"
                    className="w-full resize-none rounded-xl px-4 py-3 text-sm outline-none transition-all"
                    style={inputStyle}
                    onFocus={focusStyle}
                    onBlur={blurStyle}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  className="cursor-hover flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all disabled:opacity-60"
                  style={{
                    background: 'linear-gradient(135deg, var(--accent), var(--accent-dark))',
                  }}
                  whileHover={{
                    scale: status === 'loading' ? 1 : 1.03,
                    boxShadow: '0 0 20px var(--accent-glow)',
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  {status === 'loading' ? (
                    <div className="loading-dots scale-[0.55]">
                      <div />
                      <div />
                      <div />
                      <div />
                    </div>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle className="h-4 w-4" /> Sent!
                    </>
                  ) : status === 'error' ? (
                    <>
                      <AlertCircle className="h-4 w-4" /> Try again
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
