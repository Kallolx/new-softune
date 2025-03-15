'use client';

import CareerPage from '@/app/components/templates/CareerPage';


const position = {
  title: 'Video Editor',
  type: 'Full-time',
  location: 'Remote',
  salary: '₹2.5L - ₹5L',
  department: 'Creative',
  experience: '0-2 years',
  requirements: [
    { text: 'Proficiency in Adobe Premiere Pro and After Effects' },
    { text: 'Understanding of video editing principles' },
    { text: 'Experience with motion graphics' },
    { text: 'Knowledge of color grading and audio mixing' },
    { text: 'Ability to create engaging social media content' },
    { text: 'Understanding of current video trends' },
    { text: 'Strong storytelling skills' },
    { text: 'Attention to detail and timing' }
  ],
  responsibilities: [
    { text: 'Edit and produce high-quality video content' },
    { text: 'Create engaging social media videos' },
    { text: 'Design and implement motion graphics' },
    { text: 'Perform color correction and audio mixing' },
    { text: 'Maintain consistent style across videos' },
    { text: 'Collaborate with creative team on projects' },
    { text: 'Stay updated with video trends' }
  ],
  screeningQuestions: [
    {
      text: 'What inspired you to become a video editor?',
      type: 'multiline' as const,
      placeholder: 'Share your journey in video editing...'
    },
    {
      text: 'Describe a video project that youre most proud of. What made it special?',
      type: 'multiline' as const,
      placeholder: 'Tell us about your best work...'
    },
    {
      text: 'How do you approach storytelling through video editing?',
      type: 'multiline' as const,
      placeholder: 'Share your creative process...'
    },
    {
      text: 'Whats your experience with creating social media video content?',
      type: 'multiline' as const,
      placeholder: 'Tell us about your social media work...'
    },
    {
      text: 'Share a link to your video portfolio or showreel.',
      type: 'text' as const,
      placeholder: 'https://...'
    }
  ]
};

export default function VideoEditorPage() {
  return <CareerPage position={position} />;
} 