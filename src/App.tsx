/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Instagram, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Mail, 
  Phone, 
  ExternalLink, 
  Award, 
  Code, 
  Palette, 
  TrendingUp, 
  Users, 
  Zap, 
  Menu, 
  X,
  ChevronRight,
  GraduationCap,
  Briefcase,
  Monitor
} from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const coreSkills = [
    { name: "Social Media Strategy", icon: <TrendingUp className="w-6 h-6" />, desc: "Developing platform-specific growth strategies." },
    { name: "Content Creation", icon: <Palette className="w-6 h-6" />, desc: "Visual storytelling through high-impact media." },
    { name: "Brand Management", icon: <Award className="w-6 h-6" />, desc: "Ensuring consistent voice and aesthetic identity." },
    { name: "Meta Ads", icon: <Monitor className="w-6 h-6" />, desc: "Performance marketing and paid campaign optimization." },
    { name: "Community Management", icon: <Users className="w-6 h-6" />, desc: "Fostering engagement and building audience trust." },
    { name: "Design Analytics", icon: <Code className="w-6 h-6" />, desc: "Analyzing data to refine visual communication." },
  ];

  const tools = [
    { name: "Canva", color: "bg-blue-500" },
    { name: "Figma", color: "bg-purple-500" },
    { name: "Meta Ads Manager", color: "bg-blue-700" },
    { name: "Google Analytics", color: "bg-yellow-600" },
    { name: "CapCut", color: "bg-gray-800" },
    { name: "Notion", color: "bg-white text-black" },
  ];

  const experiences = [
    {
      title: "24-Hour Designathon Participant",
      organization: "Creative Sprint",
      date: "2024",
      desc: "Collaborated in a high-pressure environment to develop innovative design solutions and marketing strategies within a strict timeframe. Focused on rapid prototyping and user-centric branding.",
      type: "Experience"
    },
    {
      title: "Media Coordinator",
      organization: "Institutional Events",
      date: "2023 - Present",
      desc: "Spearheaded media outreach and content coordination for major institutional events. Managed cross-functional teams to ensure consistent brand voice across digital platforms.",
      type: "Role"
    }
  ];

  const certifications = [
    { name: "Fundamentals of Digital Marketing", issuer: "Google Digital Garage" },
    { name: "Social Media Marketing", issuer: "HubSpot Academy" },
    { name: "Meta Certified Associate", issuer: "Meta" },
    { name: "Google Analytics Qualification", issuer: "Google" },
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen relative selection:bg-brand-lavender/30">
      {/* Background Decor */}
      <div className="mesh-bg" />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-4 bg-brand-deep/70 backdrop-blur-md border-b border-white/10" : "py-6 bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.a 
            href="#" 
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-purple to-pink-400"></div>
            <span className="text-xl font-extrabold tracking-tighter uppercase text-white">S. Sharma</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
            <motion.a 
              href="#contact" 
              className="px-6 py-2 bg-brand-purple text-white rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-brand-purple/80 transition-all shadow-lg shadow-brand-purple/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>
          </div>


          {/* Mobile Toggle */}
          <button className="md:hidden text-brand-deep" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="text-lg font-medium text-slate-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href="#contact" 
                  className="w-full py-4 bg-brand-purple text-white rounded-xl text-center font-semibold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="glass-panel inline-flex items-center space-x-3 px-4 py-2 border border-white/10 text-brand-lavender rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              <Zap className="w-3 h-3" />
              <span>Social Media Marketing Executive</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-[0.95] tracking-tighter mb-8 italic drop-shadow-2xl">
              Suraksha <br />
              <span className="text-white">Sharma</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 font-medium mb-12 max-w-xl leading-relaxed">
              Driven by a passion for digital storytelling. I specialize in crafting high-impact social media strategies that bridge the gap between creative vision and data-backed performance.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a 
                href="#contact" 
                className="px-10 py-5 bg-brand-purple text-white rounded-2xl font-extrabold text-sm uppercase tracking-widest shadow-xl shadow-brand-purple/40 flex items-center group transition-all hover:bg-brand-purple/80"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a 
                href="#experience" 
                className="px-10 py-5 glass-panel text-white border border-white/10 rounded-2xl font-extrabold text-sm uppercase tracking-widest hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Resume
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 relative lg:block hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative z-10 w-full aspect-square max-w-sm ml-auto glass-panel p-4 rotate-3 group overflow-visible">
              <div className="w-full h-full rounded-[1.5rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl relative">
                <img 
                  src="https://picsum.photos/seed/marketing/800/800" 
                  alt="Suraksha Sharma" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-purple/20 mix-blend-overlay" />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-panel p-4 animate-bounce">
                <Users className="w-8 h-8 text-brand-lavender" />
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* About & Skills Area */}
      <section id="about" className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-stretch">
          {/* About Panel */}
          <motion.div 
            {...fadeIn} 
            className="lg:col-span-12 glass-panel p-10 flex flex-col justify-center mb-4"
          >
            <h2 className="text-brand-lavender text-xs font-bold uppercase tracking-[0.4em] mb-6">About Me</h2>
            <p className="text-2xl md:text-3xl text-white font-medium leading-tight mb-8">
              A results-driven Digital Marketing graduate with a passion for storytelling and brand building. Specialized in crafting high-impact social media strategies.
            </p>
            <p className="text-lg text-white/50 leading-relaxed max-w-3xl font-light">
              Leveraging design tools like Canva and Figma to bridge the gap between creative vision and data-backed performance.
            </p>
          </motion.div>

          {/* Skills Area */}
          <div id="skills" className="lg:col-span-12 grid md:grid-cols-2 gap-8">
            <motion.div {...fadeIn} className="glass-panel p-8">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-lavender mb-8">Core Social Media Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {coreSkills.map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3">
                    <div className="w-8 h-8 glass-panel flex items-center justify-center text-brand-lavender">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-white/80">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="glass-panel p-8">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-lavender mb-8">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span key={tool.name} className="skill-tag">{tool.name}</span>
                ))}
                <span className="skill-tag">HubSpot</span>
                <span className="skill-tag">Sprout Social</span>
                <span className="skill-tag">Trello</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeIn} className="mb-16">
            <h2 className="text-brand-lavender text-xs font-bold uppercase tracking-[0.4em] mb-4">Timeline</h2>
            <h1 className="text-5xl font-extrabold text-white tracking-tighter">Professional Experience</h1>
          </motion.div>

          <div className="glass-panel p-10 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group flex gap-8 items-start"
              >
                <div className="hidden sm:block">
                  <div className="w-px h-full bg-gradient-to-b from-brand-purple to-transparent relative min-h-[100px]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-purple shadow-[0_0_15px_rgba(124,58,237,0.8)]" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-lavender">{exp.date}</span>
                    <span className="text-[10px] px-2 py-0.5 glass-panel text-white/40 uppercase">{exp.type}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-brand-lavender text-sm font-bold mb-4 uppercase tracking-tighter">{exp.organization}</p>
                  <p className="text-white/60 leading-relaxed max-w-3xl">
                    {exp.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certs */}
      <section id="education" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          {/* Education */}
          <motion.div {...fadeIn}>
            <div className="flex items-center space-x-4 mb-12">
              <div className="w-12 h-12 glass-panel flex items-center justify-center">
                <GraduationCap className="text-brand-lavender" />
              </div>
              <h2 className="text-3xl font-extrabold text-white">Education</h2>
            </div>
            <div className="glass-panel p-8">
              <div className="relative pl-8 border-l border-white/20">
                <div className="mb-0 relative">
                  <div className="absolute -left-[41px] top-0 w-5 h-5 bg-brand-lavender rounded-full shadow-[0_0_15px_rgba(216,180,254,0.5)]" />
                  <h3 className="text-xl font-bold mb-1">BBA in Digital Marketing</h3>
                  <p className="text-brand-lavender/80 font-medium mb-4">Inspiria Knowledge Campus</p>
                  <p className="text-white/50 leading-relaxed font-light text-sm">
                    Specialized in modern marketing frameworks, consumer behavior, and digital ecosystem optimization. Mastered the integration between creative content and analytical performance.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
            <div className="flex items-center space-x-4 mb-12">
              <div className="w-12 h-12 glass-panel flex items-center justify-center">
                <Award className="text-brand-lavender" />
              </div>
              <h2 className="text-3xl font-extrabold text-white">Certifications</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <motion.div 
                  key={cert.name}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                  className="glass-panel p-6 flex flex-col justify-between transition-colors"
                >
                  <p className="text-base font-bold leading-tight mb-4 text-white">{cert.name}</p>
                  <div className="text-brand-lavender text-[9px] font-bold uppercase tracking-[0.2em]">{cert.issuer}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div {...fadeIn}>
            <div className="glass-panel p-16 max-w-4xl mx-auto border border-white/10">
              <h2 className="text-4xl md:text-7xl font-extrabold text-white mb-8 tracking-tighter leading-none italic">Let's work <br /> together.</h2>
              <p className="text-xl text-white/50 mb-12 max-w-xl mx-auto font-medium">
                Open for interesting projects, collaborations, and full-time opportunities.
              </p>
              
              <div className="flex flex-col items-center space-y-6 mb-16">
                <motion.a 
                  href="mailto:surakshas817@gmail.com" 
                  className="flex items-center space-x-4 text-2xl md:text-4xl font-black text-white hover:text-brand-lavender transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  <Mail className="w-10 h-10 text-brand-lavender" />
                  <span>surakshas817@gmail.com</span>
                </motion.a>
                <div className="flex items-center space-x-3 text-white/40 font-bold text-xs uppercase tracking-widest">
                  <Phone className="w-4 h-4" />
                  <span>+91 900 123 4567</span>
                </div>
              </div>

              <div className="flex justify-center flex-wrap gap-4">
                {[
                  { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
                  { icon: <Instagram className="w-5 h-5" />, label: "Instagram" },
                  { icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
                  { icon: <Facebook className="w-5 h-5" />, label: "Facebook" },
                ].map((social) => (
                  <motion.a 
                    key={social.label}
                    href="#"
                    className="w-12 h-12 glass-panel flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
                    whileHover={{ y: -5 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-white/30 text-[10px] uppercase tracking-[0.2em] font-bold gap-4">
          <p>© 2024 Suraksha Sharma</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

