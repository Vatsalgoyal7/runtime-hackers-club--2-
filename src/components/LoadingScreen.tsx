import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const LoadingScreen = () => {
  const [text, setText] = useState('');
  const fullText = 'INITIALIZING RUNTIME_HACKERS_PROTOCOL...';
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center font-mono p-4"
    >
      <div className="w-full max-w-md">
        <div className="mb-4 text-hacker-green text-sm md:text-base">
          {text}
          <span className="animate-pulse">_</span>
        </div>
        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-hacker-green shadow-[0_0_10px_#00cc33]"
          />
        </div>
        <div className="mt-2 flex justify-between text-hacker-green text-xs">
          <span>STATUS: LOADING_MODULES</span>
          <span>{progress}%</span>
        </div>
      </div>
      
      <div className="absolute bottom-8 text-white/20 text-[10px] uppercase tracking-[0.2em]">
        System Version 4.0.2 // Secure Connection Established
      </div>
    </motion.div>
  );
};
