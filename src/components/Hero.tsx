import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

export const Hero = () => {
  const { theme } = useTheme();
  const [text, setText] = useState('');
  const phrases = [
    'WE_BUILD_THE_FUTURE',
    'WE_SECURE_THE_WEB',
    'WE_ARE_RUNTIME_HACKERS',
    'CODE_IS_OUR_WEAPON'
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[phraseIndex];
      if (isDeleting) {
        setText(currentPhrase.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(currentPhrase.substring(0, text.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, typingSpeed]);

  return (
    <section className={`relative min-h-screen flex items-center justify-center pt-20 overflow-hidden transition-all duration-500 ${theme === 'hack' ? 'matrix-bg' : ''}`}>
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-radial-gradient from-hacker-green/10 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-hacker-green/10 border border-hacker-green/20 text-hacker-green text-xs font-mono mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hacker-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-hacker-green"></span>
            </span>
            <span>SYSTEM_ONLINE: V4.0.2</span>
          </div>

          <h1 className="text-4xl md:text-8xl font-bold mb-6 tracking-tighter">
            RUNTIME <span className="text-hacker-green">HACKERS</span>
          </h1>

          <div className="h-12 md:h-16 mb-8">
            <p className="text-lg md:text-3xl font-mono text-white/60">
              {text}
              <span className="inline-block w-3 h-8 md:h-10 bg-hacker-green ml-2 animate-pulse align-middle"></span>
            </p>
          </div>

          <p className="max-w-2xl mx-auto text-white/40 text-sm md:text-lg mb-10 font-mono">
            The elite tech community of innovators, security researchers, and developers pushing the boundaries of what's possible in the digital realm.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/join" className="btn-primary flex items-center group w-full sm:w-auto justify-center">
              INITIALIZE_MEMBERSHIP
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/events" className="btn-secondary flex items-center group w-full sm:w-auto justify-center">
              EXPLORE_EVENTS
              <Terminal className="ml-2 group-hover:rotate-12 transition-transform" size={18} />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <div className="text-[10px] font-mono text-white/20 space-y-1">
          <div>// LAT: 40.7128 N</div>
          <div>// LONG: 74.0060 W</div>
          <div>// STATUS: ENCRYPTED</div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 hidden lg:block">
        <div className="text-[10px] font-mono text-white/20 text-right space-y-1">
          <div>// PROTOCOL: HTTPS</div>
          <div>// PORT: 443</div>
          <div>// AUTH: VERIFIED</div>
        </div>
      </div>
    </section>
  );
};
