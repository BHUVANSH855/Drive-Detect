import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Scan, Zap, ShieldCheck, Lock, Cpu, Server, Play } from 'lucide-react';

export const Features = () => {
  const [latencyState, setLatencyState] = useState<'processing' | 'result'>('processing');
  const [msCount, setMsCount] = useState(0);

  useEffect(() => {
    const cycleAnimation = () => {
      setLatencyState('processing');
      setMsCount(0);

      setTimeout(() => {
        setLatencyState('result');
        let start = 0;
        const interval = setInterval(() => {
          start += 1;
          setMsCount(start);
          if (start >= 12) clearInterval(interval);
        }, 50);
      }, 2000);
    };

    cycleAnimation();
    const loop = setInterval(cycleAnimation, 4000);
    return () => clearInterval(loop);
  }, []);

  return (
    <section
      id="features"
      className="py-32 bg-transparent relative border-t border-black/10 dark:border-white/5"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            System{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Capabilities
            </span>
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Engineered for high-throughput environments where precision determines safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">

          {/* Detection Engine */}
          <div className="md:col-span-2 relative group rounded-3xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-sm overflow-hidden p-8 hover:border-blue-500/50 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-500/20 text-blue-500">
                  <Scan size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Detection Engine
                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Using advanced Convolutional Neural Networks to identify traffic signage in complex weather conditions.
              </p>

              <div className="flex-1 rounded-xl bg-black/5 dark:bg-black/50 border border-black/10 dark:border-white/10 relative overflow-hidden flex items-center justify-center">
                <div className="absolute top-30 bottom-0 w-1 bg-blue-500 animate-scan-line"></div>

                <div className="grid grid-cols-3 gap-4 w-3/4 opacity-50">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-16 rounded-lg bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/5"></div>
                  ))}
                  <div className="col-span-3 h-16 rounded-lg bg-blue-600/30 border border-blue-500/50 flex items-center justify-center">
                    <span className="text-xs font-mono text-blue-200 dark:text-blue-200">
                      OBJECT DETECTED
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Latency */}
          <div className="relative group rounded-3xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-sm overflow-hidden p-8 hover:border-green-500/50 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-green-500/20 text-green-500">
                  <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Low Latency
                </h3>
              </div>

              <div className="mt-auto flex items-center justify-center h-48">
                {latencyState === 'processing' ? (
                  <div className="flex items-center gap-2">
                    {[Cpu, Server, Play].map((Icon, i) => (
                      <motion.div
                        key={i}
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                      >
                        <Icon className="text-green-500" size={24} />
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center">
                    <span className="text-6xl font-mono font-bold text-gray-900 dark:text-white">
                      {msCount}
                      <span className="text-2xl text-green-500">ms</span>
                    </span>
                    <p className="text-sm text-gray-500 mt-2 font-mono uppercase tracking-widest">
                      Inference Time
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Neural Net */}
          <div className="relative group rounded-3xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-sm overflow-hidden p-8 hover:border-purple-500/50 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-purple-500/20 text-purple-500">
                  <Cpu size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Neural Net
                </h3>
              </div>

              <div className="space-y-3 font-mono text-sm text-gray-600 dark:text-gray-400">
                <div className="flex justify-between border-b border-black/10 dark:border-white/5 pb-2">
                  <span>Model</span><span className="text-gray-900 dark:text-white">ResNet-50</span>
                </div>
                <div className="flex justify-between border-b border-black/10 dark:border-white/5 pb-2">
                  <span>Parameters</span><span className="text-gray-900 dark:text-white">25.6M</span>
                </div>
                <div className="flex justify-between border-b border-black/10 dark:border-white/5 pb-2">
                  <span>Accuracy</span><span className="text-purple-500">99.8%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="md:col-span-2 relative group rounded-3xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-sm overflow-hidden p-8 hover:border-cyan-500/50 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="max-w-xs">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-500">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Encrypted Pipeline
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  End-to-end data integrity checks ensuring that no adversarial attacks compromise the vision system.
                </p>
              </div>

              <div className="relative h-32 w-48 flex items-center justify-center bg-black/5 dark:bg-black/40 rounded-xl border border-black/10 dark:border-white/5 overflow-hidden">
                <motion.div
                  animate={{ rotateY: [0, 180, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                >
                  <Lock className="text-cyan-500 w-12 h-12" />
                </motion.div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
