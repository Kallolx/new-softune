'use client';

import Link from 'next/link';
import { InstagramLogo, YoutubeLogo, TwitchLogo, TiktokLogo, ArrowUp } from '@phosphor-icons/react';
import Image from 'next/image';
import { HyperText } from '../components/ui/HyperText';


const socialLinks = [
  {
    name: 'Instagram',
    icon: InstagramLogo,
    href: 'https://instagram.com/softune.dev'
  },
  {
    name: 'YouTube',
    icon: YoutubeLogo,
    href: 'https://youtube.com/@softune'
  },
  {
    name: 'Twitch',
    icon: TwitchLogo,
    href: 'https://twitch.tv/softune_live'
  },
  {
    name: 'TikTok',
    icon: TiktokLogo,
    href: 'https://tiktok.com/@softune.tech'
  }
];

const footerLinks = [
  {
    title: 'Services',
    links: [
      { name: 'Web Hosting', href: '/hosting' },
      { name: 'Cloud Solutions', href: '/cloud' },
      { name: 'Development', href: '/development' },
      { name: 'Support', href: '/support' }
    ]
  },
  {
    title: 'Careers',
    links: [      
      { name: 'Backend Developer', href: '/careers/backend-developer' },
      { name: 'UI/UX Designer', href: '/careers/ui-ux-designer' },
      { name: 'Graphics Designer', href: '/careers/graphics-designer' },
      { name: 'Video Editor', href: '/careers/video-editor' },
      { name: 'View All Positions', href: '/careers' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/pages/footer/privacy' },
      { name: 'Terms of Service', href: '/pages/footer/terms' },
      { name: 'Cookie Policy', href: '/pages/footer/cookies' }
    ]
  }
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-20">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-4">
                <Image
                  src="/logo-white.svg"
                  alt="SofTune Logo"
                  width={140}
                  height={240}
                  priority
                  className="h-[40px] w-[23px]"
                />
                <Link href="/" onClick={() => {}}>
                  <HyperText
                    className="text-3xl py-0 font-bold text-white uppercase font-secondary"
                    duration={600}
                    as="span"
                  >
                    SofTune
                  </HyperText>
                </Link>
              </div>
            <p className="text-zinc-400 font-dmSans max-w-md">
              Empowering digital dreams with premium hosting and innovative solutions. Join our team and help shape the future of web technology.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-900 p-2 hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    <Icon weight="fill" className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title} className="space-y-6">
              <h4 className="font-secondary uppercase text-lg font-bold">{column.title}</h4>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-zinc-400 hover:text-white transition-colors duration-300 font-dmSans"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-400 font-dmSans text-sm">
            © {currentYear} Softune. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="bg-zinc-900 p-3 hover:bg-white hover:text-black transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp weight="bold" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
} 