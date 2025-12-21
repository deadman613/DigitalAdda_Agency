'use client';

import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#0b0b1a] border-t border-cyan-500/10 overflow-hidden">
      {/* Subtle neon glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-400/70 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Company Info + REAL Google Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative items-start ">
              {/* <h2 className="text-4xl font-bold bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Digital Adda
              </h2> */}
              <img src="/final logo.png" alt="" 
              className=' h-auto md:h-[10vw] w-full object-cover md:object-contain scale-100 md:scale-200 '/>
              <div className="absolute -inset-1 bg-cyan-500/20 blur-2xl -z-10 animate-pulse" />
            </div>

            <div className="space-y-5 text-gray-400 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
                <p className="leading-relaxed">
                 2nd Floor, Office No. 201, Spacetime Management Pvt Ltd Design House, behind Savitri Cinema Complex, Greater Kailash II, New Delhi-110048
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+91 9355121681</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>Info@digitaladdagagency.com</span>
              </div>
            </div>

            {/* Your EXACT Google Maps Embed - Live & Interactive */}
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-500/10 group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56079.044798360745!2d77.20051465834564!3d28.541514099999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce38a7f54bc17%3A0xdde852ca05ce4e4c!2sDigital%20Adda%20Agency!5e0!3m2!1sen!2sin!4v1764515568346!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700 group-hover:brightness-110"
              />
              
              {/* Overlay CTA */}
              <a
                href="https://maps.google.com/maps?q=Digital+Adda+Agency+Gurugram"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 bg-linear-to-r from-purple-600 to-indigo-600 backdrop-blur-lg border border-cyan-400/30 px-5 py-2.5 rounded-full text-cyan-300 text-sm font-semibold hover:bg-cyan-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg"
              >
                <MapPin className="w-4 h-4" />
                Open in Maps
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-white mb-6">Services</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              {['SEO & AI SEO', 'Social Media Marketing', 'PPC Advertising', 'Content Strategy', 'Web Development', 'Brand Identity'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-cyan-400 transition block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-white mb-6">Company</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              {['About Us', 'Careers', 'Case Studies', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-cyan-400 transition block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold text-white mb-6">Our Locations</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              {[ 'Delhi'].map((city) => (
                <li key={city} className="hover:text-cyan-400 transition cursor-pointer">
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p className="text-gray-500">
            © 2025 Digital Adda • Made with <span className="text-cyan-400">♥</span> in India
          </p>

          <div className="flex gap-5">
            {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-11 h-11 rounded-full bg-gray-800/40 border border-gray-700 flex items-center justify-center hover:border-cyan-500 hover:bg-cyan-500/10 transition-all group"
              >
                <Icon className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom neon line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#200842] to-[#422369]" />
    </footer>
  );
}