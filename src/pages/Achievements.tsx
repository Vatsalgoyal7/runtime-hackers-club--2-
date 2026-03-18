import { motion } from 'motion/react';
import { ACHIEVEMENTS } from '../data/constants';
import { Award, Trophy, Star, Medal } from 'lucide-react';

export const Achievements = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter"
          >
            HALL_OF_FAME
          </motion.h1>
          <p className="opacity-40 font-mono text-sm max-w-xl mx-auto">
            Celebrating the milestones and victories of our community.
          </p>
        </div>

        <div className="space-y-8">
          {ACHIEVEMENTS.map((achievement, i) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl border border-white/5 flex flex-col md:flex-row items-center gap-8 hover:border-hacker-green/20 transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-2xl bg-hacker-green/10 flex items-center justify-center text-hacker-green shrink-0">
                <achievement.icon size={40} />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                  <h3 className="text-2xl font-mono font-bold">{achievement.title}</h3>
                  <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono opacity-40 w-fit mx-auto md:mx-0">
                    {achievement.year}
                  </span>
                </div>
                <p className="opacity-50 font-mono leading-relaxed">
                  {achievement.description}
                </p>
              </div>
              <div className="hidden lg:block">
                <Trophy className="opacity-10" size={64} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            { label: 'Total Awards', value: '25+', icon: Medal },
            { label: 'Global Rank', value: '#12', icon: Trophy },
            { label: 'Member Certs', value: '150+', icon: Star }
          ].map((stat, i) => (
            <div key={stat.label} className="glass p-8 rounded-2xl border border-white/5 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 text-hacker-green mb-4">
                <stat.icon size={24} />
              </div>
              <div className="text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-xs font-mono opacity-40 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
