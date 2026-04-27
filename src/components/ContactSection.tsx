
import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Github, Linkedin, Instagram, Image } from 'lucide-react';

const CONTACT_EMAIL_PARTS = ['pedro_hlopes', 'outlook', 'com'];
const SUBMIT_COOLDOWN_MS = 60_000;
const getContactEmail = () => `${CONTACT_EMAIL_PARTS[0]}@${CONTACT_EMAIL_PARTS[1]}.${CONTACT_EMAIL_PARTS[2]}`;

const hasMultipleEmails = (email: string) => {
  const normalizedEmail = email.trim();
  return /[,;\s]/.test(normalizedEmail) || (normalizedEmail.match(/@/g) || []).length !== 1;
};

const isValidEmail = (email: string) => {
  const normalizedEmail = email.trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(normalizedEmail) && !hasMultipleEmails(normalizedEmail);
};

const looksLikeSpam = (name: string, subject: string, message: string) => {
  const content = `${name} ${subject} ${message}`.toLowerCase();
  const links = content.match(/https?:\/\/|www\./g) || [];
  const repeatedChars = /(.)\1{7,}/.test(content);
  const suspiciousWords = ['crypto', 'casino', 'betting', 'viagra', 'loan', 'seo backlinks'];

  return links.length > 1 || repeatedChars || suspiciousWords.some((word) => content.includes(word));
};

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (formData.company) {
      setErrorMessage(t('contact.errorSpam'));
      return;
    }

    if (!name || !email || !subject || !message) {
      setErrorMessage(t('contact.errorRequired'));
      return;
    }

    if (!isValidEmail(email)) {
      setErrorMessage(t('contact.errorEmail'));
      return;
    }

    if (looksLikeSpam(name, subject, message)) {
      setErrorMessage(t('contact.errorSpam'));
      return;
    }

    const lastSubmit = Number(localStorage.getItem('last-contact-submit') || 0);

    if (Date.now() - lastSubmit < SUBMIT_COOLDOWN_MS) {
      setErrorMessage(t('contact.errorCooldown'));
      return;
    }

    setIsSubmitting(true);

    const mailSubject = encodeURIComponent(subject);
    const mailBody = encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`
    );

    localStorage.setItem('last-contact-submit', String(Date.now()));
    window.location.href = `mailto:${getContactEmail()}?subject=${mailSubject}&body=${mailBody}`;

    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({ name: '', email: '', subject: '', message: '', company: '' });

    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/LopesHPedro', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/LopesHPedro/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/hlopespedro/', label: 'Instagram' },
    { icon: Image, href: 'https://vsco.co/lopeshpedro/gallery', label: 'VSCO' }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 slow-reveal">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
            {t('contact.title')}
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-400 sm:text-xl">
            {t('contact.subtitle')}
          </p>
          <div className="w-24 h-1 bg-neon-green mx-auto mt-6"></div>
        </div>

        <div className="slow-reveal glass-effect overflow-hidden rounded-xl border border-dark-300/50">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)]">
            {/* Contact Form */}
            <div className="border-b border-dark-300/50 p-5 sm:p-8 lg:border-b-0 lg:border-r">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      {t('contact.name')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-dark-200 border border-dark-300 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      {t('contact.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      inputMode="email"
                      autoComplete="email"
                      className="w-full px-4 py-3 bg-dark-200 border border-dark-300 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.subject')}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-200 border border-dark-300 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-200 border border-dark-300 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-neon-green px-6 py-3.5 font-semibold text-dark-50 transition-all duration-300 hover:scale-105 hover:bg-neon-green/90 disabled:cursor-not-allowed disabled:opacity-50 sm:px-8 sm:py-4"
                >
                  {isSubmitting ? t('contact.sending') : t('contact.send')}
                </button>
              </form>

              {errorMessage && (
                <div className="mt-6 rounded-lg border border-red-500/60 bg-red-500/10 px-4 py-3 text-red-300 animate-fade-in">
                  {errorMessage}
                </div>
              )}

              {/* Success Message */}
              {showSuccess && (
                <div className="mt-6 bg-neon-green/20 border border-neon-green text-neon-green px-4 py-3 rounded-lg animate-fade-in">
                  {t('contact.success')}
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div className="bg-dark-100/40 p-5 sm:p-8">
              <div className="flex h-full flex-col justify-between gap-8">
                <div>
                  <h3 className="text-xl font-bold text-neon-green mb-6">
                    {t('contact.social')}
                  </h3>
                  <div className="grid gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center rounded-lg border border-dark-300/60 bg-dark-200/60 px-4 py-3 text-gray-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-neon-green/40 hover:text-neon-green group"
                      >
                        <social.icon size={20} className="mr-4 group-hover:scale-110 transition-transform" />
                        <span>{social.label}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div
                  className="rounded-lg border border-neon-green/20 bg-neon-green/5 p-4 text-sm leading-relaxed text-gray-300"
                >
                  {t('contact.emailProtected')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
