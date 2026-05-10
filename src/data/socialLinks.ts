import { Github, Image, Instagram, Linkedin, type LucideIcon } from 'lucide-react';

export type SocialLink = {
  icon: LucideIcon;
  href: string;
  label: string;
};

export const socialLinks: SocialLink[] = [
  { icon: Github, href: 'https://github.com/LopesHPedro', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/LopesHPedro/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/hlopespedro/', label: 'Instagram' },
  { icon: Image, href: 'https://vsco.co/lopeshpedro/gallery', label: 'VSCO' },
];
