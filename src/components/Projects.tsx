import { ExternalLink, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-white mb-12 text-center"
      >
        Project Timeline
      </motion.h2>

      <div className="relative max-w-4xl mx-auto mb-24">
        {/* Vertical Line */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0" />

        {projects.sort((a, b) => {
          if (!a.startDate || !b.startDate) return 0;
          const [monthA, yearA] = a.startDate.split('/').map(Number);
          const [monthB, yearB] = b.startDate.split('/').map(Number);
          return (yearB * 12 + monthB) - (yearA * 12 + monthA);
        }).map((project, idx) => (
          <motion.div
            key={`timeline-${project.id}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`relative flex items-center mb-12 last:mb-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
          >
            {/* Dot */}
            <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] z-10">
              <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-20" />
            </div>

            {/* Content Spacer for layout balance on Desktop */}
            <div className="hidden md:block w-1/2" />

            {/* Card */}
            <div className={`ml-12 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl hover:border-cyan-500/30 transition-colors group">
                <div className="flex items-center gap-2 text-cyan-400 mb-2 font-mono text-sm">
                  <Calendar size={14} />
                  <span>{project.startDate} - {project.endDate || 'Present'}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={`t-${tag}`} className="text-xs text-slate-500 bg-slate-950 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <Link to={`/project/${project.id}`} className="flex items-center gap-2 text-sm font-medium text-white group-hover:underline decoration-cyan-500 underline-offset-4">
                    View Project <ExternalLink size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-white mb-12 text-center"
      >
        Featured Work
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`group relative rounded-3xl bg-slate-900 border border-slate-800 p-8 hover:border-slate-700 transition-colors ${project.colSpan} overflow-hidden`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="relative z-10 flex flex-col h-full items-start">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono text-slate-400 bg-slate-950/50 px-2 py-1 rounded border border-slate-800">
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-slate-400 mb-8 max-w-sm">{project.description}</p>

              <div className="mt-auto">
                <Link to={`/project/${project.id}`} className="flex items-center gap-2 text-sm font-medium text-white group-hover:underline decoration-cyan-500 underline-offset-4">
                  View Project <ExternalLink size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div> */}
    </section>
  );
};

export default Projects;
