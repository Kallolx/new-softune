import Image from "next/image";
import Button from '../components/ui/Button';

const certifications = [
  {
    id: 1,
    name: "Webby",
    type: "PREMIER PARTNER",
    logo: "/images/certifications/webby.svg"
  },
  {
    id: 2,
    name: "Dribbble",
    type: "MARKETING PARTNER",
    logo: "/images/certifications/dribbble.svg"
  },
  {
    id: 3,
    name: "Behance",
    type: "MARKETING PARTNER",
    logo: "/images/certifications/behance.svg"
  },
  {
    id: 4,
    name: "Awwwards",
    type: "BUSINESS PARTNER",
    logo: "/images/certifications/awwwards.svg"
  },
  {
    id: 5,
    name: "Figma",
    type: "CREATIVE PARTNER",
    logo: "/images/certifications/figma.svg"
  }
];

export default function AwardsShowcase() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-black tracking-[-0.06em] text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-20">
          Awards & Certifications
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-8 max-w-6xl mx-auto mb-16">
          {certifications.map((cert) => (
            <div key={cert.id} className="flex flex-col items-center text-center">
              <div className="relative w-32 h-12 mb-4">
                <Image
                  src={cert.logo}
                  alt={cert.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-red-500 text-sm font-medium tracking-wide">
                {cert.type}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button href="/awards" className="w-auto px-12">
            VIEW MORE
          </Button>
        </div>
      </div>
    </section>
  );
} 