import { useState, useEffect, ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';

// Context
import { ThemeProvider } from './context/ThemeContext';

// Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Events } from './pages/Events';
import { Projects } from './pages/Projects';
import { Achievements } from './pages/Achievements';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { JoinUs } from './pages/JoinUs';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageTransition = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Simulate loading time
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <AnimatePresence mode="wait">
          {loading ? (
            <LoadingScreen key="loading" />
          ) : (
            <div className="min-h-screen flex flex-col transition-colors duration-300">
              <Navbar />
              <main className="flex-grow">
                <AnimatePresence mode="wait">
                  <Routes>
                    <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                    <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                    <Route path="/events" element={<PageTransition><Events /></PageTransition>} />
                    <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
                    <Route path="/achievements" element={<PageTransition><Achievements /></PageTransition>} />
                    <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
                    <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                    <Route path="/join" element={<PageTransition><JoinUs /></PageTransition>} />
                  </Routes>
                </AnimatePresence>
              </main>
              <Footer />
            </div>
          )}
        </AnimatePresence>
      </Router>
    </ThemeProvider>
  );
}
