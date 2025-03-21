'use client';

import { useState, useEffect } from 'react';
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
import Contact from '@/app/landing/Contact';

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

  // Scroll to top when step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [step]);

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
        <section className="bg-black py-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                {position.title}
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-12 md:py-16 text-black bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Progress Steps - More compact on mobile */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-12 border-2 border-black">
                {steps.map((s, index) => (
                  <div 
                    key={s.id}
                    className={`p-3 md:p-6 border-r-2 last:border-r-0 border-black transition-colors duration-300 ${
                      step === s.id 
                        ? 'bg-black text-white' 
                        : index < steps.findIndex(x => x.id === step)
                          ? 'bg-[#f5f5f5] text-black'
                          : 'bg-white text-black/60'
                    }`}
                  >
                    <div className="flex flex-col items-center gap-1 md:gap-2 text-center">
                      <span className="text-base md:text-lg font-medium">{`${index + 1}`}</span>
                      <span className="text-xs md:text-sm uppercase tracking-wider">{s.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Personal Information */}
              {step === 'info' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        className="w-full bg-zinc-100 border-2 border-transparent px-6 py-4 font-dmSans text-black placeholder:text-zinc-500 focus:border-black focus:bg-white transition-colors duration-300"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="w-full bg-zinc-100 border-2 border-transparent px-6 py-4 font-dmSans text-black placeholder:text-zinc-500 focus:border-black focus:bg-white transition-colors duration-300"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        className="w-full bg-zinc-100 border-2 border-transparent px-6 py-4 font-dmSans text-black placeholder:text-zinc-500 focus:border-black focus:bg-white transition-colors duration-300"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="w-full bg-zinc-100 border-2 border-transparent px-6 py-4 font-dmSans text-black placeholder:text-zinc-500 focus:border-black focus:bg-white transition-colors duration-300"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <input
                        type="url"
                        className="w-full bg-zinc-100 border-2 border-transparent px-6 py-4 font-dmSans text-black placeholder:text-zinc-500 focus:border-black focus:bg-white transition-colors duration-300"
                        placeholder="LinkedIn Profile"
                        value={formData.linkedin}
                        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                      />
                    </div>
                    <div>
                      <input
                        type="url"
                        className="w-full bg-zinc-100 border-2 border-transparent px-6 py-4 font-dmSans text-black placeholder:text-zinc-500 focus:border-black focus:bg-white transition-colors duration-300"
                        placeholder="Portfolio URL (Optional)"
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
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  {position.screeningQuestions.map((question, index) => (
                    <div key={index} className="space-y-3">
                      <label className="block text-lg font-medium">{question.text}</label>
                      {question.type === 'text' ? (
                        <input
                          type="text"
                          className="w-full bg-zinc-100 border-2 border-transparent px-6 py-4 font-dmSans text-black placeholder:text-zinc-500 focus:border-black focus:bg-white transition-colors duration-300"
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
                          className="w-full h-32 bg-zinc-100 border-2 border-transparent px-6 py-4 font-dmSans text-black placeholder:text-zinc-500 focus:border-black focus:bg-white transition-colors duration-300 resize-none"
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
                      variant="default"
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
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold mb-4">Submit Your Resume</h2>
                  <p className="text-black/70 mb-6">Choose one of the following options to submit your resume</p>
                  
                  <div className="max-w-xl mx-auto space-y-6">
                    {/* Upload CV */}
                    <div className={`border-2 ${!formData.useAICv ? 'border-black' : 'border-black/20'} p-6 transition-colors`}>
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          <FileArrowUp className="w-10 h-10 text-[#ff4d00]" weight="thin" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-lg font-bold">Upload Your CV</h3>
                          <p className="text-black/60 text-sm mb-3">Upload your CV in PDF, DOC, or DOCX format</p>
                          
                          <div className="flex items-center gap-3">
                            <input
                              type="file"
                              accept=".pdf,.doc,.docx"
                              className="hidden"
                              onChange={(e) => setFormData({ ...formData, cv: e.target.files?.[0] || null, useAICv: false })}
                              id="cv-upload"
                            />
                            <Button
                              onClick={() => document.getElementById('cv-upload')?.click()}
                              variant={!formData.useAICv ? "white" : "default"}
                              className="py-2 px-4 text-base"
                            >
                              Choose File
                            </Button>
                            {formData.cv && (
                              <span className="text-[#ff4d00] font-medium text-sm">{formData.cv.name}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* AI CV Builder */}
                    <div className={`border-2 ${formData.useAICv ? 'border-black' : 'border-black/20'} p-6 transition-colors`}>
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          <Robot className="w-10 h-10 text-[#ff4d00]" weight="thin" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-lg font-bold">AI CV Builder</h3>
                          <p className="text-black/60 text-sm mb-3">Let our AI help you create a professional CV</p>
                          
                          <Button
                            onClick={() => setFormData({ ...formData, useAICv: true, cv: null })}
                            variant={formData.useAICv ? "white" : "default"}
                            className="py-2 px-4 text-base"
                          >
                            Use AI Builder
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {formData.useAICv && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="max-w-xl mx-auto border-2 border-black p-6 mt-6"
                    >
                      <h3 className="text-xl font-bold mb-4">AI CV Builder</h3>
                      <p className="text-black/80 mb-6">Our AI will generate a professional CV based on your information.</p>
                      
                      <div className="space-y-4">
                        <div>
                          <input
                            type="text"
                            className="w-full bg-zinc-100 border-2 border-transparent px-6 py-4 font-dmSans text-black placeholder:text-zinc-500 focus:border-black focus:bg-white transition-colors duration-300"
                            placeholder="Current Position"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            className="w-full bg-zinc-100 border-2 border-transparent px-6 py-4 font-dmSans text-black placeholder:text-zinc-500 focus:border-black focus:bg-white transition-colors duration-300"
                            placeholder="Years of Experience"
                          />
                        </div>
                        <div>
                          <textarea
                            className="w-full h-32 bg-zinc-100 border-2 border-transparent px-6 py-4 font-dmSans text-black placeholder:text-zinc-500 focus:border-black focus:bg-white transition-colors duration-300 resize-none"
                            placeholder="Key Skills (separated by commas)"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div className="flex justify-between mt-8">
                    <Button
                      onClick={() => setStep('questions')}
                      variant="default"
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
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-12"
                >
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold border-b-2 border-black pb-4">Review Your Application</h2>
                    
                    {/* Personal Information Review */}
                    <div className="border-2 border-black p-6 space-y-4">
                      <h3 className="text-xl font-bold border-b border-black/20 pb-2">Personal Information</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-black/60 uppercase">Full Name</p>
                          <p className="font-medium">{formData.firstName} {formData.lastName}</p>
                        </div>
                        <div>
                          <p className="text-sm text-black/60 uppercase">Email</p>
                          <p className="font-medium">{formData.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-black/60 uppercase">Phone</p>
                          <p className="font-medium">{formData.phone}</p>
                        </div>
                        <div>
                          <p className="text-sm text-black/60 uppercase">LinkedIn</p>
                          <p className="font-medium">{formData.linkedin}</p>
                        </div>
                      </div>
                    </div>

                    {/* Questions Review */}
                    <div className="border-2 border-black p-6 space-y-4">
                      <h3 className="text-xl font-bold border-b border-black/20 pb-2">Screening Questions</h3>
                      {position.screeningQuestions.map((question, index) => (
                        <div key={index} className="space-y-2 border-l-4 border-[#ff4d00] pl-4">
                          <p className="font-medium">{question.text}</p>
                          <p className="text-black/80">{formData.questions[index]}</p>
                        </div>
                      ))}
                    </div>

                    {/* CV Method */}
                    <div className="border-2 border-black p-6">
                      <h3 className="text-xl font-bold border-b border-black/20 pb-2 mb-4">CV Submission Method</h3>
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
                      variant="default"
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
                <h2 className="text-3xl font-bold mb-8 border-b-2 border-white/20 pb-4">Requirements</h2>
                <div className="space-y-4">
                  {position.requirements.map((req, index) => (
                    <div key={index} className="flex items-start gap-4 border-l-4 border-[#ff4d00] pl-4">
                      <p className="text-white/80">{req.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <h2 className="text-3xl font-bold mb-8 border-b-2 border-white/20 pb-4">Responsibilities</h2>
                <div className="space-y-4">
                  {position.responsibilities.map((resp, index) => (
                    <div key={index} className="flex items-start gap-4 border-l-4 border-[#ff4d00] pl-4">
                      <p className="text-white/80">{resp.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Contact />

        <Footer />
      </main>
    </>
  );
} 