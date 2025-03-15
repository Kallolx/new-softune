'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Briefcase, 
  FileArrowUp,
  Robot,
  CheckCircle,
} from '@phosphor-icons/react';
import Button from '@/app/components/ui/Button';
import Navbar from '@/app/landing/Navbar';
import Footer from '@/app/landing/Footer';

interface Requirement {
  text: string;
}

interface Responsibility {
  text: string;
}

interface Question {
  text: string;
  type: 'text' | 'multiline';
  placeholder: string;
}

interface CareerPageProps {
  position: {
    title: string;
    type: string; // Full-time, Part-time, etc.
    location: string;
    salary: string;
    department: string;
    experience: string;
    requirements: Requirement[];
    responsibilities: Responsibility[];
    screeningQuestions: Question[];
  };
}

export default function CareerPage({ position }: CareerPageProps) {
  const [step, setStep] = useState<'info' | 'questions' | 'cv' | 'review'>('info');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedin: '',
    portfolio: '',
    questions: Array(position.screeningQuestions.length).fill(''),
    cv: null as File | null,
    useAICv: false
  });

  const steps = [
    { id: 'info', label: 'Personal Info' },
    { id: 'questions', label: 'Questions' },
    { id: 'cv', label: 'Resume' },
    { id: 'review', label: 'Review' }
  ];

  return (
    <>
      <Navbar />
      <main className="w-full font-sans mt-16">
        {/* Header Section */}
        <section className="bg-black py-8 md:py-12 sm:py-8">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 bg-[#ff4d00] px-4 py-2 mb-6">
                <Briefcase className="w-5 h-5 text-white" weight="fill" />
                <span className="text-sm uppercase tracking-wider text-white font-medium">Career Opportunity</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                {position.title}
              </h1>

            </motion.div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-12 md:py-16 text-black bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Progress Steps */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
                {steps.map((s, index) => (
                  <div 
                    key={s.id}
                    className={`p-4 border-2 transition-colors duration-300 ${
                      step === s.id 
                        ? 'border-[#ff4d00] bg-[#ff4d00] text-white' 
                        : index < steps.findIndex(x => x.id === step)
                          ? 'border-[#ff4d00] bg-white text-[#ff4d00]'
                          : 'border-black/10 bg-white text-black/60'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg font-medium">{`${index + 1}`}</span>
                      <span className="text-sm uppercase tracking-wider">{s.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Personal Information */}
              {step === 'info' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <div className="text-black grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <label className="block  text-sm font-medium">First Name</label>
                      <input
                        type="text"
                        className="w-full h-12 px-4 rounded-lg bg-black/5 focus:outline-none focus:ring-2 focus:ring-[#ff4d00]"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="block text-sm font-medium">Last Name</label>
                      <input
                        type="text"
                        className="w-full h-12 px-4 rounded-lg bg-black/5 focus:outline-none focus:ring-2 focus:ring-[#ff4d00]"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="block text-sm font-medium">Email</label>
                      <input
                        type="email"
                        className="w-full h-12 px-4 rounded-lg bg-black/5 focus:outline-none focus:ring-2 focus:ring-[#ff4d00]"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="block text-sm font-medium">Phone</label>
                      <input
                        type="tel"
                        className="w-full h-12 px-4 rounded-lg bg-black/5 focus:outline-none focus:ring-2 focus:ring-[#ff4d00]"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="block text-sm font-medium">LinkedIn Profile</label>
                      <input
                        type="url"
                        className="w-full h-12 px-4 rounded-lg bg-black/5 focus:outline-none focus:ring-2 focus:ring-[#ff4d00]"
                        value={formData.linkedin}
                        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="block text-sm font-medium">Portfolio URL (Optional)</label>
                      <input
                        type="url"
                        className="w-full h-12 px-4 rounded-lg bg-black/5 focus:outline-none focus:ring-2 focus:ring-[#ff4d00]"
                        value={formData.portfolio}
                        onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button
                      onClick={() => setStep('questions')}
                      variant="white"
                      icon={<ArrowRight className="w-6 h-6" weight="bold" />}
                    >
                      Next Step
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Screening Questions */}
              {step === 'questions' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  {position.screeningQuestions.map((question, index) => (
                    <div key={index} className="space-y-4">
                      <label className="block text-lg font-medium">{question.text}</label>
                      {question.type === 'text' ? (
                        <input
                          type="text"
                          className="w-full h-12 px-4 rounded-lg bg-black/5 focus:outline-none focus:ring-2 focus:ring-[#ff4d00]"
                          placeholder={question.placeholder}
                          value={formData.questions[index]}
                          onChange={(e) => {
                            const newQuestions = [...formData.questions];
                            newQuestions[index] = e.target.value;
                            setFormData({ ...formData, questions: newQuestions });
                          }}
                        />
                      ) : (
                        <textarea
                          className="w-full h-32 p-4 rounded-lg bg-black/5 focus:outline-none focus:ring-2 focus:ring-[#ff4d00]"
                          placeholder={question.placeholder}
                          value={formData.questions[index]}
                          onChange={(e) => {
                            const newQuestions = [...formData.questions];
                            newQuestions[index] = e.target.value;
                            setFormData({ ...formData, questions: newQuestions });
                          }}
                        />
                      )}
                    </div>
                  ))}
                  <div className="flex justify-between">
                    <Button
                      onClick={() => setStep('info')}
                      variant="white"
                      icon={<ArrowRight className="w-6 h-6 rotate-180" weight="bold" />}
                    >
                      Previous
                    </Button>
                    <Button
                      onClick={() => setStep('cv')}
                      variant="white"
                      icon={<ArrowRight className="w-6 h-6" weight="bold" />}
                    >
                      Next Step
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* CV Upload / AI CV Builder */}
              {step === 'cv' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-12"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Upload CV */}
                    <div className={`p-8 rounded-xl border-2 border-dashed ${formData.useAICv ? 'border-black/20' : 'border-[#ff4d00]'} transition-colors`}>
                      <div className="text-center space-y-4">
                        <FileArrowUp className="w-16 h-16 mx-auto text-[#ff4d00]" weight="thin" />
                        <h3 className="text-xl font-bold">Upload Your CV</h3>
                        <p className="text-black/60">Upload your CV in PDF, DOC, or DOCX format</p>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                          onChange={(e) => setFormData({ ...formData, cv: e.target.files?.[0] || null })}
                          id="cv-upload"
                          disabled={formData.useAICv}
                        />
                        <Button
                          onClick={() => document.getElementById('cv-upload')?.click()}
                          variant="white"                         
                        >
                          Choose File
                        </Button>
                      </div>
                    </div>

                    {/* AI CV Builder */}
                    <div className={`p-8 rounded-xl border-2 border-dashed ${formData.useAICv ? 'border-[#ff4d00]' : 'border-black/20'} transition-colors`}>
                      <div className="text-center space-y-4">
                        <Robot className="w-16 h-16 mx-auto text-[#ff4d00]" weight="thin" />
                        <h3 className="text-xl font-bold">AI CV Builder</h3>
                        <p className="text-black/60">Let our AI help you create a professional CV</p>
                        <Button
                          onClick={() => setFormData({ ...formData, useAICv: true, cv: null })}
                          variant={formData.useAICv ? "white" : "default"}
                        >
                          Use AI Builder
                        </Button>
                      </div>
                    </div>
                  </div>

                  {formData.useAICv && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="space-y-8"
                    >
                      <h3 className="text-2xl font-bold">AI CV Builder</h3>
                      {/* Add AI CV Builder form fields here */}
                    </motion.div>
                  )}

                  <div className="flex justify-between">
                    <Button
                      onClick={() => setStep('questions')}
                      variant="white"
                      icon={<ArrowRight className="w-6 h-6 rotate-180" weight="bold" />}
                    >
                      Previous
                    </Button>
                    <Button
                      onClick={() => setStep('review')}
                      variant="white"
                      icon={<ArrowRight className="w-6 h-6" weight="bold" />}
                    >
                      Review Application
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* Review & Submit */}
              {step === 'review' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-12"
                >
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold">Review Your Application</h2>
                    
                    {/* Personal Information Review */}
                    <div className="bg-black/5 p-6 rounded-xl space-y-4">
                      <h3 className="text-xl font-bold">Personal Information</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-black/60">Full Name</p>
                          <p className="font-medium">{formData.firstName} {formData.lastName}</p>
                        </div>
                        <div>
                          <p className="text-sm text-black/60">Email</p>
                          <p className="font-medium">{formData.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-black/60">Phone</p>
                          <p className="font-medium">{formData.phone}</p>
                        </div>
                        <div>
                          <p className="text-sm text-black/60">LinkedIn</p>
                          <p className="font-medium">{formData.linkedin}</p>
                        </div>
                      </div>
                    </div>

                    {/* Questions Review */}
                    <div className="bg-black/5 p-6 rounded-xl space-y-4">
                      <h3 className="text-xl font-bold">Screening Questions</h3>
                      {position.screeningQuestions.map((question, index) => (
                        <div key={index} className="space-y-2">
                          <p className="font-medium">{question.text}</p>
                          <p className="text-black/80">{formData.questions[index]}</p>
                        </div>
                      ))}
                    </div>

                    {/* CV Method */}
                    <div className="bg-black/5 p-6 rounded-xl">
                      <h3 className="text-xl font-bold mb-4">CV Submission Method</h3>
                      <div className="flex items-center gap-3">
                        {formData.useAICv ? (
                          <>
                            <Robot className="w-6 h-6 text-[#ff4d00]" weight="fill" />
                            <span>AI-Generated CV</span>
                          </>
                        ) : (
                          <>
                            <FileArrowUp className="w-6 h-6 text-[#ff4d00]" weight="fill" />
                            <span>Uploaded CV: {formData.cv?.name}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button
                      onClick={() => setStep('cv')}
                      variant="white"
                      icon={<ArrowRight className="w-6 h-6 rotate-180" weight="bold" />}
                    >
                      Previous
                    </Button>
                    <Button
                      onClick={() => {
                        // Handle form submission
                        console.log('Form submitted:', formData);
                      }}
                      variant="white"
                      icon={<ArrowRight className="w-6 h-6" weight="bold" />}
                    >
                      Submit Application
                    </Button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Job Details */}
        <section className="py-20 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
              {/* Requirements */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Requirements</h2>
                <div className="space-y-4">
                  {position.requirements.map((req, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-[#ff4d00] flex-shrink-0 mt-1" weight="fill" />
                      <p className="text-white/80">{req.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Responsibilities</h2>
                <div className="space-y-4">
                  {position.responsibilities.map((resp, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-[#ff4d00] flex-shrink-0 mt-1" weight="fill" />
                      <p className="text-white/80">{resp.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
} 