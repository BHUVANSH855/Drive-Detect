import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertTriangle, AlertOctagon, Info } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Prediction {
  class_id: number;
  class_name: string;
  confidence: number;
}

interface ResultCardProps {
  predictions: Prediction[];
}

export function ResultCard({ predictions }: ResultCardProps) {
  if (!predictions || predictions.length === 0) return null;

  const topPrediction = predictions[0];
  
  // Determine color and icon based on confidence or class (simplified logic)
  let statusColor = "text-blue-600 dark:text-blue-400";
  let bgColor = "bg-blue-50 dark:bg-blue-900/20";
  let borderColor = "border-blue-200 dark:border-blue-800";
  let Icon = Info;

  if (topPrediction.class_name.toLowerCase().includes("stop")) {
     statusColor = "text-red-600 dark:text-red-400";
     bgColor = "bg-red-50 dark:bg-red-900/20";
     borderColor = "border-red-200 dark:border-red-800";
     Icon = AlertOctagon;
  } else if (topPrediction.class_name.toLowerCase().includes("warning") || topPrediction.class_name.toLowerCase().includes("caution")) {
     statusColor = "text-amber-600 dark:text-amber-400";
     bgColor = "bg-amber-50 dark:bg-amber-900/20";
     borderColor = "border-amber-200 dark:border-amber-800";
     Icon = AlertTriangle;
  } else {
     Icon = CheckCircle2;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-xl mx-auto mt-8"
    >
      <div className={cn("rounded-2xl border p-6 shadow-sm", bgColor, borderColor)}>
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
              Detected Sign
            </h2>
            <div className="flex items-center gap-3">
               <Icon className={cn("w-8 h-8", statusColor)} />
               <h1 className="text-3xl font-bold text-gray-900 dark:text-white leading-none">
                  {topPrediction.class_name}
               </h1>
            </div>
          </div>
          <div className="text-right">
             <span className={cn("text-3xl font-bold", statusColor)}>
                {(topPrediction.confidence * 100).toFixed(1)}%
             </span>
             <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">CONFIDENCE</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 pb-2">
            Alternative Predictions
          </h3>
          {predictions.slice(1, 4).map((pred, idx) => (
            <div key={idx} className="flex items-center gap-4 text-sm">
              <span className="w-8 text-right font-mono text-gray-500 text-xs">
                {(pred.confidence * 100).toFixed(0)}%
              </span>
              <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${pred.confidence * 100}%` }}
                    transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                    className="h-full bg-gray-500 dark:bg-gray-400 rounded-full"
                />
              </div>
              <span className="flex-1 text-gray-700 dark:text-gray-300 truncate">
                {pred.class_name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
