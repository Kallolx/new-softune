import Image from "next/image";
import { InstagramLogo, YoutubeLogo, TwitchLogo, TiktokLogo, Cloud, ArrowRight } from "@phosphor-icons/react";
import Button from '../components/ui/Button';
import Link from 'next/link';

const socialPlatforms = [
  {
    id: 1,
    name: "Instagram",
    handle: "@softune.dev",
    followers: "50K+",
    icon: InstagramLogo,
    link: "https://instagram.com/softune.dev",
    stats: "Daily Design Updates"
  },
  {
    id: 2,
    name: "YouTube",
    handle: "Softune Dev",
    followers: "100K+",
    icon: YoutubeLogo,
    link: "https://youtube.com/@softune",
    stats: "Weekly Tech Reviews"
  },
  {
    id: 3,
    name: "Twitch",
    handle: "softune_live",
    followers: "25K+",
    icon: TwitchLogo,
    link: "https://twitch.tv/softune_live",
    stats: "Live Coding Sessions"
  },
  {
    id: 4,
    name: "TikTok",
    handle: "@softune.tech",
    followers: "75K+",
    icon: TiktokLogo,
    link: "https://tiktok.com/@softune.tech",
    stats: "Tech Tips & Tricks"
  }
];

export default function SocialHosting() {
  return (
    <>
      {/* Social Media Showcase */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black tracking-[-0.06em] text-center mb-20">
            Follow Our Journey
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialPlatforms.map((platform) => {
              const Icon = platform.icon;
              return (
                <Link 
                  key={platform.id} 
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white border border-zinc-200 p-8 hover:bg-black transition-colors duration-500"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <Icon weight="fill" className="w-8 h-8 text-black group-hover:text-white" />
                    <h3 className="font-chakraPetch text-xl font-bold text-black group-hover:text-white">
                      {platform.name}
                    </h3>
                  </div>
                  <p className="font-dmSans text-zinc-600 group-hover:text-zinc-400 mb-2">
                    {platform.handle}
                  </p>
                  <p className="font-chakraPetch text-2xl font-bold text-black group-hover:text-white mb-4">
                    {platform.followers}
                  </p>
                  <p className="font-dmSans text-sm text-zinc-500 group-hover:text-zinc-400">
                    {platform.stats}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hosting Services Banner */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center gap-8">
              
              <h2 className="font-chakraPetch text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-[-0.06em] max-w-3xl">
                Power Your Digital Dreams With Premium Hosting
              </h2>

              <div className="flex items-center gap-3 mt-4">
                <Button 
                  href="/hosting"
                  variant="white"
                  className="px-12 py-6 text-lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Explore Plans
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 