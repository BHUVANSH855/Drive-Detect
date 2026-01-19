import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Github, Play } from 'lucide-react';

export const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#020202]">

            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                {/* Noise Overlay */}
                <div className="absolute inset-0 bg-noise opacity-30 z-20 pointer-events-none"></div>

                {/* Ambient Glow following mouse */}
                <div
                    className="absolute w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] transition-transform duration-200 z-10 pointer-events-none"
                    style={{
                        left: '50%',
                        top: '50%',
                        transform: `translate(calc(-50% + ${(mousePosition.x - 50) * 2}px), calc(-50% + ${(mousePosition.y - 50) * 2}px))`
                    }}
                />

                {/* Perspective Grid "The Road" */}
                <div className="absolute bottom-0 left-[-50%] right-[-50%] h-[60vh] perspective-container z-0">
                    <div className="w-full h-full rotate-x-grid bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,transparent_10%,black_100%)] animate-grid-flow transform-gpu"></div>
                </div>
            </div>

            <motion.div
                style={{ y: y1, opacity }}
                className="relative z-30 container mx-auto px-4 flex flex-col items-center text-center mt-[-50px]"
            >


                {/* Main Title */}
                <div className="mb-6 relative">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-8xl font-bold tracking-tighter text-white/90"
                    >
                        DRIVE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 text-glow">DETECT</span>
                    </motion.h1>
                    <motion.h1
                        className="absolute top-0 left-0 w-full text-6xl md:text-8xl font-bold tracking-tighter text-blue-500/20 blur-lg select-none pointer-events-none"
                        aria-hidden="true"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        DRIVE DETECT
                    </motion.h1>
                </div>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="max-w-xl text-lg md:text-xl text-gray-400 leading-relaxed mb-10 font-light"
                >
                    Next-generation <span className="text-blue-400 font-medium">computer vision</span> for autonomous navigation.
                    Classifying traffic signals with <span className="text-white font-medium">99.8% precision</span> in real-time.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center gap-5"
                >
                    <Link
                        to="/app"
                        className="group relative px-8 py-4 bg-blue-600 rounded-lg overflow-hidden transition-all hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                    >
                        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] -translate-x-full group-hover:animate-[shimmer_0.8s_ease-in-out_infinite]"></div>
                        <span className="relative flex items-center gap-2 font-bold text-white tracking-wide">
                            INITIATE DEMO <Play size={16} fill="currentColor" />
                        </span>
                    </Link>

                    <a
                        href="https://github.com/aayush-1709/Drive-Detect"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-8 py-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
                    >
                        <span className="flex items-center gap-2 font-medium text-gray-300 group-hover:text-white transition-colors">
                            <Github size={18} /> HEADQUARTERS
                        </span>
                    </a>
                </motion.div>

            </motion.div>

            {/* Decorative overlaid scanlines causing a techno feel */}
            <div className="absolute inset-0 pointer-events-none z-50 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px] opacity-10"></div>
        </section>
    );
};
