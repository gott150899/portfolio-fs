import { motion } from 'framer-motion';
import { ArrowRight, Code2, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center pt-24 pb-12 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-12 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-12 w-64 h-64 bg-violet-600/20 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
          {/* <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-800 text-xs text-cyan-400 font-medium mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            Available for Freelance Work
          </motion.div> */}

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
          >
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">Digital Experiences</span>
            <br /> That Matter.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl mb-10 leading-relaxed"
          >
            I'm a FullStack Developer passionate about crafting accessible, pixel-perfect, and performant web applications.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
                href="#projects" 
                className="px-8 py-3.5 rounded-full bg-white text-slate-950 font-semibold hover:bg-slate-200 transition-all flex items-center gap-2 group"
            >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
                href="#contact" 
                className="px-8 py-3.5 rounded-full bg-slate-900 border border-slate-800 text-white font-medium hover:bg-slate-800 transition-all flex items-center gap-2"
            >
                <Terminal size={18} className="text-slate-400" />
                Contact Me
            </a>
          </motion.div>
      </div>

        {/* Floating Icons Animation */}
        <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 left-[10%] opacity-20 hidden lg:block"
        >
            <Code2 size={48} />
        </motion.div>
    </section>
  );
};

export default Hero;
