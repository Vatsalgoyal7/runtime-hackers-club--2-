import { motion } from 'motion/react';
import { EVENTS } from '../data/constants';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

export const Events = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter"
          >
            UPCOMING_OPERATIONS
          </motion.h1>
          <p className="opacity-40 font-mono text-sm max-w-xl mx-auto">
            Mark your calendars for our upcoming hackathons, workshops, and meetups.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {EVENTS.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/5 hover:border-hacker-green/20 transition-all duration-300 group"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/4">
                  <div className="bg-white/5 rounded-xl p-6 text-center border border-white/5">
                    <div className="text-4xl font-bold text-hacker-green mb-1">
                      {new Date(event.date).getDate()}
                    </div>
                    <div className="text-sm font-mono uppercase tracking-widest opacity-60">
                      {new Date(event.date).toLocaleString('default', { month: 'short' })}
                    </div>
                    <div className="mt-4 pt-4 border-t border-white/5 text-xs font-mono opacity-40">
                      {new Date(event.date).getFullYear()}
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-hacker-green/10 text-hacker-green text-[10px] font-mono rounded uppercase">
                      {event.type}
                    </span>
                    <span className="px-2 py-1 bg-white/5 opacity-40 text-[10px] font-mono rounded uppercase">
                      REGISTRATION_OPEN
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-mono font-bold mb-4 group-hover:text-hacker-green transition-colors">
                    {event.title}
                  </h3>
                  <p className="opacity-50 font-mono mb-6 leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-6 text-sm font-mono opacity-40">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-hacker-green" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-hacker-green" />
                      {new Date(event.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/4 flex items-center justify-center lg:justify-end">
                  <button className="btn-primary w-full lg:w-auto flex items-center justify-center group/btn">
                    REGISTER_NOW
                    <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
