import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

interface CountdownProps {
  targetDate: string;
  title: string;
}

export const Countdown = ({ targetDate, title }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINS', value: timeLeft.minutes },
    { label: 'SECS', value: timeLeft.seconds },
  ];

  return (
    <div className="glass p-8 rounded-2xl neon-border max-w-3xl mx-auto">
      <div className="flex items-center justify-center space-x-3 mb-8">
        <Calendar className="text-hacker-green" size={24} />
        <h3 className="text-lg md:text-2xl font-mono font-bold uppercase tracking-tighter">
          NEXT_MAJOR_EVENT: <span className="text-hacker-green">{title}</span>
        </h3>
      </div>
      
      <div className="grid grid-cols-4 gap-2 md:gap-8">
        {timeUnits.map((unit) => (
          <div key={unit.label} className="text-center">
            <div className="text-2xl md:text-6xl font-mono font-bold text-white mb-2">
              {String(unit.value).padStart(2, '0')}
            </div>
            <div className="text-[10px] md:text-xs font-mono text-hacker-green/60 tracking-widest">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
