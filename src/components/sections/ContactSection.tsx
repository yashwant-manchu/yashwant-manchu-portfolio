'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Linkedin, Github } from 'lucide-react';

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
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

  const contactCards = [
    { icon: Mail, label: 'Email', value: 'yashwanthmanchu059@gmail.com', href: 'mailto:yashwanthmanchu059@gmail.com', color: '#10b981' },
    { icon: Phone, label: 'Phone', value: '+91 8367557617', href: 'tel:+918367557617', color: '#f59e0b' },
    { icon: MapPin, label: 'Location', value: 'Pune, Maharashtra, India', href: 'https://maps.google.com/?q=Pune,Maharashtra,India', color: '#06b6d4' },
    { icon: Linkedin, label: 'LinkedIn', value: 'yashwant-manchu', href: 'https://linkedin.com/in/yashwant-manchu', color: '#a78bfa' },
    { icon: Github, label: 'GitHub', value: 'yashwant-manchu', href: 'https://github.com/yashwant-manchu', color: '#fb7185' },
  ];

  return (
      <section id="contact" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div ref={ref} variants={container} initial="hidden" animate={isInView ? 'visible' : 'hidden'} className="max-w-6xl mx-auto">

            {/* Header */}
            <motion.div variants={item} className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-widest"
                  style={{ background: 'var(--accent-light)', color: 'var(--accent-dark)' }}>
              Get In Touch
            </span>
              <h2 className="text-4xl md:text-5xl font-extrabold gradient-text-blue mb-4">Let&apos;s Work Together</h2>
              <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
                Whether you have a project in mind, an opportunity to share, or just want to say hello — my inbox is always open.
              </p>
              <div className="w-16 h-1 rounded-full mx-auto mt-5" style={{ background: 'linear-gradient(90deg, var(--accent), var(--amber))' }} />
            </motion.div>

            <div className="grid lg:grid-cols-5 gap-10">
              {/* Contact info */}
              <motion.div variants={item} className="lg:col-span-2 space-y-4">
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Contact Details</h3>
                {contactCards.map((c) => {
                  const Icon = c.icon;
                  return (
                      <motion.a
                          key={c.label}
                          href={c.href}
                          target={['Location', 'LinkedIn', 'GitHub'].includes(c.label) ? '_blank' : undefined}
                          rel={['Location', 'LinkedIn', 'GitHub'].includes(c.label) ? 'noopener noreferrer' : undefined}
                          className="flex items-center gap-4 p-4 glass-card rounded-xl hover-lift group"
                          whileHover={{ scale: 1.02, x: 4 }}
                          transition={{ duration: 0.25 }}
                      >
                        <div className="p-2.5 rounded-xl flex-shrink-0"
                             style={{ background: `${c.color}18`, border: `1px solid ${c.color}30` }}>
                          <Icon className="w-5 h-5" style={{ color: c.color }} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>{c.label}</p>
                          <p className="text-sm font-medium truncate" style={{ color: 'var(--text-primary)' }}>{c.value}</p>
                        </div>
                      </motion.a>
                  );
                })}

                <div className="glass-card rounded-xl p-5 mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: 'var(--text-muted)' }}>Response Time</p>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    I typically reply within 24 hours. For urgent matters, call or text directly.
                  </p>
                </div>
              </motion.div>

              {/* Form */}
              <motion.div variants={item} className="lg:col-span-3">
                <div className="glass-card rounded-2xl p-7">
                  <h3 className="text-lg font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Send a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      {(['name', 'email'] as const).map((field) => (
                          <div key={field} className="space-y-1.5">
                            <label htmlFor={field} className="block text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
                              {field === 'name' ? 'Full Name' : 'Email Address'}
                            </label>
                            <input
                                type={field === 'email' ? 'email' : 'text'}
                                id={field} name={field}
                                value={formData[field]}
                                onChange={handleChange}
                                required
                                placeholder={field === 'name' ? 'Yashwant Manchu' : 'you@example.com'}
                                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                                style={{
                                  background: 'var(--bg-secondary)',
                                  border: '1px solid var(--border-color)',
                                  color: 'var(--text-primary)',
                                }}
                                onFocus={(e) => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px var(--accent-glow)'; }}
                                onBlur={(e) => { e.target.style.borderColor = 'var(--border-color)'; e.target.style.boxShadow = 'none'; }}
                            />
                          </div>
                      ))}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
                        Message
                      </label>
                      <textarea
                          id="message" name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required rows={5}
                          placeholder="Tell me about your project or opportunity..."
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                          style={{
                            background: 'var(--bg-secondary)',
                            border: '1px solid var(--border-color)',
                            color: 'var(--text-primary)',
                          }}
                          onFocus={(e) => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px var(--accent-glow)'; }}
                          onBlur={(e) => { e.target.style.borderColor = 'var(--border-color)'; e.target.style.boxShadow = 'none'; }}
                      />
                    </div>

                    <motion.button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl font-semibold text-sm text-white transition-all disabled:opacity-60"
                        style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}
                        whileHover={{ scale: status === 'loading' ? 1 : 1.02, boxShadow: '0 0 24px rgba(16,185,129,0.3)' }}
                        whileTap={{ scale: 0.98 }}
                    >
                      {status === 'loading' ? (
                          <div className="loading-dots scale-[0.6]"><div /><div /><div /><div /></div>
                      ) : status === 'success' ? (
                          <><CheckCircle className="w-5 h-5" /> Message Sent!</>
                      ) : status === 'error' ? (
                          <><AlertCircle className="w-5 h-5" /> Something went wrong</>
                      ) : (
                          <><Send className="w-4 h-4" /> Send Message</>
                      )}
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
  );
};
