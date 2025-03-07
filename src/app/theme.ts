// Theme configuration for the application
// This file provides easy access to the theme colors and fonts

export const theme = {
  colors: {
    primary: {
      DEFAULT: "#87CEEB", // skyblue
      light: "#A7DFFF",
      dark: "#5BA3C7",
    },
    secondary: {
      DEFAULT: "#000000", // black
      light: "#333333",
      dark: "#000000",
    },
    background: {
      DEFAULT: "#FFFFFF", // white
      dark: "#F5F5F5",
    },
  },
  fonts: {
    dmSans: "var(--font-dm-sans)",
  },
};

// Helper function to get a color from the theme
export function getColor(colorPath: string): string {
  const parts = colorPath.split('.');
  let result: any = theme.colors;
  
  for (const part of parts) {
    if (result[part] === undefined) {
      return '';
    }
    result = result[part];
  }
  
  return typeof result === 'string' ? result : '';
}

// Example usage:
// getColor('primary') => "#87CEEB"
// getColor('primary.light') => "#A7DFFF" 