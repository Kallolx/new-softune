"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  GoogleLogo,
  TiktokLogo,
  FacebookLogo,
  SnapchatLogo,
  MagnifyingGlass,
  Buildings,
  UsersThree,
  Globe,
  TwitterLogo,
  Desktop,
  Database,
  Scissors,
  Camera,
  VideoCamera,
  Hexagon,
  Trophy,
  ChatCircle,
  CaretDown,
} from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { HyperText } from "../components/ui/HyperText";
import { LinkedinLogo } from "@phosphor-icons/react/dist/ssr/LinkedinLogo";
import Image from "next/image";

const menuVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
};

const dropdownItemVariants = {
  hidden: {
    opacity: 0,
    x: -20,
    transition: {
      duration: 0.1,
    },
  },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
  exit: {
    opacity: 0,
    x: -20,
    transition: {
      duration: 0.1,
    },
  },
};

const expandVariants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      height: {
        duration: 0.2,
      },
      opacity: {
        duration: 0.1,
      },
    },
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      height: {
        duration: 0.2,
      },
      opacity: {
        duration: 0.1,
      },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: {
        duration: 0.2,
      },
      opacity: {
        duration: 0.1,
      },
    },
  },
};

type Section = {
  title: string;
  items: {
    title: string;
    href: string;
    icon: React.ReactNode;
  }[];
};

type NavItems = {
  marketing: { sections: Section[] };
  creative: { sections: Section[] };
  about: { sections: Section[] };
};

function MobileMenu({
  isOpen,
  onClose,
  navItems,
}: {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItems;
}) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const menuVariants = {
    hidden: {
      clipPath: "circle(0% at calc(100% - 48px) 40px)",
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    visible: {
      clipPath: "circle(150% at calc(100% - 48px) 40px)",
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const contentVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
        duration: 0.4,
      },
    },
  };

  const mainLinkVariants = {
    hidden: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.1,
      },
    },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.7 + i * 0.1,
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  };

  const sections = [
    {
      title: "MARKETING",
      items: navItems.marketing.sections.flatMap((section) => section.items),
    },
    {
      title: "CREATIVE",
      items: navItems.creative.sections.flatMap((section) => section.items),
    },
    {
      title: "ABOUT US",
      items: navItems.about.sections.flatMap((section) => section.items),
    },
    {
      title: "PORTFOLIO",
      items: [
        {
          title: "Portfolio",
          href: "/portfolio",
          icon: <Buildings weight="fill" />,
        },
      ],
    },
    {
      title: "WEB HOSTING",
      items: [
        {
          title: "Web Hosting",
          href: "/hosting",
          icon: <Database weight="fill" />,
        },
      ],
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={menuVariants}
          className="fixed inset-0 bg-black z-[100]"
        >
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="flex justify-between items-center px-8 py-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <Image
                  src="/logo-white.svg"
                  alt="SofTune Logo"
                  width={140}
                  height={240}
                  priority
                  className="h-[40px] w-[23px]"
                />
                <Link href="/" onClick={onClose}>
                  <HyperText
                    className="text-3xl py-0 font-bold text-white uppercase font-secondary"
                    duration={600}
                    as="span"
                  >
                    SofTune
                  </HyperText>
                </Link>
              </div>
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white transition-colors text-3xl"
              >
                ✕
              </button>
            </div>

            <div className="h-[calc(100vh-80px)] overflow-y-auto py-8 px-8">
              <div className="space-y-6">
                {sections.map((section, idx) => (
                  <motion.div
                    key={section.title}
                    custom={idx}
                    variants={mainLinkVariants}
                    initial="hidden"
                    animate="visible"
                    className="border-b border-white/10 pb-6"
                  >
                    {section.items.length > 1 ? (
                      <button
                        onClick={() =>
                          setExpandedSection(
                            expandedSection === section.title
                              ? null
                              : section.title
                          )
                        }
                        className="w-full flex items-center justify-between text-white text-xl font-bold mb-4 hover:opacity-90 transition-opacity"
                      >
                        <span className="text-white text-xl font-bold">
                          {section.title}
                        </span>
                        <motion.div
                          animate={{
                            rotate: expandedSection === section.title ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="text-white/80"
                        >
                          <CaretDown weight="bold" className="w-6 h-6" />
                        </motion.div>
                      </button>
                    ) : (
                      <Link
                        href={section.items[0]?.href || "#"}
                        onClick={onClose}
                        className="w-full flex items-center text-white text-xl font-bold mb-4 hover:opacity-90 transition-opacity"
                      >
                        {section.title}
                      </Link>
                    )}

                    <AnimatePresence mode="wait">
                      {section.items.length > 1 &&
                        expandedSection === section.title && (
                          <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={expandVariants}
                            className="overflow-hidden"
                          >
                            <div className="space-y-4 py-2">
                              {section.items.map((item, index) => (
                                <motion.div
                                  key={item.title}
                                  custom={index}
                                  initial="hidden"
                                  animate="visible"
                                  exit="exit"
                                  variants={dropdownItemVariants}
                                  className="pl-4"
                                >
                                  <Link
                                    href={item.href}
                                    className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors"
                                    onClick={onClose}
                                  >
                                    <div className="w-6 h-6">{item.icon}</div>
                                    <span className="text-lg">
                                      {item.title}
                                    </span>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                    </AnimatePresence>
                  </motion.div>
                ))}

                <motion.div
                  custom={sections.length}
                  variants={itemVariants}
                  className="pt-6"
                >
                  <Link
                    href="/signup"
                    className="relative overflow-hidden group bg-[#ff4d00] text-white h-16 w-full flex items-center justify-center space-x-2 before:absolute before:inset-0 before:bg-black before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-700 before:ease-out"
                    onClick={onClose}
                  >
                    <span className="relative font-bold text-xl uppercase">
                      START NOW
                    </span>
                    <ArrowRight className="relative w-6 h-6 transition-transform duration-500 group-hover:translate-x-1" weight="bold" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = {
    marketing: {
      sections: [
        {
          title: "PAID MEDIA",
          items: [
            {
              title: "Google Ads",
              href: "/services/google-ads",
              icon: <Image src="/images/icons/navicons/paid-media/google.svg" alt="Google Ads" width={24} height={24} />,
            },
            {
              title: "TikTok Ads",
              href: "/services/tiktok-ads",
              icon: <Image src="/images/icons/navicons/paid-media/tiktok.svg" alt="TikTok Ads" width={24} height={24} />,
            },
            {
              title: "Facebook Ads",
              href: "/services/facebook-ads",
              icon: <Image src="/images/icons/navicons/paid-media/facebook.svg" alt="Facebook Ads" width={24} height={24} />,
            },
            {
              title: "Instagram Ads",
              href: "/services/instagram-ads",
              icon: <Image src="/images/icons/navicons/paid-media/instagram.svg" alt="Instagram Ads" width={24} height={24} />,
            },
            {
              title: "Youtube Ads",
              href: "/services/youtube-ads",
              icon: <Image src="/images/icons/navicons/paid-media/youtube.svg" alt="Youtube Ads" width={24} height={24} />,
            },
          ],
        },
        {
          title: "ORGANIC MARKETING",
          items: [
            {
              title: "Audit",
              href: "/services/audit",
              icon: <Image src="/images/icons/navicons/organic-marketing/search.svg" alt="Audit" width={24} height={24} />,
            },
            {
              title: "Enterprise SEO",
              href: "/services/enterprise-seo",
              icon: <Image src="/images/icons/navicons/organic-marketing/arrow.svg" alt="Enterprise SEO" width={24} height={24} />,
            },
            {
              title: "Local SEO",
              href: "/services/local-seo",
              icon: <Image src="/images/icons/navicons/organic-marketing/globe.svg" alt="Local SEO" width={24} height={24} />,
            },
            {
              title: "Organic Social Media",
              href: "/services/social-media",
              icon: <Image src="/images/icons/navicons/organic-marketing/user.svg" alt="Organic Social Media" width={24} height={24} />,
            },
            {
              title: "Name, Image & Likeness",
              href: "/services/nil",
              icon: <Image src="/images/icons/navicons/organic-marketing/arrow.svg" alt="Name, Image & Likeness" width={24} height={24} />,
            },
          ],
        },
        {
          title: "MARKETING CONSULTATION",
          items: [
            {
              title: "Consultation",
              href: "/services/consultation",
              icon: <Image src="/images/icons/navicons/organic-marketing/user.svg" alt="Organic Social Media" width={24} height={24} />,
            },
            {
              title: "Partner Network",
              href: "/services/partner-network",
              icon: <Image src="/images/icons/navicons/organic-marketing/globe.svg" alt="Local SEO" width={24} height={24} />,
            },
          ],
        },
      ],
    },
    creative: {
      sections: [
        {
          title: "WEB",
          items: [
            {
              title: "Website Design",
              href: "/services/website-design",
              icon: <Image src="/images/icons/navicons/web/webdesign.svg" alt="Local SEO" width={24} height={24} />,
            },{
              title: "Website Development",
              href: "/services/website-development",
              icon: <Image src="/images/icons/navicons/web/develop.svg" alt="Local SEO" width={24} height={24} />,
            },
            {
              title: "Web Hosting",
              href: "/services/web-hosting",
              icon: <Image src="/images/icons/navicons/web/hosting.svg" alt="Local SEO" width={24} height={24} />,
            },
          ],
        },
        {
          title: "CONTENT",
          items: [
            {
              title: "Videography",
              href: "/services/videography",
              icon: <Image src="/images/icons/navicons/web/video.svg" alt="Local SEO" width={24} height={24} />,
            },
            {
              title: "Photography",
              href: "/services/photography",
              icon: <Image src="/images/icons/navicons/web/photo.svg" alt="Local SEO" width={24} height={24} />,
            },
            {
              title: "Graphic Design",
              href: "/services/graphic-design",
              icon: <Image src="/images/icons/navicons/web/graphic.svg" alt="Local SEO" width={24} height={24} />,
            },
          ],
        },
      ],
    },
    about: {
      sections: [
        {
          title: "ABOUT US",
          items: [
            {
              title: "Our Company",
              href: "/about/company",
              icon: <Hexagon weight="fill" />,
            },
            {
              title: "Awards & Certifications",
              href: "/about/awards",
              icon: <Trophy weight="fill" />,
            },
            {
              title: "Contact Us",
              href: "/about/contact",
              icon: <ChatCircle weight="fill" />,
            },
          ],
        },
      ],
    },
  };

  return (
    <>
      <nav className="bg-white py-0 px-0 fixed w-full top-0 z-50 shadow-sm font-secondary">
        <div className="w-full flex justify-between items-center h-20 relative">
          {/* Logo */}
          <Link href="/" className="px-8 flex items-center gap-4 group">
            <Image
              src="/logo.svg"
              alt="Softune Logo"
              width={140}
              height={240}
              priority
              className="h-[40px] w-[23px]"
            />
            <HyperText
              className="text-3xl py-0 font-bold text-black uppercase font-secondary"
              duration={600}
              as="span"
            >
              Softune
            </HyperText>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
            <div
              onMouseEnter={() => setActiveDropdown("marketing")}
              onMouseLeave={() => setActiveDropdown(null)}
              className="relative"
            >
              <NavLink href="#" width={120}>
                MARKETING
              </NavLink>
              <MegaMenu
                isOpen={activeDropdown === "marketing"}
                sections={navItems.marketing.sections}
                position="left-[120px]"
              />
            </div>
            <div
              onMouseEnter={() => setActiveDropdown("creative")}
              onMouseLeave={() => setActiveDropdown(null)}
              className="relative"
            >
              <NavLink href="/creative" width={120}>
                CREATIVE
              </NavLink>
              <MegaMenu
                isOpen={activeDropdown === "creative"}
                sections={navItems.creative.sections}
                position="left-[120px]"
              />
            </div>
            <NavLink href="/portfolio" width={120}>
              PORTFOLIO
            </NavLink>
            <div
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
              className="relative"
            >
              <NavLink href="/about" width={120}>
                ABOUT US
              </NavLink>
              <MegaMenu
                isOpen={activeDropdown === "about"}
                sections={navItems.about.sections}
                position="left-[120px]"
              />
            </div>
            <NavLink href="/hosting" width={140}>
              WEB HOSTING
            </NavLink>
          </div>

          {/* Start Now Button */}
          <Link
            href="/signup"
            className="hidden 2xl:flex relative overflow-hidden group bg-black text-white h-20 px-8 items-center space-x-2 before:absolute before:inset-0 before:bg-[#ff4d00] before:origin-left before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-700 before:ease-out"
          >
            <span className="relative font-bold text-xl uppercase">
              START NOW
            </span>
            <ArrowRight className="relative w-6 h-6 transition-transform duration-500 group-hover:translate-x-1" weight="bold" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden text-black px-8"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <span className="text-3xl">✕</span>
            ) : (
              <span className="text-3xl">☰</span>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          navItems={navItems}
        />
      </nav>
    </>
  );
}

function NavLink({
  href,
  children,
  onClick,
  width = "auto",
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  width?: number | string;
}) {
  const widthStyle = typeof width === "number" ? `${width}px` : width;

  return (
    <Link
      href={href}
      className={`text-black font-bold text-lg uppercase hover:text-gray-600 transition-colors group block text-center`}
      onClick={onClick}
      style={{ width: widthStyle }}
    >
      {typeof children === "string" ? (
        <div className="overflow-hidden">
          <HyperText
            className="text-lg py-0 font-bold text-black group-hover:text-gray-600 font-secondary"
            duration={400}
            as="span"
          >
            {children}
          </HyperText>
        </div>
      ) : (
        children
      )}
    </Link>
  );
}

function MegaMenu({
  isOpen,
  sections,
  position = "left-[120px]",
}: {
  isOpen: boolean;
  sections: Section[];
  position?: string;
}) {
  const getGridCols = (length: number) => {
    switch (length) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-2";
      default:
        return "grid-cols-3";
    }
  };

  const menuWidth =
    sections.length === 1 && sections[0].items.length <= 3
      ? "w-[400px]"
      : sections.length <= 2
      ? "w-[600px]"
      : "w-[900px]";

  return (
    <motion.div
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      variants={menuVariants}
      className={`absolute top-[calc(100%+12px)] -left-24 ${menuWidth}  bg-black text-white z-[60] ${
        !isOpen && "pointer-events-none"
      }`}
    >
      {/* Menu Pointer */}
      <div
        className={`absolute top-0 ${position} -translate-y-2 w-4 h-4 bg-black transform rotate-45`}
      />

      <div className="relative">
        <div className={`grid ${getGridCols(sections.length)} py-8 px-8 gap-6`}>
          {sections.map((section, idx) => (
            <div key={idx} className="px-4">
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="text-lg font-bold mb-4 text-white tracking-wider"
              >
                {section.title}
              </motion.h3>
              <div className="space-y-4">
                {section.items.map((item, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={itemVariants}
                  >
                    <Link
                      href={item.href}
                      className="group flex items-center space-x-3 hover:opacity-100 opacity-90 transition-all duration-300"
                    >
                      <div className="w-8 h-8 flex items-center justify-center text-white">
                        {item.icon}
                      </div>
                      <span className="font-lg text-base text-white">
                        {item.title}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
