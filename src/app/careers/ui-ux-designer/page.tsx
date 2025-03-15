'use client';

import CareerPage from '@/app/components/templates/CareerPage';


const position = {
  title: 'UI/UX Designer',
  type: 'Full-time',
  location: 'Remote',
  salary: '₹2.5L - ₹6L',
  department: 'Design',
  experience: '0-2 years',
  requirements: [
    { text: 'Understanding of UI/UX principles and best practices' },
    { text: 'Proficiency in design tools (Figma, Adobe XD)' },
    { text: 'Knowledge of responsive design principles' },
    { text: 'Basic understanding of HTML/CSS' },
    { text: 'Ability to create user flows and wireframes' },
    { text: 'Strong attention to detail' },
    { text: 'Good visual design skills' },
    { text: 'Ability to take feedback constructively' }
  ],
  responsibilities: [
    { text: 'Create user-centered designs for web and mobile applications' },
    { text: 'Develop wireframes and prototypes' },
    { text: 'Conduct user research and usability testing' },
    { text: 'Create and maintain design systems' },
    { text: 'Collaborate with developers to implement designs' },
    { text: 'Ensure consistent design language across products' },
    { text: 'Present design solutions to stakeholders' }
  ],
  screeningQuestions: [
    {
      text: 'What inspired you to become a UI/UX designer?',
      type: 'multiline' as const,
      placeholder: 'Share your design journey...'
    },
    {
      text: 'Describe a design project that youre most proud of. What was your process?',
      type: 'multiline' as const,
      placeholder: 'Tell us about your project...'
    },
    {
      text: 'How do you approach user research in your design process?',
      type: 'multiline' as const,
      placeholder: 'Share your research methods...'
    },
    {
      text: 'Whats your favorite design tool and why?',
      type: 'multiline' as const,
      placeholder: 'Tell us about your preferred tools...'
    },
    {
      text: 'Share a link to your design portfolio.',
      type: 'text' as const,
      placeholder: 'https://...'
    }
  ]
};

export default function UiUxDesignerPage() {
  return <CareerPage position={position} />;
} 