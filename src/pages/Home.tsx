import { motion } from 'motion/react';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { Countdown } from '../components/Countdown';
import { ProjectCard } from '../components/ProjectCard';
import { PROJECTS, EVENTS } from '../data/constants';
import { Link } from 'react-router-dom';
import { ChevronRight, Terminal, Shield, Cpu, Globe } from 'lucide-react';

export const Home = () => {
  return (
    <div className="pb-20">
      <Hero />
      
      <Stats />

      {/* Features Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">
              CORE_COMPETENCIES
            </h2>
            <p className="opacity-40 font-mono text-sm max-w-xl mx-auto">
              Our club focuses on the most critical areas of modern technology and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Cyber Security',
                desc: 'From penetration testing to defensive architecture, we master the art of digital security.',
                icon: Shield,
                color: 'text-hacker-green'
              },
              {
                title: 'Systems Design',
                desc: 'Building scalable, high-performance systems and exploring low-level architecture.',
                icon: Cpu,
                color: 'text-blue-400'
              },
              {
                title: 'Web 3.0',
                desc: 'Exploring decentralized protocols, smart contracts, and the future of the internet.',
                icon: Globe,
                color: 'text-purple-400'
              }
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-2xl border border-white/5 hover:border-hacker-green/20 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${feature.color}`}>
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-mono font-bold mb-4">{feature.title}</h3>
                <p className="opacity-50 text-sm font-mono leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-20 bg-hacker-green/5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Countdown targetDate={EVENTS[0].date} title={EVENTS[0].title} />
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-2">
                FEATURED_PROJECTS
              </h2>
              <p className="opacity-40 font-mono text-sm">
                Innovative solutions built by our talented members.
              </p>
            </div>
            <Link to="/projects" className="text-hacker-green font-mono text-sm flex items-center hover:underline">
              VIEW_ALL_PROJECTS <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="glass p-8 md:p-12 rounded-3xl neon-border relative overflow-hidden">
             {/* Background Glow */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-hacker-green/20 blur-[100px]"></div>
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-hacker-blue/20 blur-[100px]"></div>
            
            <h2 className="text-2xl md:text-5xl font-bold mb-6 tracking-tighter break-words">
              READY_TO_JOIN_THE_ELITE?
            </h2>
            <p className="opacity-60 font-mono mb-10 max-w-lg mx-auto text-sm md:text-base">
              Join a community that challenges you, supports you, and helps you build the future. No experience required, just passion.
            </p>
            <Link to="/join" className="btn-primary inline-flex items-center text-sm md:text-base">
              INITIALIZE_APPLICATION <ChevronRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
