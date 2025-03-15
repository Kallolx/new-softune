'use client';

import CareerPage from '@/app/components/templates/CareerPage';


const position = {
  title: 'Graphics Designer',
  type: 'Full-time',
  location: 'Remote',
  salary: '₹2.5L - ₹5L',
  department: 'Creative',
  experience: '0-2 years',
  requirements: [
    { text: 'Proficiency in Adobe Creative Suite (Photoshop, Illustrator)' },
    { text: 'Strong understanding of design principles' },
    { text: 'Experience with digital and print design' },
    { text: 'Knowledge of typography and color theory' },
    { text: 'Ability to create social media graphics' },
    { text: 'Basic video editing skills' },
    { text: 'Strong creative thinking skills' },
    { text: 'Attention to detail and brand consistency' }
  ],
  responsibilities: [
    { text: 'Create engaging graphics for social media platforms' },
    { text: 'Design marketing materials and brand assets' },
    { text: 'Develop visual content for websites' },
    { text: 'Create illustrations and icons' },
    { text: 'Maintain brand consistency across materials' },
    { text: 'Collaborate with marketing team on campaigns' },
    { text: 'Design presentations and infographics' }
  ],
  screeningQuestions: [
    {
      text: 'What aspects of graphic design are you most passionate about?',
      type: 'multiline' as const,
      placeholder: 'Share your design interests...'
    },
    {
      text: 'Describe a design project that challenged you creatively. How did you handle it?',
      type: 'multiline' as const,
      placeholder: 'Tell us about your experience...'
    },
    {
      text: 'How do you stay creative and find inspiration for your designs?',
      type: 'multiline' as const,
      placeholder: 'Share your creative process...'
    },
    {
      text: 'Whats your approach to creating designs that align with brand guidelines?',
      type: 'multiline' as const,
      placeholder: 'Explain your process...'
    },
    {
      text: 'Share a link to your design portfolio.',
      type: 'text' as const,
      placeholder: 'https://...'
    }
  ]
};

export default function GraphicsDesignerPage() {
  return <CareerPage position={position} />;
} 