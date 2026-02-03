import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, AlertTriangle } from 'lucide-react';
import Navbar from './Navbar';
import { projects, sideProjects } from '../data/projects';

const ProjectDetail = () => {
    const { id } = useParams();

    // Find project by ID (robust string matching)
    // Find project by ID (robust string matching)
    const project = projects.find(p => p.id === id) || sideProjects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
                <Navbar />
                <main className="flex-1 flex flex-col items-center justify-center container mx-auto px-4 text-center">
                    <div className="bg-red-500/10 p-6 rounded-full mb-6 relative">
                        <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full" />
                        <AlertTriangle size={64} className="text-red-500 relative z-10" />
                    </div>
                    <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
                    <p className="text-slate-400 text-lg mb-8 max-w-md">The project you are looking for doesn't exist or has been removed.</p>
                    <Link to="/" className="px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors border border-slate-700 flex items-center gap-2">
                        <ArrowLeft size={18} /> Back to Portfolio
                    </Link>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-cyan-500/30">
            <Navbar />

            <main className="container mx-auto px-4 max-w-5xl pt-32 pb-20">
                <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 mb-8 transition-colors">
                    <ArrowLeft size={18} /> Back to Home
                </Link>

                <div className="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden backdrop-blur-sm shadow-2xl shadow-black/50">
                    {/* Hero Image */}
                    {/* Hero Image */}
                    {/* <div className="h-64 md:h-96 w-full relative group overflow-hidden">
                        <div className="w-full h-full relative transition-transform duration-700 group-hover:scale-105">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover"
                            />

                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay z-10`} />

                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-20" />
                        </div>
                    </div> */}

                    <div className="p-8 md:p-12 relative">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                            <div>
                                <div className="text-cyan-400 font-mono text-sm mb-2 uppercase tracking-wider font-bold">{project.category}</div>
                                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{project.title}</h1>
                            </div>

                            {
                                (project.repoLink || project.liveLink) &&
                                <div className="flex gap-4">
                                    {
                                        project.repoLink && 
                                        <a href={project.repoLink} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-800 text-white hover:bg-slate-700 transition-colors border border-slate-700 font-medium">
                                            <Github size={18} /> Repo
                                        </a>
                                    }
                                    {
                                        project.liveLink &&
                                        <a href={project.liveLink} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-600 text-white hover:bg-cyan-500 transition-colors font-bold shadow-lg shadow-cyan-900/20">
                                            Live Demo <ExternalLink size={18} />
                                        </a>
                                    }
                                </div>
                            }
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="md:col-span-2 space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                        <span className="w-8 h-1 bg-cyan-500 rounded-full" /> Overview
                                    </h2>
                                    <p className="text-slate-300 text-lg leading-relaxed">{project.fullDescription}</p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                                        <span className="w-8 h-1 bg-violet-500 rounded-full" /> Key Features
                                    </h2>
                                    <ul className="grid gap-3">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3 text-slate-300">
                                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-4 border-b border-slate-800 pb-2">Technologies</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map(t => (
                                            <span key={t} className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-lg text-sm text-cyan-200/80 hover:bg-slate-800 transition-colors cursor-default">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-6 bg-slate-900/80 rounded-2xl border border-slate-800 shadow-inner">
                                    <h3 className="text-lg font-bold text-white mb-2">My Role</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {project.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-900">
                <p>© {new Date().getFullYear()} DevPortfolio.</p>
            </footer>
        </div>
    );
};

export default ProjectDetail;
