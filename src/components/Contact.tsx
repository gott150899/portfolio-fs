import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 text-center max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-white mb-6">Let's Work Together</h2>
        <p className="text-slate-400 text-lg mb-10">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is open!
        </p>
        
        <a 
            href="mailto:gott150899@gmail.com" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
        >
            <Mail size={20} />
            Say Hello
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
