'use client';

import { useState, useEffect, useRef } from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Rohit Sharma ',
    role: 'Business Owner',
    content: '"Working with DigitalAdda Agency has been one of the best decisions for my business. Their team understood our goals clearly and created a complete digital marketing strategy that increased our leads by more than 3X. They are always available for support and give honest guidance. I truly trust them as a long-term growth partner."',
    rating: 5,
  },
  {
    name: 'Neha Gupta ',
    role: 'Founder, Fashion Brand',
    content: ' "DigitalAdda Agency completely transformed our online presence. From managing our social media to improving our website visibility through SEO, everything was handled professionally. We started getting consistent inquiries within the first month itself. Their transparent work process and detailed reporting made us feel very confident."',
    rating: 5,
  },
  {
    name: ' Aman Verma ',
    role: 'Real Estate Consultant',
    content: ' "I was struggling with online lead generation before working with DigitalAdda Agency. After they took over, I started receiving high-quality leads regularly. The team is very polite, responsive, and always ready to explain things in simple language. I highly recommend them to anyone who wants real business growth."',
    rating: 5,
  },
  {
    name: 'Priya Mehta',
    role: 'Clinic Owner',
    content: ' "DigitalAdda Agency helped my clinic grow digitally in a way I never imagined. My website traffic increased significantly and my appointments doubled within a few months. The best part about their team is honesty and commitment. They really care about their clients\' success and treat every project like their own business."',
    rating: 5,
  },
  {
    name: 'Karan Singh',
    role: 'Startup Founder',
    content: ' "As a startup, we needed a reliable digital marketing partner, and DigitalAdda Agency proved to be the perfect choice. They helped us build our brand from scratch and generated consistent leads. Their strategic planning, regular updates, and performance tracking gave us full trust in their work. I look forward to working with them for many years.',
    rating: 5,
  },
  {
    name: 'Rahul Malhotra',
    role: 'Startup Founder',
    content: '  “DigitalAdda Agency completely transformed our business online. Before working with them, we struggled to generate quality leads. Their team designed a clear strategy and within a short time we started seeing real results. They are extremely professional, transparent, and always available for support. I highly recommend them to anyone who wants serious business growth.”',
    rating: 5,
  },
  {
    name: 'Sneha Kapoor',
    role: 'Startup Founder',
    content: '  “My experience with DigitalAdda Agency has been absolutely amazing. They handled our social media marketing and paid ads with great expertise. The best part is their honest communication and regular performance updates. We started receiving genuine customer inquiries consistently, and our brand visibility increased significantly.”',
    rating: 5,
  },
  {
    name: 'Amit Verma',
    role: 'Startup Founder',
    content: '  “Choosing DigitalAdda Agency was the best decision for our company. Their approach is very systematic and result-focused. They explained every step of the process and shared detailed reports regularly. Our website traffic and conversions have grown massively since we started working with them.”',
    rating: 5,
  },
  {
    name: 'Pooja Sharma',
    role: 'Startup Founder',
    content: '  “I was looking for a reliable digital marketing partner and I’m glad I found DigitalAdda Agency. The team is highly supportive and genuinely cares about client success. My business visibility improved, and I started getting more customer trust because of their branding strategies.”',
    rating: 5,
  },
  {
    name: ' Kunal Singh',
    role: 'Startup Founder',
    content: '  “DigitalAdda Agency has been a game changer for my business. From SEO to social media management, they handled everything professionally. Their strategies are practical and deliver real results. I feel very confident working with them and trust them completely for my long-term growth plans.”',
    rating: 5,
  },
];

export default function Homesection5() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  
  // Duplicate testimonials multiple times for smooth infinite scroll
  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    let animationId;
    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset scroll position when we've scrolled through one set
      const cardWidth = 420; // max-width of card + padding
      const resetPoint = testimonials.length * cardWidth;
      
      if (scrollPosition >= resetPoint) {
        scrollPosition = 0;
      }
      
      if (scrollContainer) {
        scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused]);

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-linear-to-br from-[#0f0020] via-[#1a0033] to-[#0f0f1e]">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-800/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-800/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Header */}
        <p className="text-purple-400 text-sm font-medium tracking-widest uppercase   mb-3">
          Real Voices, Real Value
        </p>
        <h2 className="text-4xl md:text-7xl font-black text-white mb-4">
          Satisfied Clients
        </h2>
        <div className="w-32 h-1 bg-linear-to-r from-purple-500 to-pink-500 mx-auto rounded-full shadow-lg shadow-purple-500/80 mb-16" />

        {/* Counter */}
        <div className="mb-12">
          <h3 className="text-6xl md:text-8xl font-black bg-linear-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            2000+
          </h3>
          <p className="text-purple-300 text-lg mt-2">
            Happy clients worldwide — whether you're looking for cutting-edge market insights or tailored growth strategies,
            <br className="hidden md:block" />
            we deliver results that speak for themselves.
          </p>
        </div>

        {/* Infinite Scrolling Testimonials */}
        <div 
          className="relative overflow-hidden py-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            ref={scrollRef}
            className="flex will-change-transform"
            style={{ transition: isPaused ? 'transform 0.3s ease-out' : 'none' }}
          >
            {infiniteTestimonials.map((t, i) => (
              <div
                key={i}
                className="shrink-0 px-4 md:px-6"
                style={{ width: '380px' }}
              >
                <div className="h-full flex justify-center">
                  <div className="w-full">
                    {/* Testimonial Card */}
                    <div className="relative p-8 md:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-purple-500/30 shadow-2xl h-full flex flex-col">
                      <Quote className="absolute top-6 left-6 w-10 md:w-12 h-10 md:h-12 text-purple-400/20" />
                      <Quote className="absolute bottom-6 right-6 w-10 md:w-12 h-10 md:h-12 text-purple-400/20 rotate-180" />

                      <div className="flex justify-center -mt-16 md:-mt-20 mb-6">
                        <div className="relative">
                          <div className="w-24 md:w-28 h-24 md:h-28 rounded-full overflow-hidden border-4 border-purple-500/50 shadow-xl">
                            <div className="bg-linear-to-br from-purple-400 to-pink-400 w-full h-full flex items-center justify-center text-white text-2xl md:text-3xl font-bold">
                              {t.name.split(' ').map(n => n[0]).join('')}
                            </div>
                          </div>
                          <div className="absolute -bottom-2 -right-2 w-9 md:w-10 h-9 md:h-10 bg-linear-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                            <Star className="w-5 md:w-6 h-5 md:h-6 text-white fill-current" />
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6 italic flex-1">
                        {t.content}
                      </p>

                      <div className="text-center mt-auto">
                        <h4 className="text-lg md:text-xl font-bold text-white">{t.name}</h4>
                        <p className="text-purple-300 text-sm">{t.role}</p>
                      </div>

                      <div className="flex justify-center gap-1 mt-4">
                        {[...Array(t.rating)].map((_, idx) => (
                          <Star key={idx} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
}