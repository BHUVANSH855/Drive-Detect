import { motion } from 'framer-motion';
import { Network, Cpu, Eye } from 'lucide-react';

export const About = () => {
    return (
        <section id="about" className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                            Intelligence for the <br />
                            <span className="text-blue-500">Physical World</span>
                        </h2>

                        <p className="text-lg text-gray-400 leading-relaxed border-l-2 border-blue-500/30 pl-6">
                            Drive Detect bridges the gap between raw visual sensors and actionable robotic control.
                            Our vision pipeline is optimized for the chaotic reality of open roads.
                        </p>

                        <div className="space-y-6 mt-8">
                            {[
                                { icon: <Network />, title: "Deep ResNet-50", desc: "Trained on GTSRB dataset" },
                                { icon: <Cpu />, title: "Edge Optimized", desc: "<15ms latency on standard GPU" },
                                { icon: <Eye />, title: "Computer Vision", desc: "OpenCV preprocessing pipeline" }
                            ].map((item, index) => (
                                <div key={index} className="flex gap-4 items-center group">
                                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-500/10 transition-colors">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Graphical Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 p-1 shadow-2xl overflow-hidden relative group">
                            {/* Animated scanning grid background */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"></div>

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-64 h-64 border border-blue-500/30 rounded-full animate-[spin_10s_linear_infinite]">
                                    <div className="absolute inset-0 border-t-2 border-blue-500 blur-sm"></div>
                                </div>
                                <div className="absolute w-48 h-48 border border-cyan-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

                                {/* Center Eye */}
                                <div className="absolute bg-blue-600/20 backdrop-blur-md p-6 rounded-full border border-blue-500/50 shadow-[0_0_50px_rgba(59,130,246,0.5)]">
                                    <Eye size={48} className="text-white" />
                                </div>
                            </div>

                            {/* Stats Overlay */}
                            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 flex justify-between text-xs font-mono text-gray-400">
                                <span>STATUS: ACTIVE</span>
                                <span className="text-green-500">SYS_OK</span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
