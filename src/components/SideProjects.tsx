import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { sideProjects } from '../data/projects';

const SideProjects = () => {
    return (
        <section id="side-projects" className="py-12">
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-bold text-white mb-8 text-center"
            >
                Other Experiments
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {sideProjects.map((project, idx) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="group relative rounded-xl bg-slate-900/50 border border-slate-800 p-6 hover:border-slate-700 hover:bg-slate-900 transition-all"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <Link to={`/project/${project.id}`} className="group-hover:text-cyan-400 transition-colors">
                                <h4 className="text-lg font-bold text-white">{project.title}</h4>
                            </Link>
                            <div className="flex gap-2">
                                {/* Using Link instead of a href for internal routing if we had proper pages, assuming detail view exists */}
                                <Link to={`/project/${project.id}`} className="text-slate-500 hover:text-cyan-400 transition-colors">
                                    <ExternalLink size={16} />
                                </Link>
                            </div>
                        </div>

                        <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tags.slice(0, 3).map(tag => (
                                <span key={tag} className="text-xs font-mono text-slate-500 bg-slate-950/50 px-2 py-1 rounded">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default SideProjects;
