import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Scan, Zap, ShieldCheck, Lock, Cpu, Server, Play } from 'lucide-react';

export const Features = () => {
    // State for the latency animation loop
    const [latencyState, setLatencyState] = useState<'processing' | 'result'>('processing');
    const [msCount, setMsCount] = useState(0);

    useEffect(() => {
        const cycleAnimation = () => {
            // Processing phase (2s)
            setLatencyState('processing');
            setMsCount(0);

            setTimeout(() => {
                // Result phase (Switch to number)
                setLatencyState('result');
                // Count up to 12
                let start = 0;
                const interval = setInterval(() => {
                    start += 1;
                    setMsCount(start);
                    if (start >= 12) clearInterval(interval);
                }, 50); // Fast count up
            }, 2000);
        };

        cycleAnimation();
        const loop = setInterval(cycleAnimation, 4000); // 4s total loop
        return () => clearInterval(loop);
    }, []);

    return (
        <section id="features" className="py-32 bg-[#020202] relative border-t border-white/5">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="mb-20 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        System <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Capabilities</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Engineered for high-throughput environments where precision determines safety.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">

                    {/* Card 1: Detection Engine */}
                    <div className="md:col-span-2 relative group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden p-8 hover:border-blue-500/50 transition-colors duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10 h-full flex flex-col">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
                                    <Scan size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white">Detection Engine</h3>
                            </div>
                            <p className="text-gray-400 mb-8 max-w-md">
                                Using advanced Convolutional Neural Networks to identify traffic signage in complex weather conditions.
                            </p>

                            {/* Simulated Scanning Visual */}
                            <div className="flex-1 rounded-xl bg-black/50 border border-white/10 relative overflow-hidden flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-shadow">
                                {/* Moving Scan Line */}
                                <div className="absolute top-0 bottom-0 w-1 bg-blue-500 shadow-[0_0_20px_#3b82f6] animate-scan-line z-20"></div>

                                <div className="grid grid-cols-3 gap-4 w-3/4 opacity-50 relative">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="h-16 rounded-lg bg-white/10 border border-white/5"></div>
                                    ))}
                                    <div className="col-span-3 h-16 rounded-lg bg-blue-600/30 border border-blue-500/50 flex items-center justify-center">
                                        <span className="text-xs font-mono text-blue-200">OBJECT DETECTED</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Latency - Pipeline Animation */}
                    <div className="md:col-span-1 relative group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden p-8 hover:border-green-500/50 transition-colors duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 rounded-lg bg-green-500/20 text-green-400">
                                    <Zap size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white">Low Latency</h3>
                            </div>

                            <div className="mt-auto flex items-center justify-center h-48 relative">
                                {latencyState === 'processing' ? (
                                    <div className="flex items-center gap-2">
                                        {[1, 2, 3].map((i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ scale: 0.8, opacity: 0.3 }}
                                                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                                                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                                            >
                                                {i === 1 && <Cpu className="text-green-500" size={24} />}
                                                {i === 2 && <Server className="text-green-400" size={24} />}
                                                {i === 3 && <Play className="text-green-300" size={24} />}
                                            </motion.div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center relative">
                                        <motion.div
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="absolute -inset-10 bg-green-500/20 blur-3xl rounded-full opacity-20"
                                        />
                                        <span className="text-6xl font-mono font-bold text-white tracking-tighter relative z-10">
                                            {msCount}<span className="text-2xl text-green-500">ms</span>
                                        </span>
                                        <p className="text-sm text-gray-500 mt-2 font-mono uppercase tracking-widest relative z-10">Inference Time</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Neural Architecture */}
                    <div className="md:col-span-1 relative group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden p-8 hover:border-purple-500/50 transition-colors duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                                    <Cpu size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white">Neural Net</h3>
                            </div>
                            <div className="space-y-3 font-mono text-sm text-gray-400">
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span>Model</span> <span className="text-white">ResNet-50</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span>Parameters</span> <span className="text-white">25.6M</span>
                                </div>
                                <div className="flex justify-between border-b border-white/5 pb-2">
                                    <span>Accuracy</span> <span className="text-purple-400">99.8%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Security (Encrypted) */}
                    <div className="md:col-span-2 relative group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden p-8 hover:border-cyan-500/50 transition-colors duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-8">
                            <div className="max-w-xs">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">Encrypted Pipeline</h3>
                                </div>
                                <p className="text-gray-400">
                                    End-to-end data integrity checks ensuring that no adversarial attacks compromise the vision system.
                                </p>
                            </div>

                            {/* Encryption Animation */}
                            <div className="relative h-32 w-48 flex items-center justify-center bg-black/40 rounded-xl border border-white/5 overflow-hidden">
                                {/* Binary Rain Background */}
                                <div className="absolute inset-0 flex gap-1 opacity-20 font-mono text-[10px] text-cyan-500 overflow-hidden leading-none">
                                    {[...Array(10)].map((_, i) => (
                                        <div key={i} className="animate-grid-flow" style={{ animationDuration: `${Math.random() * 2 + 1}s` }}>
                                            101101010101100101
                                        </div>
                                    ))}
                                </div>

                                <div className="relative z-10">
                                    <motion.div
                                        animate={{ rotateY: [0, 180, 360] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    >
                                        <Lock className="text-cyan-400 w-12 h-12" />
                                    </motion.div>
                                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                                        <span className="text-xs font-mono text-cyan-500 animate-pulse">AES-256</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
