import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Menu, X, ChevronRight, Calendar, MapPin, Trophy, ArrowUpRight, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#FF4500] rounded-sm flex items-center justify-center font-bold text-white tracking-tighter">
            RB
          </div>
          <span className="text-white font-bold tracking-widest uppercase text-xl">
            Media House
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Live Events', 'Athletes', 'Gear'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-white/80 hover:text-[#FF4500] font-medium tracking-wide uppercase text-sm transition-colors"
            >
              {item}
            </a>
          ))}
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white hover:text-[#FF4500] transition-colors"
          >
            <Search size={20} />
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          whileTap={{ scale: 0.85 }}
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-[#0A0A0A] border-t border-white/10 py-4 px-6 flex flex-col gap-4 md:hidden"
        >
          {['Live Events', 'Athletes', 'Gear'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-white font-medium tracking-wide uppercase text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="flex items-center gap-2 text-white/50 pt-4 border-t border-white/10">
            <Search size={20} />
            <span>Search</span>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          src="/Woman_longboarding_mountain.mp4"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8"
        >
          The Mountain <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
            Is Calling
          </span>
        </motion.h1>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.4, scale: { duration: 0.2 } }}
          className="group flex items-center gap-3 bg-[#FF4500] text-white px-8 py-4 font-bold uppercase tracking-widest text-sm"
        >
          Explore The Line
          <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs uppercase tracking-widest font-medium">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-[#FF4500]"
          />
        </div>
      </motion.div>
    </section>
  );
};

const ContentSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-[#0A0A0A] relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FF4500]/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-[#FF4500]"></div>
            <span className="text-[#FF4500] font-bold uppercase tracking-widest text-sm">
              The Experience
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight mb-6">
            Asphalt At <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
              60MPH
            </span>
          </h2>
          <p className="text-xl text-white/70 font-light leading-relaxed mb-8 max-w-lg">
            Experience the raw intensity of downhill longboarding through the Sierra Nevada range.
          </p>
          <div className="bg-white/5 border border-white/10 p-6 backdrop-blur-sm mb-10">
            <h3 className="text-white font-bold uppercase tracking-wide mb-2">The Athlete</h3>
            <p className="text-white/60">
              Featuring elite rider Sarah 'The Streak' Miller as she tackles the 12-degree grade.
            </p>
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white font-bold uppercase tracking-widest border-b-2 border-[#FF4500] pb-1 hover:text-[#FF4500] transition-colors inline-flex items-center gap-2 group"
          >
            [ Get The Gear ] <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] lg:aspect-square bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden group cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0A0A] to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1565187399583-05041530325e?q=80&w=2000&auto=format&fit=crop" 
            alt="Longboarding close up" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-20 text-center"
          >
            <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md mx-auto mb-4 group-hover:border-[#FF4500] group-hover:bg-[#FF4500]/10 transition-colors">
              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1 group-hover:border-l-[#FF4500] transition-colors" />
            </div>
            <span className="text-white font-medium tracking-widest uppercase text-sm">Watch Raw Run</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const TechnicalSpecs = () => {
  const specs = [
    {
      title: "The Deck",
      value: "Carbon Fiber",
      desc: "Aerospace-grade composite construction for zero flex at terminal velocities.",
      icon: "01"
    },
    {
      title: "The Wheels",
      value: "75mm 78A",
      desc: "High-rebound urethane formula designed for maximum grip through hairpins.",
      icon: "02"
    },
    {
      title: "The Rider",
      value: "Safety First",
      desc: "Full aerodynamic leathers and CE-certified impact protection.",
      icon: "03"
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#0A0A0A] border-t border-white/5" id="gear">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4"
          >
            Technical Specs
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-[#FF4500] mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white/[0.02] border border-white/10 p-8 hover:bg-white/[0.04] hover:border-white/20 transition-colors group relative overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF4500]/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-[#FF4500]/20 transition-colors" />
              
              <div className="text-[#FF4500] font-mono text-sm font-bold mb-8 opacity-50">
                // {spec.icon}
              </div>
              <h3 className="text-white/60 uppercase tracking-widest text-xs font-bold mb-2">
                {spec.title}
              </h3>
              <div className="text-2xl font-black text-white uppercase tracking-tight mb-4">
                {spec.value}
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                {spec.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedAthletes = () => {
  const athletes = [
    {
      name: "Sarah Miller",
      alias: "The Streak",
      discipline: "Downhill Racing",
      topSpeed: "72 MPH",
      image: "https://images.unsplash.com/photo-1520045892532-341a94b8e21a?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Marcus Chen",
      alias: "Zenith",
      discipline: "Freeride & Tech Slide",
      topSpeed: "65 MPH",
      image: "https://images.unsplash.com/photo-1541577038167-9caece1ee4de?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Outlaw Pack",
      alias: "The Collective",
      discipline: "Pack Riding",
      topSpeed: "68 MPH",
      image: "https://images.unsplash.com/photo-1551698616-0498774776b9?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#0A0A0A] border-t border-white/5 relative" id="athletes">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <Trophy size={16} className="text-[#FF4500]" />
              <span className="text-[#FF4500] font-bold uppercase tracking-widest text-sm">The Roster</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter"
            >
              Elite Athletes
            </motion.h2>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white/70 hover:text-white uppercase tracking-widest text-sm font-bold flex items-center gap-2 group transition-colors"
          >
            View Full Roster <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {athletes.map((athlete, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
            >
              {/* Image base */}
              <img 
                src={athlete.image} 
                alt={athlete.name} 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
              
              {/* Content overlaid */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="block text-[#FF4500] font-bold tracking-widest uppercase text-xs mb-2">
                    '{athlete.alias}'
                  </span>
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-1">
                    {athlete.name}
                  </h3>
                  
                  {/* Stats panel that fades in on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mt-4 border-t border-white/20 pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/50 text-xs uppercase tracking-widest">Discipline</span>
                      <span className="text-white font-medium text-sm">{athlete.discipline}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/50 text-xs uppercase tracking-widest">Top Speed</span>
                      <span className="text-white font-medium text-sm">{athlete.topSpeed}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LiveEvents = () => {
  const [expandedId, setExpandedId] = useState<number | null>(0);

  const events = [
    {
      title: "Sierra Nevada Descent",
      date: "MAY 15-18",
      location: "Yosemite Valley, CA",
      desc: "A grueling 5-mile sprint dropping 3000 feet of elevation. The premier opening event of the season.",
      status: "Registration Open"
    },
    {
      title: "Alpine Hairpin Classic",
      date: "JUN 02-05",
      location: "Swiss Alps",
      desc: "Navigate 14 treacherous hairpins at terminal velocities in this technical European showcase.",
      status: "Upcoming"
    },
    {
      title: "Urban Asphalt Assault",
      date: "JUL 12-14",
      location: "San Francisco, CA",
      desc: "Closed-course city racing through some of the steepest urban environments in the world.",
      status: "Upcoming"
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#050505] border-t border-white/5 relative" id="live-events">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            Live Events Season
          </h2>
          <div className="w-24 h-1 bg-[#FF4500] mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {events.map((event, idx) => {
            const isExpanded = expandedId === idx;
            
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`border border-white/10 bg-[#0A0A0A] overflow-hidden transition-colors ${isExpanded ? 'border-white/20' : 'hover:border-white/20'}`}
              >
                {/* Header Row (Clickable) */}
                <button 
                  onClick={() => setExpandedId(isExpanded ? null : idx)}
                  className="w-full text-left p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group focus:outline-none"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                    <div className="flex items-center gap-3 w-40">
                      <Calendar size={18} className={isExpanded ? 'text-[#FF4500]' : 'text-white/40'} />
                      <span className="text-white/70 font-bold uppercase text-sm tracking-widest">{event.date}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter group-hover:text-[#FF4500] transition-colors">
                      {event.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <span className={`text-xs uppercase tracking-widest font-bold px-3 py-1 border ${event.status === 'Registration Open' ? 'border-[#FF4500] text-[#FF4500]' : 'border-white/20 text-white/40'}`}>
                      {event.status}
                    </span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 90 : 0 }}
                      className="text-white/40 group-hover:text-white"
                    >
                      <ChevronRight size={24} />
                    </motion.div>
                  </div>
                </button>

                {/* Expandable Content Area */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-white/5">
                        <div className="flex items-start gap-2 mb-4 text-[#FF4500]">
                          <MapPin size={16} className="mt-1" />
                          <span className="font-medium text-sm tracking-widest uppercase">{event.location}</span>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed max-w-2xl mb-6">
                          {event.desc}
                        </p>
                        <motion.button 
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-white text-black hover:bg-gray-200 px-6 py-3 font-bold uppercase tracking-widest text-sm transition-colors"
                        >
                          View Details
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#050505] py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#FF4500] rounded-sm flex items-center justify-center font-bold text-white text-xs tracking-tighter">
            RB
          </div>
          <span className="text-white/50 font-bold tracking-widest uppercase text-sm">
            Media House
          </span>
        </div>
        <div className="flex gap-6 text-white/40 text-xs uppercase tracking-widest">
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] font-sans selection:bg-[#FF4500] selection:text-white">
      <Navbar />
      <Hero />
      <ContentSection />
      <FeaturedAthletes />
      <TechnicalSpecs />
      <LiveEvents />
      <Footer />
    </div>
  );
}

