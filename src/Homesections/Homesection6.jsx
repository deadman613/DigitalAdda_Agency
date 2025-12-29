'use client';
import { useState, useRef, useEffect } from 'react';
import { Calendar, DollarSign, ChevronLeft, ChevronRight, BookOpen, Gem, Medal, Award } from 'lucide-react';

// Updated categories – only the names changed
const categories = [
  'StartUp Marketing',
  'Fashion Digital Marketing Agency',
  'Health Care Digital Marketing',
  'B2B Digital Marketing',
  'Education Digital Marketing',
  'Interior Designer Digital Marketing',
  'Real Estate Digital Marketing',
  'Tour & Travel Digital Marketing',
  'CA Digital Marketing',
  'Lawyer Digital Marketing',
  'EV Digital Marketing',
  'Finance Digital Marketing',
  'Construction Digital Marketing',
  'Manufacturing Digital Marketing',
  'Political Campaign Digital Marketing',
];

// Reports stay the same (you can replace the content later if you want different reports per industry)
const reportsByCategory = {
  'StartUp Marketing': [
    { title: 'Global Startup Ecosystem Report 2025 – Funding & Growth Trends', date: 'November 2025', price: '$2900' },
    { title: 'AI-Powered Startups Market Size, Share & Investment Analysis 2025-2035', date: 'November 2025', price: '$2900' },
    { title: 'SaaS Startup Valuation and Growth Strategies Report 2025', date: 'November 2025', price: '$2900' },
  ],
  'Fashion Digital Marketing Agency': [
    { title: 'Luxury Fashion E-Commerce Market Size & Trends 2025-2032', date: 'November 2025', price: '$2900' },
    { title: 'Sustainable Fashion & Apparel Industry Growth Report 2025', date: 'November 2025', price: '$2900' },
    { title: 'Direct-to-Consumer (D2C) Fashion Brands Market Analysis 2025', date: 'November 2025', price: '$2900' },
  ],
  'Health Care Digital Marketing': [
    { title: 'Digital Health & Telemedicine Market Size and Forecast 2025-2035', date: 'November 2025', price: '$2900' },
    { title: 'Healthcare Digital Advertising Spend & Trends Report 2025', date: 'November 2025', price: '$2900' },
    { title: 'Medical Devices & Wearables Market Growth Analysis 2025', date: 'November 2025', price: '$2900' },
  ],
  'B2B Digital Marketing': [
    { title: 'B2B Digital Marketing Trends and Budget Allocation Report 2025', date: 'November 2025', price: '$2900' },
    { title: 'Account-Based Marketing (ABM) Platforms Market Size 2025-2032', date: 'November 2025', price: '$2900' },
    { title: 'Industrial IoT and B2B Tech Buyer Behavior Report 2025', date: 'November 2025', price: '$2900' },
  ],
  'Education Digital Marketing': [
    { title: 'Online Education & EdTech Market Size and Forecast 2025-2035', date: 'November 2025', price: '$2900' },
    { title: 'K-12 and Higher Education Digital Enrollment Trends 2025', date: 'November 2025', price: '$2900' },
    { title: 'Corporate Training & eLearning Platforms Market Report 2025', date: 'November 2025', price: '$2900' },
  ],
  'Interior Designer Digital Marketing': [
    { title: 'Home Decor & Interior Design Market Trends 2025-2030', date: 'November 2025', price: '$2900' },
    { title: 'Smart Home & Furniture E-Commerce Growth Report 2025', date: 'November 2025', price: '$2900' },
    { title: 'Luxury Interior Products and Services Market Analysis 2025', date: 'November 2025', price: '$2900' },
  ],
  'Real Estate Digital Marketing': [
    { title: 'Global Real Estate Tech (PropTech) Market Size 2025-2035', date: 'November 2025', price: '$2900' },
    { title: 'Residential & Commercial Property Digital Marketing Trends 2025', date: 'November 2025', price: '$2900' },
    { title: 'Virtual Tours and Real Estate CRM Platforms Market Report 2025', date: 'November 2025', price: '$2900' },
  ],
  'Tour & Travel Digital Marketing': [
    { title: 'Online Travel Booking & OTA Market Size 2025-2032', date: 'November 2025', price: '$2900' },
    { title: 'Luxury & Adventure Tourism Digital Trends Report 2025', date: 'November 2025', price: '$2900' },
    { title: 'Post-Pandemic Travel Recovery and Marketing Strategies 2025', date: 'November 2025', price: '$2900' },
  ],
  'CA Digital Marketing': [
    { title: 'Chartered Accountancy & Financial Advisory Digital Trends 2025', date: 'November 2025', price: '$2900' },
    { title: 'Tax Consulting and Compliance Software Market Report 2025', date: 'November 2025', price: '$2900' },
    { title: 'Wealth Management Client Acquisition Strategies 2025', date: 'November 2025', price: '$2900' },
  ],
  'Lawyer Digital Marketing': [
    { title: 'Legal Services Digital Marketing and SEO Trends 2025', date: 'November 2025', price: '$2900' },
    { title: 'Law Firm CRM and Client Intake Platforms Market 2025', date: 'November 2025', price: '$2900' },
    { title: 'Personal Injury & Corporate Law Lead Generation Report 2025', date: 'November 2025', price: '$2900' },
  ],
  'EV Digital Marketing': [
    { title: 'Electric Vehicle Market Size, Share & Growth Forecast 2025-2035', date: 'November 2025', price: '$2900' },
    { title: 'EV Charging Infrastructure and Consumer Trends Report 2025', date: 'November 2025', price: '$2900' },
    { title: 'Electric Two-Wheelers and Commercial EVs Market Analysis 2025', date: 'November 2025', price: '$2900' },
  ],
  'Finance Digital Marketing': [
    { title: 'FinTech and Digital Banking Market Growth Report 2025-2035', date: 'November 2025', price: '$2900' },
    { title: 'Personal Finance Apps and WealthTech Trends 2025', date: 'November 2025', price: '$2900' },
    { title: 'Crypto & Blockchain Investment Marketing Strategies 2025', date: 'November 2025', price: '$2900' },
  ],
  'Construction Digital Marketing': [
    { title: 'Construction Tech (ConTech) Market Size and Forecast 2025-2035', date: 'November 2025', price: '$2900' },
    { title: 'Green Building and Sustainable Construction Trends 2025', date: 'November 2025', price: '$2900' },
    { title: 'Prefabricated & Modular Construction Market Report 2025', date: 'November 2025', price: '$2900' },
  ],
  'Manufacturing Digital Marketing': [
    { title: 'Industry 4.0 and Smart Manufacturing Market Report 2025-2035', date: 'November 2025', price: '$2900' },
    { title: 'Industrial IoT and Automation Adoption Trends 2025', date: 'November 2025', price: '$2900' },
    { title: 'Additive Manufacturing (3D Printing) in Industry Report 2025', date: 'November 2025', price: '$2900' },
  ],
  'Political Campaign Digital Marketing': [
    { title: 'Digital Political Advertising Spend and Trends 2025-2028', date: 'November 2025', price: '$2900' },
    { title: 'Voter Targeting and Micro-Targeting Platforms Market 2025', date: 'November 2025', price: '$2900' },
    { title: 'Social Media Influence on Elections and Campaigns Report 2025', date: 'November 2025', price: '$2900' },
  ],
};

const packageTiers = [
  {
    name: "Basic",
    image: "dapic/basic.png",
    badgeText: "text-gray-900",
    border: "border-gray-400/50",
    glow: "shadow-gray-400/30",
    button: "from-gray-500 to-gray-700 hover:from-gray-400 hover:to-gray-600"
  },
  {
    name: "Standard",
    image: "dapic/standard.png",
    badgeText: "text-amber-950",
    border: "border-yellow-500/60",
    glow: "shadow-yellow-500/40",
    button: "from-yellow-500 to-amber-700 hover:from-yellow-400 hover:to-amber-600"
  },
  {
    name: "Premium",
    image: "dapic/Premium.png",
    badgeText: "text-white",
    border: "border-cyan-400/70",
    glow: "shadow-cyan-400/50",
    button: "from-cyan-500 to-blue-700 hover:from-cyan-400 hover:to-blue-600"
  }
];

export default function PackagesPage() {
  const categoryScrollRef = useRef(null);
  const carouselScrollRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [carouselCanScrollLeft, setCarouselCanScrollLeft] = useState(false);
  const [carouselCanScrollRight, setCarouselCanScrollRight] = useState(true);

  const currentReports = reportsByCategory[categories[activeCategory]];

  const scrollCategories = (direction) => {
    if (categoryScrollRef.current) {
      const scrollAmount = 300;
      categoryScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollCarousel = (direction) => {
    if (carouselScrollRef.current) {
      const scrollAmount = 400;
      carouselScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const checkCategoryScroll = () => {
    if (categoryScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = categoryScrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const checkCarouselScroll = () => {
    if (carouselScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselScrollRef.current;
      setCarouselCanScrollLeft(scrollLeft > 0);
      setCarouselCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const catRef = categoryScrollRef.current;
    if (catRef) {
      catRef.addEventListener('scroll', checkCategoryScroll);
      checkCategoryScroll();
      return () => catRef.removeEventListener('scroll', checkCategoryScroll);
    }
  }, []);

  useEffect(() => {
    const carRef = carouselScrollRef.current;
    if (carRef) {
      carRef.addEventListener('scroll', checkCarouselScroll);
      checkCarouselScroll();
      carRef.scrollLeft = 0;
    }
  }, [activeCategory]);

  return (
    <section className="relative py-16 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-[#0f0020] via-[#1a0033] to-[#0f0f1e]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-800/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-800/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-3">
            Market Intelligence
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            RESEARCH PACKAGES
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full shadow-lg shadow-purple-500/80" />
        </div>

        {/* Category Navigation */}
        <div className="relative mb-12">
          {canScrollLeft && (
            <button onClick={() => scrollCategories('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
          )}
          <div ref={categoryScrollRef} className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide px-10 sm:px-12 scroll-smooth py-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`shrink-0 px-4 sm:px-6 py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 border whitespace-nowrap ${
                  activeCategory === index
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-transparent shadow-lg shadow-purple-500/50'
                    : 'bg-white/5 text-gray-300 border-white/10 hover:border-purple-500/50 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          {canScrollRight && (
            <button onClick={() => scrollCategories('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          )}
        </div>

        {/* Reports Carousel */}
        <div className="relative">
          {carouselCanScrollLeft && (
            <button onClick={() => scrollCarousel('left')} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </button>
          )}
          <div
            ref={carouselScrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide px-8 sm:px-12 py-4 scroll-smooth snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {currentReports.map((report, index) => {
              const tier = packageTiers[index]; // 0=Silver, 1=Gold, 2=Diamond
              return (
                <div
                  key={index}
                  className={`group shrink-0 w-[280px] sm:w-80 lg:w-96 relative bg-white/5 backdrop-blur-xl border ${tier.border} rounded-2xl overflow-hidden hover:border-opacity-100 transition-all duration-500 hover:shadow-2xl hover:${tier.glow} snap-center`}
                >
                  {/* Badge */}
                  <div className={`absolute top-4 right-4 z-10 px-4 py-2 rounded-full bg-gradient-to-r ${index === 0 ? 'from-gray-400 to-gray-600' : index === 1 ? 'from-yellow-400 to-amber-600' : 'from-cyan-400 to-blue-600'} shadow-lg flex items-center gap-2`}>
                    {index === 0 && <Medal className="w-5 h-5" />}
                    {index === 1 && <Award className="w-5 h-5" />}
                    {index === 2 && <Gem className="w-5 h-5" />}
                    <span className={`text-sm font-bold ${tier.badgeText}`}>{tier.name}</span>
                  </div>

                  {/* Package Image */}
                  <div className="relative h-72 sm:h-80 overflow-hidden bg-black/20">
                    <img 
                      src={tier.image} 
                      alt={`${tier.name} Package`}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Details */}
                  <div className="p-5 sm:p-6">
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 text-xs sm:text-sm text-gray-300">
                      {/* <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-purple-400" />
                        <span>{report.date}</span>
                      </div> */}
                      {/* <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-purple-400" />
                        <span className="font-bold text-white">{report.price}</span>
                      </div> */}
                    </div>
                    <h3 className="text-white font-bold text-base sm:text-lg mb-4 line-clamp-2 group-hover:text-purple-300 transition-colors">
                      {report.title}
                    </h3>
                    <button className={`w-full py-3 bg-gradient-to-r ${tier.button} text-white font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300`}>
                      View Details
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          {carouselCanScrollRight && (
            <button onClick={() => scrollCarousel('right')} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}