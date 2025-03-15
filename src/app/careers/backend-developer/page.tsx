'use client';

import CareerPage from '@/app/components/templates/CareerPage';


const position = {
  title: 'Backend Developer',
  type: 'Full-time',
  location: 'Remote',
  salary: '₹3L - ₹8L',
  department: 'Engineering',
  experience: '0-2 years',
  requirements: [
    { text: 'Strong understanding of Node.js and Express.js' },
    { text: 'Experience with databases (MongoDB, PostgreSQL)' },
    { text: 'Knowledge of RESTful APIs and API design' },
    { text: 'Familiarity with version control systems (Git)' },
    { text: 'Basic understanding of cloud services (AWS/GCP)' },
    { text: 'Strong problem-solving skills' },
    { text: 'Ability to write clean, maintainable code' },
    { text: 'Good communication skills in English' }
  ],
  responsibilities: [
    { text: 'Design and implement scalable backend services' },
    { text: 'Create and maintain RESTful APIs' },
    { text: 'Optimize database queries and performance' },
    { text: 'Implement security best practices' },
    { text: 'Write unit tests and documentation' },
    { text: 'Collaborate with frontend developers' },
    { text: 'Participate in code reviews' }
  ],
  screeningQuestions: [
    {
      text: 'What interests you most about backend development?',
      type: 'multiline' as const,
      placeholder: 'Tell us about your passion for backend development...'
    },
    {
      text: 'Describe a backend project youve worked on. What challenges did you face?',
      type: 'multiline' as const,
      placeholder: 'Share your experience...'
    },
    {
      text: 'What is your preferred backend technology stack and why?',
      type: 'multiline' as const,
      placeholder: 'Tell us about your tech preferences...'
    },
    {
      text: 'How do you ensure the security of your backend applications?',
      type: 'multiline' as const,
      placeholder: 'Share your security practices...'
    },
    {
      text: 'Share a link to your GitHub profile or a project youre proud of.',
      type: 'text' as const,
      placeholder: 'https://...'
    }
  ]
};

export default function BackendDeveloperPage() {
  return <CareerPage position={position} />;
} 