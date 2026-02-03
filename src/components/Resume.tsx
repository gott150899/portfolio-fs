import { useState } from 'react';
import { Download, ArrowLeft, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import Navbar from './Navbar';

// Set worker source for react-pdf
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Using a CDN for the worker to avoid Vite build complexity for now, or local matching version
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = () => {
  const resumeUrl = "/TranTyGo_Fullstack_CV.pdf";
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [isLoading, setIsLoading] = useState<boolean>(true);


  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setIsLoading(false);
  };

  const changePage = (offset: number) => {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  const handleZoomIn = () => setScale(prev => Math.min(prev + 0.2, 2.0));
  const handleZoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.6));

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-cyan-500/30 flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-24 md:pt-32 flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 w-full max-w-5xl">
            <div className="flex items-center gap-4 w-full md:w-auto">
                <Link to="/" className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
                    <ArrowLeft size={24} />
                </Link>
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                    My Resume
                </h1>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-end">
                <div className="flex items-center bg-slate-800 rounded-full px-2 py-1 border border-slate-700">
                    <button onClick={handleZoomOut} className="p-2 text-slate-400 hover:text-white transition-colors" title="Zoom Out"><ZoomOut size={16} /></button>
                    <span className="text-xs font-mono text-slate-300 w-12 text-center">{Math.round(scale * 100)}%</span>
                    <button onClick={handleZoomIn} className="p-2 text-slate-400 hover:text-white transition-colors" title="Zoom In"><ZoomIn size={16} /></button>
                </div>

                <a 
                    href={resumeUrl} 
                    download="My_Resume.pdf"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold transition-all shadow-lg shadow-cyan-900/20 hover:shadow-cyan-900/40"
                >
                    <Download size={20} />
                    <span className="hidden sm:inline">Download</span>
                </a>
            </div>
        </div>

        {/* PDF Viewer Container */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-4xl bg-slate-500/10 border border-slate-800 rounded-xl overflow-hidden backdrop-blur-sm relative shadow-2xl flex flex-col items-center min-h-[500px]"
        >
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-10 bg-slate-900/50 backdrop-blur-sm">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500"></div>
                </div>
            )}

            <div className="w-full overflow-auto flex justify-center p-4 bg-slate-900/50">
                <Document
                    file={resumeUrl}
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={
                        <div className="text-slate-400 flex flex-col items-center gap-2 py-20">
                           <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-cyan-500"></div>
                           Loading PDF...
                        </div>
                    }
                    error={
                        <div className="text-red-400 py-10 text-center px-4">
                            Failed to load PDF. Please try downloading it efficiently.
                        </div>
                    }
                    className="flex flex-col items-center"
                >
                    <Page 
                        pageNumber={pageNumber} 
                        scale={scale} 
                        renderTextLayer={true} 
                        renderAnnotationLayer={true}
                        className="shadow-xl"
                    />
                </Document>
            </div>
            
            {/* Pagination Controls */}
            {numPages && numPages > 1 && (
                <div className="w-full bg-slate-900 border-t border-slate-800 p-4 flex items-center justify-center gap-4">
                    <button
                        onClick={previousPage}
                        disabled={pageNumber <= 1}
                        className="p-2 rounded-full hover:bg-slate-800 text-slate-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <span className="text-slate-300 text-sm font-medium">
                        Page {pageNumber} of {numPages}
                    </span>
                    <button
                        onClick={nextPage}
                        disabled={pageNumber >= numPages}
                        className="p-2 rounded-full hover:bg-slate-800 text-slate-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            )}
        </motion.div>
      </main>

      <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-900 mt-auto">
            <p>© {new Date().getFullYear()} DevPortfolio.</p>
      </footer>
    </div>
  );
};

export default Resume;
