import { DM_Sans, Chakra_Petch } from 'next/font/google';

// Initialize the DM Sans font with desired settings
export const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

// Initialize the Chakra Petch font with desired settings
export const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  variable: '--font-chakra-petch',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

// Export font class names for easy use in components
export const fontClasses = {
  dmSans: dmSans.className,
  dmSansVariable: dmSans.variable,
  chakraPetch: chakraPetch.className,
  chakraPetchVariable: chakraPetch.variable,
}; 