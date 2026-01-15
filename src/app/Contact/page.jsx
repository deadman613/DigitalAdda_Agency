"use client";
import React, { useState } from 'react';
import { Send, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', subject: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "8b5d3f99-8f11-4cfc-bcab-35143aba7bc4"); // Replace with your actual Web3Forms access key
    formDataToSend.append("name", formData.fullName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("subject", formData.subject);
    formDataToSend.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully! We'll get back to you shortly.");
        setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setResult(""), 5000);
    }
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2340&auto=format&fit=crop')`,
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="relative z-10 px-6 max-w-5xl mx-auto">
         
          <p className="mt-10 text-3xl md:text-5xl font-light text-white/90 leading-tight">
            Let's start a conversation that grows your business.
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-10 h-14 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1.5 h-4 bg-white/60 rounded-full mt-4"></div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-linear-to-tr from-black to-purple-900 py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

          {/* Left Side – Content + Social Handles */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                We're Here to Help You Grow
              </h2>

              <div className="text-gray-300 text-lg leading-relaxed space-y-5 max-w-xl">
                <p>
                  Whether you have a question, a project in mind, or just want to explore possibilities — we're here to help.
                </p>
                <p>
                  Our team is ready to assist you with expert guidance, quick responses, and reliable support at every step of your journey.
                </p>
              </div>
            </div>

            {/* Social Media Handles */}
            <div className="space-y-6">
              {[
                { icon: Instagram, name: "Instagram", handle: "Digitaladdaagency", link: "https://www.instagram.com/digitaladdaagency/" },
                { icon: Linkedin, name: "LinkedIn", handle: "Digitaladdaagency", link: "https://www.linkedin.com/in/digitaladda-agency-283322372/" },
                { icon: Facebook, name: "Facebook", handle: "Digitaladdaagency", link: "https://www.facebook.com/profile.php?id=61577146244812" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 p-6 bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-purple-500/60 hover:bg-gray-900/80 transition-all group"
                >
                  <div className={`p-4 rounded-xl ${i === 0 ? 'bg-linear-to-br from-pink-600 to-purple-600' :
                    i === 1 ? 'bg-linear-to-br from-blue-600 to-cyan-600' :
                      'bg-linear-to-br from-purple-600 to-blue-600'
                    } group-hover:scale-110 transition-transform`}>
                    <social.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">{social.name}</p>
                    <p className="text-xl text-white font-semibold">{social.handle}</p>
                  </div>
                </a>
              ))}
            </div>

            <p className="text-gray-500 text-sm">
              Prefer email? <a href="mailto:Info@digitaladdagagency.com" className="text-purple-400 hover:underline">Info@digitaladdagagency.com</a>
            </p>
          </div>

          {/* Right Side – Contact Form */}
          <div className="bg-gray-900/70 backdrop-blur-xl border border-gray-800 rounded-3xl p-10 lg:p-12 shadow-2xl">
            <h3 className="text-4xl font-bold text-white mb-2">Start the Conversation</h3>
            <div className="w-24 h-1 bg-linear-to-r from-purple-500 to-blue-500 rounded-full mb-8"></div>

            <div className="space-y-6">
              <input
                type="text"
                name="fullName"
                placeholder="Your Full Name *"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition"
              />
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone (Optional)"
                  value={formData.phone}
                  onChange={handleChange}
                  className="px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                />
              </div>
              <textarea
                name="message"
                placeholder="Tell us how we can help you *"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition resize-none"
              />

              {result && (
                <div className={`p-4 rounded-xl text-center font-medium ${
                  result.includes("Successfully") 
                    ? "bg-green-500/20 text-green-300 border border-green-500/30" 
                    : result.includes("Sending")
                    ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    : "bg-red-500/20 text-red-300 border border-red-500/30"
                }`}>
                  {result}
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full py-5 bg-linear-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:opacity-70 text-white font-bold text-lg rounded-full transition-all shadow-xl flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}