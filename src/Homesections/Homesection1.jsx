  "use client";

  import { useEffect, useState } from "react";
  import { Play, Pause, ChevronDown, Volume2, VolumeX } from "lucide-react";

  export default function HeroSection() {
    const logos = [
      { id: 1, name: "StartUp Marketing" },
      { id: 2, name: "Fashion Digital Marketing Agency" },
      { id: 3, name: "Health Care Digital Marketing" },
      { id: 4, name: "B2B Digital Marketing" },
      { id: 5, name: "Education Digital Marketing" },
      { id: 6, name: "Interior Designer Digital Marketing" },
      { id: 7, name: "Real Estate Digital Marketing" },
      { id: 8, name: "Tour & Travel Digital Marketing" },
      { id: 9, name: "CA Digital Marketing" },
      { id: 10, name: "Lawyer Digital Marketing" },
      { id: 11, name: "EV Digital Marketing" },
      { id: 12, name: "Finance Digital Marketing" },
      { id: 13, name: "Construction Digital Marketing" },
      { id: 14, name: "Manufacturing Digital Marketing" },
      { id: 15, name: "Political Campaign Digital Marketing" },
    ];

    const services = [
      { id: 1, name: "E-commerce" },
      { id: 2, name: "Paid Advertising" },
      { id: 3, name: "SEO" },
      { id: 4, name: "White Label" },
      { id: 5, name: "Content Marketing" },
      { id: 6, name: "SMO" },
      { id: 7, name: "CRO" },
    ];

    const videoOptions = {
      tech: [
        { id: 'work', label: 'work', url: 'video/1.mp4' },
        { id: 'tech2', label: 'Future Computing', url: 'https://www.w3schools.com/html/movie.mp4' },
        { id: 'tech3', label: 'Digital World', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }
      ],
      nature: [
        { id: 'client', label: 'client', url: 'video/client.mp4' },
        { id: 'nature2', label: 'Mountain Vista', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
        { id: 'nature3', label: 'Forest Path', url: 'https://www.w3schools.com/html/movie.mp4' }
      ],
      urban: [
        { id: 'urban1', label: 'City Lights', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
        { id: 'urban2', label: 'Street Life', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4' },
        { id: 'urban3', label: 'Urban Energy', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4' }
      ],
      art: [
        { id: 'art1', label: 'Abstract Motion', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4' },
        { id: 'art2', label: 'Creative Flow', url: 'https://www.w3schools.com/html/mov_bbb.mp4' },
        { id: 'art3', label: 'Color Symphony', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }
      ]
    };

    const [leftCategory, setLeftCategory] = useState('tech');
    const [rightCategory, setRightCategory] = useState('urban');
    const [leftVideo, setLeftVideo] = useState(videoOptions.tech[0]);
    const [rightVideo, setRightVideo] = useState(videoOptions.urban[0]);
    const [leftDropdownOpen, setLeftDropdownOpen] = useState(false);
    const [rightDropdownOpen, setRightDropdownOpen] = useState(false);

    const [leftPlaying, setLeftPlaying] = useState(true);
    const [rightPlaying, setRightPlaying] = useState(true);
    const [leftMuted, setLeftMuted] = useState(true);
    const [rightMuted, setRightMuted] = useState(true);

    const categories = [
      { id: 'tech', label: 'Work' },
      { id: 'nature', label: 'Nature' },
      { id: 'urban', label: 'Urban' },
      { id: 'art', label: 'Art' }
    ];

    const handleLeftCategoryChange = (categoryId) => {
      setLeftCategory(categoryId);
      setLeftVideo(videoOptions[categoryId][0]);
      setLeftDropdownOpen(false);
    };

    const handleRightCategoryChange = (categoryId) => {
      setRightCategory(categoryId);
      setRightVideo(videoOptions[categoryId][0]);
      setRightDropdownOpen(false);
    };

    // Handle video controls
    const toggleLeftPlay = () => setLeftPlaying(!leftPlaying);
    const toggleRightPlay = () => setRightPlaying(!rightPlaying);
    const toggleLeftMute = () => setLeftMuted(!leftMuted);
    const toggleRightMute = () => setRightMuted(!rightMuted);
      // Video style to prevent cutting
      const videoStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover', // or 'cover' if you want to fill the area
        background: '#000',
        display: 'block',
        maxHeight: '120vh',
        maxWidth: '100vw',
      };

    return (
      <>
        {/* ===== VIDEO BACKGROUND SECTION ===== */}
        <section className="relative w-full bg-gradient-to-br from-[#0f0020] via-[#1a0033] to-[#0f0f1e] pb-0 pt-20 md:pt-12 lg:pt-16">
          <div className="max-w-screen-2xl mx-auto px-4">
            {/* MOBILE: Stack videos vertically */}
            <div className="grid grid-cols-1 pt-10 md:grid-cols-2 gap-6">

              {/* LEFT VIDEO PANEL */}
              <div className="relative group rounded-xl overflow-hidden h-[220px] sm:h-[300px] md:aspect-video md:h-auto shadow-2xl border border-white/10">
                {/* Video */}
                <video
                  key={leftVideo.id}
                  autoPlay={leftPlaying}
                  loop
                  muted={leftMuted}
                  playsInline
                    style={videoStyle}
                >
                  <source src={leftVideo.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>

                {/* Hover Controls */}
                <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={toggleLeftPlay}
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition"
                    >
                      {leftPlaying ? <Pause size={20} /> : <Play size={20} />}
                    </button>
                    <button
                      onClick={toggleLeftMute}
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition"
                    >
                      {leftMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>
                  </div>

                  <div className="text-center text-white">
                    <h3 className="text-2xl sm:text-4xl font-bold uppercase tracking-wide mb-2">
                      {categories.find(c => c.id === leftCategory)?.label}
                    </h3>
                    <p className="text-sm sm:text-lg">{leftVideo.label}</p>
                  </div>
                </div>

                {/* Dropdown Header (centered) */}
                <div className="absolute top-2 sm:top-4 md:top-6 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-3 bg-black/60 backdrop-blur-md rounded-full px-2 sm:px-4 py-1 sm:py-2 shadow-lg max-w-[90vw]">
                  <h4 className="text-xs sm:text-lg md:text-2xl font-extrabold text-white truncate max-w-[120px] sm:max-w-none">Your Business</h4>
                  <div className="relative">
                    <button
                      onClick={() => setLeftDropdownOpen(!leftDropdownOpen)}
                      className="flex items-center gap-2 px-3 py-1 bg-purple-600/95 hover:bg-purple-700 rounded-md text-white text-sm sm:text-base"
                    >
                      <span className="hidden sm:inline text-sm sm:text-base">{categories.find(c => c.id === leftCategory)?.label}</span>
                      <ChevronDown className={`w-3 h-3 transition-transform ${leftDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {leftDropdownOpen && (
                      <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-[90vw] max-w-xs sm:max-w-sm md:w-56 bg-black/90 backdrop-blur-md rounded-xl shadow-xl overflow-y-auto max-h-60 border border-white/20 z-30">
                        {categories.map((category) => (
                          <div key={category.id}>
                            <button
                              onClick={() => handleLeftCategoryChange(category.id)}
                              className={`w-full text-left px-3 py-2 text-white hover:bg-white/10 transition-colors border-b border-white/10 ${
                                leftCategory === category.id ? 'bg-white/20 font-semibold' : ''
                              }`}
                            >
                              {category.label}
                            </button>

                            {leftCategory === category.id && (
                              <div className="bg-black/50">
                                {videoOptions[category.id].map((video) => (
                                  <button
                                    key={video.id}
                                    onClick={() => {
                                      setLeftVideo(video);
                                      setLeftDropdownOpen(false);
                                    }}
                                    className={`w-full text-left px-4 py-1 text-xs hover:bg-white/10 transition-colors ${
                                      leftVideo.id === video.id ? 'text-cyan-400 font-medium' : 'text-white/80'
                                    }`}
                                  >
                                    {video.label}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* RIGHT VIDEO PANEL */}
              <div className="relative group rounded-xl overflow-hidden h-[220px] sm:h-[300px] md:aspect-video md:h-auto shadow-2xl border border-white/10">
                {/* Video */}
                <video
                  key={rightVideo.id}
                  autoPlay={rightPlaying}
                  loop
                  muted={rightMuted}
                  playsInline
                    style={videoStyle}
                >
                  <source src={rightVideo.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>

                {/* Hover Controls */}
                <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={toggleRightPlay}
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition"
                    >
                      {rightPlaying ? <Pause size={20} /> : <Play size={20} />}
                    </button>
                    <button
                      onClick={toggleRightMute}
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition"
                    >
                      {rightMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>
                  </div>

                  <div className="text-center text-white">
                    <h3 className="text-2xl sm:text-2xl font-bold uppercase tracking-wide mb-2">
                      {categories.find(c => c.id === rightCategory)?.label}
                    </h3>
                    <p className="text-sm sm:text-lg">{rightVideo.label}</p>
                  </div>
                </div>

                {/* Dropdown Header (centered) */}
                <div className="absolute top-2 sm:top-4 md:top-6 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-3 bg-black/60 backdrop-blur-md rounded-full px-2 sm:px-4 py-1 sm:py-2 shadow-lg max-w-[90vw]">
                  <h4 className="text-xs sm:text-lg md:text-2xl font-extrabold text-white truncate max-w-[120px] sm:max-w-none">Our Growth Vision</h4>
                  <div className="relative">
                    <button
                      onClick={() => setRightDropdownOpen(!rightDropdownOpen)}
                      className="flex items-center gap-2 px-3 py-1 bg-purple-600/95 hover:bg-purple-700 rounded-md text-white text-sm sm:text-base"
                    >
                      <span className="hidden sm:inline text-sm sm:text-base">{categories.find(c => c.id === rightCategory)?.label}</span>
                      <ChevronDown className={`w-3 h-3 transition-transform ${rightDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {rightDropdownOpen && (
                      <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-[90vw] max-w-xs sm:max-w-sm md:w-56 bg-black/90 backdrop-blur-md rounded-xl shadow-xl overflow-y-auto max-h-60 border border-white/20 z-30">
                        {categories.map((category) => (
                          <div key={category.id}>
                            <button
                              onClick={() => handleRightCategoryChange(category.id)}
                              className={`w-full text-left px-3 py-2 text-white hover:bg-white/10 transition-colors border-b border-white/10 ${
                                rightCategory === category.id ? 'bg-white/20 font-semibold' : ''
                              }`}
                            >
                              {category.label}</button>

                            {rightCategory === category.id && (
                              <div className="bg-black/50">
                                {videoOptions[category.id].map((video) => (
                                  <button
                                    key={video.id}
                                    onClick={() => {
                                      setRightVideo(video);
                                      setRightDropdownOpen(false);
                                    }}
                                    className={`w-full text-left px-4 py-1 text-xs hover:bg-white/10 transition-colors ${
                                      rightVideo.id === video.id ? 'text-cyan-400 font-medium' : 'text-white/80'
                                    }`}
                                  >
                                    {video.label}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

       

        {/* ===== HEADING + CONTENT SECTION ===== */}
        <section className="relative bg-gradient-to-br from-[#0f0020] via-[#1a0033] to-[#0f0f1e] pt-12 pb-16 md:py-24">
          <div className="px-4 md:px-8 max-w-5xl mx-auto text-center">
          <h4 className="text-white text-[2.5rem] md:text-[4.5rem] "> <i>“Results come from execution.”</i></h4>
            <h1 className="text-3xl sm:text-5xl md:text-7xl pt-20 font-extrabold text-white leading-tight">
              AI & VR Integrated
              <br />
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Digital Marketing Agency
              </span>
            <span className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">We Build Brands</span>  
            </h1>

            <p className="text-sm sm:text-base md:text-xl text-gray-300 max-w-3xl mx-auto mt-6">
              Full-stack digital growth agency helping businesses dominate digital platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="group px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full font-bold text-white shadow-lg hover:scale-105 transition transform">
                Free Consultant <Play className="inline ml-2 w-4 h-4" />
              </button>
              <button className="px-6 py-3 sm:px-8 sm:py-4 border border-purple-400 rounded-full text-white hover:bg-white/10 transition">
                View Portfolio →
              </button>
            </div>
          </div>
        </section>

        {/* DUAL MARQUEE CAROUSELS */}
        <section className="relative bg-gradient-to-br from-[#0f0020] via-[#1a0033] to-[#0f0f1e] -mt-8 md:-mt-12">
          <div className="px-4 md:px-8 py-8 md:py-12">
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-white via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-8">
              Our Services
            </h2>

            {/* TOP ROW - Services - Right to Left */}
            <div className="relative overflow-hidden rounded-xl p-4 md:p-6 mb-8 bg-black/20 backdrop-blur-sm">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0f0020] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0f0020] to-transparent z-10 pointer-events-none"></div>

              <div className="flex animate-marquee whitespace-nowrap">
                {[...services, ...services].map((service, index) => (
                  <div
                    key={`service-${service.id}-${index}`}
                    className="bg-white/5 backdrop-blur-sm border border-purple-500/20 mx-2 md:mx-4 px-4 md:px-6 py-2 md:py-4 rounded-lg md:rounded-xl shadow-lg hover:bg-white/10 transition-all duration-300 flex-shrink-0"
                  >
                    <span className="text-white text-xs md:text-xl font-bold">
                      {service.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* BOTTOM ROW - Logos/Clients - Left to Right */}
            <div className="relative overflow-hidden rounded-xl p-4 md:p-6 bg-black/20 backdrop-blur-sm">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0f0020] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0f0020] to-transparent z-10 pointer-events-none"></div>

              <div className="flex animate-marquee-reverse whitespace-nowrap">
                {[...logos, ...logos].map((logo, index) => (
                  <div
                    key={`logo-${logo.id}-${index}`}
                    className="bg-white/5 backdrop-blur-sm border border-cyan-500/20 mx-2 md:mx-4 px-4 md:px-6 py-2 md:py-4 rounded-lg md:rounded-xl shadow-lg hover:bg-white/10 transition-all duration-300 flex-shrink-0"
                  >
                    <span className="text-white text-xs md:text-xl font-bold">
                      {logo.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }