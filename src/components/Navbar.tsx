import { AnimatePresence, motion } from 'framer-motion';
import { Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    // Handle standard router links (like /resume)
    if (href.startsWith('/')) {
        setIsMobileMenuOpen(false);
        // Let standard routing handle it (don't prevent default unless we want manual nav)
        return; 
    }

    e.preventDefault();
    const targetId = href.replace('#', '');
    
    // Function to scroll to element
    const scrollToElement = () => {
        const element = document.getElementById(targetId);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80, // Offset for fixed navbar
                behavior: 'smooth'
            });
        }
    };

    if (location.pathname === '/') {
        // If already on Home, just scroll
        scrollToElement();
    } else {
        // If on Detail page, navigate to Home then scroll
        // We use a small timeout to allow movement to complete, 
        // OR simpler: standard anchor with useEffect listener in Home.
        // But for direct manual consistency:
        navigate('/');
        // Wait for navigation and mount
        setTimeout(() => {
            scrollToElement();
        }, 100);
    }
    
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "/resume" }, 
  ];

  const socialLinks = [
    // { icon: <Github size={18} />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/ty-go-tran-644666248", label: "LinkedIn" },
    { icon: <Mail size={18} />, href: "mailto:gott150899@gmail.com", label: "Email" },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4"
      >
        <div className="flex items-center justify-between md:justify-center w-full md:w-auto px-6 py-3 bg-slate-900/60 backdrop-blur-md border border-slate-800/50 rounded-full shadow-lg shadow-cyan-900/10 relative z-50">
          <a href="/" onClick={handleLogoClick} className="text-slate-200 font-bold tracking-tight hover:text-cyan-400 transition-colors cursor-pointer text-lg">
            Dev.
          </a>
          
          {/* Desktop Menu - Restored 'Pill' Layout */}
          <div className="hidden md:flex items-center gap-6 ml-6">
             <div className="h-4 w-px bg-slate-800" />
             
             <ul className="flex items-center gap-6 text-sm font-medium text-slate-400">
              {navLinks.map(link => (
                <li key={link.name}>
                    <a 
                        href={link.href} 
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="hover:text-cyan-400 transition-colors cursor-pointer"
                    >
                        {link.name}
                    </a>
                </li>
              ))}
             </ul>

             <div className="h-4 w-px bg-slate-800" />

             <div className="flex items-center gap-4 text-slate-400">
                {socialLinks.map((social, idx) => (
                    <a key={idx} href={social.href} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label={social.label}>
                        {social.icon}
                    </a>
                ))}
             </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-x-0 top-0 pt-24 pb-10 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50 z-40 md:hidden flex flex-col items-center gap-8 shadow-2xl"
            >
                <ul className="flex flex-col items-center gap-6 text-lg font-medium text-slate-300">
                    {navLinks.map(link => (
                        <li key={link.name}>
                            <a 
                                href={link.href} 
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="hover:text-cyan-400 transition-colors cursor-pointer"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="w-16 h-px bg-slate-800" />

                <div className="flex items-center gap-8 text-slate-400">
                    {socialLinks.map((social, idx) => (
                        <a key={idx} href={social.href} target="_blank" rel="noreferrer" className="hover:text-white transition-colors p-2 bg-slate-900 rounded-full border border-slate-800">
                            {social.icon}
                        </a>
                    ))}
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
