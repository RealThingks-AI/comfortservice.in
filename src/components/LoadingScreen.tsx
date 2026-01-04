import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';
import logo from '@/assets/logo.png';
import heroBg from '@/assets/hero-bg.jpg';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
  minDuration?: number;
}

const LoadingScreen = ({ onLoadingComplete, minDuration = 2500 }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  // Preload critical assets
  const preloadAssets = useCallback(() => {
    const imagesToLoad = [logo, heroBg];
    let loadedCount = 0;

    const checkComplete = () => {
      loadedCount++;
      const loadProgress = (loadedCount / imagesToLoad.length) * 100;
      setProgress(prev => Math.max(prev, loadProgress * 0.8)); // Assets contribute 80% of progress
      
      if (loadedCount === imagesToLoad.length) {
        setAssetsLoaded(true);
      }
    };

    imagesToLoad.forEach((src) => {
      const img = new Image();
      img.onload = checkComplete;
      img.onerror = checkComplete; // Still continue even if image fails
      img.src = src;
    });
  }, []);

  useEffect(() => {
    preloadAssets();

    // Minimum display time
    const minTimer = setTimeout(() => {
      setMinTimeElapsed(true);
    }, minDuration);

    return () => {
      clearTimeout(minTimer);
    };
  }, [minDuration, preloadAssets]);

  // Complete loading when both conditions are met
  useEffect(() => {
    if (assetsLoaded && minTimeElapsed) {
      setProgress(100);
      const exitTimer = setTimeout(() => {
        setIsVisible(false);
        onLoadingComplete?.();
      }, 400);
      return () => clearTimeout(exitTimer);
    }
  }, [assetsLoaded, minTimeElapsed, onLoadingComplete]);

  // Smooth progress animation
  useEffect(() => {
    if (!assetsLoaded) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 75) return prev; // Cap at 75% until assets load
          return prev + 2;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [assetsLoaded]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, hsl(222, 47%, 11%) 0%, hsl(213, 70%, 18%) 50%, hsl(199, 60%, 25%) 100%)' }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* Main content */}
          <div className="relative flex flex-col items-center px-4">
            {/* Logo container with subtle glow */}
            <motion.div
              className="relative mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {/* Subtle glow effect */}
              <div className="absolute inset-0 bg-cyan/20 rounded-full blur-2xl scale-150" />

              {/* Logo */}
              <img
                src={logo}
                alt="Comfort Technical Services"
                className="relative w-24 h-24 md:w-32 md:h-32 object-contain z-10 rounded-xl"
              />
            </motion.div>

            {/* Company name */}
            <motion.h1
              className="text-2xl md:text-3xl font-bold text-white mb-2 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <span className="text-cyan">Comfort</span> Technical Services
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="text-white/60 text-sm mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              Professional AC Services
            </motion.p>

            {/* Progress bar */}
            <motion.div
              className="w-48 md:w-64 h-1 bg-white/10 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-sky-400 to-cyan rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            {/* Loading text */}
            <motion.p
              className="mt-4 text-white/40 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Loading...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
