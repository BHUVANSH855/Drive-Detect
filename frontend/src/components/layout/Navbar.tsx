import { useState, useEffect } from 'react';
import { Car, Github, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="pointer-events-auto flex items-center gap-2 p-2 rounded-2xl bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/50"
            >
                {/* Brand */}
                <Link to="/" className="flex items-center gap-2 px-4 py-2 rounded-xl group hover:bg-white/5 transition-colors">
                    <div className="text-blue-500 group-hover:text-blue-400 transition-colors">
                        <Car size={20} strokeWidth={2.5} />
                    </div>
                    <span className="font-bold text-gray-200 tracking-tight">DriveDetect</span>
                </Link>

                <div className="w-px h-6 bg-white/10 mx-2 hidden sm:block"></div>

                {/* Links */}
                <div className="hidden sm:flex items-center gap-1">
                    {['Features', 'About', 'Open Source'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '')}`}
                            className="px-4 py-2 bg-transparent hover:bg-white/5 text-gray-400 hover:text-white text-sm font-medium rounded-lg transition-all"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div className="w-px h-6 bg-white/10 mx-2 hidden sm:block"></div>

                {/* Actions */}
                <a
                    href="https://github.com/aayush-1709/Drive-Detect"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                    <Github size={20} />
                </a>

                <Link
                    to="/app"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-95"
                >
                    <Terminal size={16} />
                    <span className="hidden sm:block">Run Program</span>
                </Link>
            </motion.nav>
        </div>
    );
};
