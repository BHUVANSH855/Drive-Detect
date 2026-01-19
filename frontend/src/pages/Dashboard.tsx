import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { UploadZone } from '../components/UploadZone';
import { ResultCard } from '../components/ResultCard';
import { Car, Github, ShieldCheck, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Prediction {
  class_id: number;
  class_name: string;
  confidence: number;
}

interface PredictionResponse {
  predictions: Prediction[];
}

export function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const updateFavicon = () => {
      const isDark = mediaQuery.matches;
      const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
      if (favicon) {
        favicon.href = isDark ? '/favicon-dark.svg' : '/favicon-light.svg';
      }
    };

    updateFavicon();
    mediaQuery.addEventListener('change', updateFavicon);
    return () => mediaQuery.removeEventListener('change', updateFavicon);
  }, []);

  const handleFileSelect = async (file: File) => {
    setIsLoading(true);
    setError(null);
    setPredictions([]);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post<PredictionResponse>('/predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setPredictions(response.data.predictions);
    } catch (err) {
      console.error(err);
      setError("Failed to classify image. Please ensure the backend is running.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Floating Navbar */}
      <header className="z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200 dark:border-gray-800 rounded-2xl shadow-lg mx-auto mt-0 max-w-3xl left-0 right-0 w-[95%] flex items-center justify-between px-6 h-16 sticky top-6 transition-all duration-300">
        <div className="flex items-center gap-4">
          <Link to="/" className="p-2 -ml-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
             <ArrowLeft size={20} />
          </Link>
          <div className="flex items-center gap-2">
            <div className="text-blue-600 dark:text-blue-400">
              <Car size={24} />
            </div>
            <span className="font-bold text-xl tracking-tight">DriveDetect</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/aayush-1709/Drive-Detect" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
            <Github size={20} />
          </a>
        </div>
      </header>

      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
           <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-2">
              <ShieldCheck size={14} className="mr-1.5" />
              Live Demo
           </div>
           <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
             Traffic Sign Recognition
           </h1>
           <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
             Upload a traffic sign image to instantly classify it with our high-precision deep learning model.
           </p>
        </div>

        {/* Interaction Area */}
        <div className="max-w-4xl mx-auto">
          <UploadZone onFileSelect={handleFileSelect} isLoading={isLoading} />
          
          {error && (
            <div className="mt-6 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800 text-sm text-center">
              {error}
            </div>
          )}

          <ResultCard predictions={predictions} />
        </div>

      </main>

      <footer className="py-8 text-center text-sm text-gray-500 dark:text-gray-500 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
         <p>© 2026 DriveDetect. Built in Public.</p>
      </footer>
    </div>
  );
}
