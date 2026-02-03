import { motion } from 'framer-motion';
import { Award, Coffee, User } from 'lucide-react';
import aboutImage from '/about-cartoon.png';

const stats = [
    { icon: <Coffee size={24} />, label: "Coffee Consumed", value: "1000+" },
    { icon: <Award size={24} />, label: "Years Experience", value: "3+" },
    { icon: <User size={24} />, label: "Clients Served", value: "10+" },
    // { icon: <BookOpen size={24} />, label: "Books Read", value: "100+" },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-violet-900/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
            <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    <span className="text-cyan-400">About Me</span>
                </h2>
                
                <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
                    <p>
                        I'm a passionate developer who bridges the gap between design and technology. With a keen eye for detail and a love for clean code, I build digital products that are not only functional but also delightful to use.
                    </p>
                    <p>
                        My journey started with a simple curiosity about how the web works, which quickly turned into a career obsession. When I'm not coding, you can find me exploring new tech trends, contributing to open source, or brewing the perfect cup of coffee.
                    </p>
                </div>

                <div className="pt-4">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="flex flex-col gap-2">
                                <div className="text-violet-400 mb-1">{stat.icon}</div>
                                <div className="text-2xl font-bold text-white">{stat.value}</div>
                                <div className="text-xs text-slate-500 uppercase tracking-widest font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-violet-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/50 backdrop-blur-sm aspect-square md:aspect-[4/3]">
                    {/* Profile image - Cartoon style workspace */}
                    <img 
                        src={aboutImage} 
                        alt="Workspace" 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
