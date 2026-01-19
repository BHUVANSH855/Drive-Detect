import { motion } from 'framer-motion';
import { Github, Star, GitBranch, Terminal } from 'lucide-react';

export const OpenSource = () => {
    return (
        <section id="opensource" className="py-24 bg-[#020202] text-center relative overflow-hidden border-t border-white/5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="inline-flex items-center justify-center p-4 mb-8 bg-white/5 rounded-2xl border border-white/10 shadow-lg glow-blue">
                        <Github size={40} className="text-white" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Open Code. <span className="text-gray-500">Open Roads.</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light">
                        We believe safety systems should be transparent. Inspect our models, contribute to the dataset, or fork the engine for your own robotics projects.
                    </p>

                    <a
                        href="https://github.com/aayush-1709/Drive-Detect"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                        <Github size={20} />
                        <span>GITHUB REPOSITORY</span>
                    </a>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <StatCard icon={<Star size={24} />} value="120+" label="Stars" />
                    <StatCard icon={<GitBranch size={24} />} value="45" label="Forks" />
                    <StatCard icon={<Terminal size={24} />} value="MIT" label="License" />
                </div>
            </div>
        </section>
    );
};

const StatCard = ({ icon, value, label }: { icon: any, value: string, label: string }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="p-8 bg-[#0a0a0a] rounded-2xl border border-white/5 hover:border-white/20 transition-colors group"
        >
            <div className="mb-4 text-gray-500 group-hover:text-blue-500 transition-colors flex justify-center">
                {icon}
            </div>
            <div className="text-4xl font-bold text-white mb-2 tracking-tight">
                {value}
            </div>
            <div className="text-xs text-gray-500 font-mono uppercase tracking-widest">
                {label}
            </div>
        </motion.div>
    )
}
