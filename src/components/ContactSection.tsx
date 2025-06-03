
import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Github, Linkedin, Instagram } from 'lucide-react';

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    }, 1000);
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/LopesHPedro', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/LopesHPedro/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/lopesh_pedro/', label: 'Instagram' }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
          <div className="w-24 h-1 bg-neon-green mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-slide-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                className="w-full bg-neon-green text-dark-50 px-8 py-4 rounded-lg font-semibold hover:bg-neon-green/90 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : t('contact.send')}
              </button>
            </form>

            {/* Success Message */}
            {showSuccess && (
              <div className="mt-6 bg-neon-green/20 border border-neon-green text-neon-green px-4 py-3 rounded-lg animate-fade-in">
                {t('contact.success')}
              </div>
            )}
          </div>

          {/* Contact Info & Newsletter */}
          <div className="animate-fade-in space-y-8">
            {/* Social Links */}
            <div className="glass-effect rounded-lg p-8">
              <h3 className="text-xl font-bold text-neon-green mb-6">
                Redes Sociais
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-300 hover:text-neon-green transition-colors group"
                  >
                    <social.icon size={20} className="mr-4 group-hover:scale-110 transition-transform" />
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="glass-effect rounded-lg p-8">
              <h3 className="text-xl font-bold text-neon-green mb-4">
                {t('newsletter.title')}
              </h3>
              <p className="text-gray-400 mb-6">
                {t('newsletter.description')}
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder={t('newsletter.placeholder')}
                  className="flex-1 px-4 py-3 bg-dark-200 border border-dark-300 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-neon-green"
                />
                <button className="bg-neon-green text-dark-50 px-6 py-3 rounded-r-lg font-semibold hover:bg-neon-green/90 transition-colors">
                  {t('newsletter.subscribe')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
