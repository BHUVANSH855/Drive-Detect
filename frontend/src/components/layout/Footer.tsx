import { Car, Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="bg-[#020202] border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="flex items-center gap-2 mb-6">
                            <div className="text-blue-600">
                                <Car size={24} />
                            </div>
                            <span className="font-bold text-2xl tracking-tight text-white">
                                Drive<span className="text-blue-600">Detect</span>
                            </span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                            Empowering autonomous systems with real-time computer vision capabilities.
                            Built for speed, accuracy, and the open road.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6">System</h3>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><a href="#features" className="hover:text-blue-500 transition-colors">Capabilities</a></li>
                            <li><a href="#about" className="hover:text-blue-500 transition-colors">Neural Architecture</a></li>
                            <li><Link to="/app" className="hover:text-blue-500 transition-colors">Live Demo</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-white mb-6">Connect</h3>
                        <div className="flex gap-4">
                            <a href="https://github.com/aayush-1709/Drive-Detect" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-xs text-gray-600 font-mono">
                        © 2026 DRIVE DETECT / OPEN SOURCE INITIATIVE
                    </p>
                    <div className="flex gap-8 mt-4 md:mt-0 text-xs text-gray-600 font-mono">
                        <a href="#" className="hover:text-white transition-colors">PRIVACY_PROTOCOL</a>
                        <a href="#" className="hover:text-white transition-colors">TERMS_OF_USE</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
