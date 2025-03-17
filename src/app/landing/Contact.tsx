"use client";

import { useState } from "react";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import Button from "../components/ui/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black tracking-[-0.06em] text-center mb-20">
            Hit Us Up!
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className="w-full bg-zinc-100 border-2 border-transparent px-6 py-4 font-dmSans text-black placeholder:text-zinc-500 focus:border-black focus:bg-white transition-colors duration-300"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className="w-full bg-zinc-100 border-2 border-transparent px-6 py-4 font-dmSans text-black placeholder:text-zinc-500 focus:border-black focus:bg-white transition-colors duration-300"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-zinc-100 border-2 border-transparent px-6 py-4 font-dmSans text-black placeholder:text-zinc-500 focus:border-black focus:bg-white transition-colors duration-300"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full bg-zinc-100 border-2 border-transparent px-6 py-4 font-dmSans text-black placeholder:text-zinc-500 focus:border-black focus:bg-white transition-colors duration-300"
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full h-48 bg-zinc-100 border-2 border-transparent px-6 py-4 font-dmSans text-black placeholder:text-zinc-500 focus:border-black focus:bg-white transition-colors duration-300 resize-none"
              required
            ></textarea>

            <div className="flex justify-center">
              <div className="w-full">
                <Button
                  className="px-12 py-4 text-lg"
                  icon={<PaperPlaneTilt className="w-5 h-5" />}
                  href={""}
                >
                  Submit
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
