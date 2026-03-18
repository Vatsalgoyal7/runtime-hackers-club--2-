import { motion } from 'motion/react';
import { CLUB_STATS } from '../data/constants';

export const Stats = () => {
  return (
    <section className="py-20 bg-black/5 transition-colors duration-300 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {CLUB_STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-hacker-green/10 text-hacker-green mb-4 group-hover:bg-hacker-green group-hover:text-black transition-all duration-300">
                <stat.icon size={24} />
              </div>
              <div className="text-3xl md:text-4xl font-mono font-bold mb-1">
                {stat.value}+
              </div>
              <div className="text-xs md:text-sm font-mono opacity-40 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
