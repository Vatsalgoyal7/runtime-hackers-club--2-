import { motion } from 'motion/react';
import { Terminal, Shield, Users, Rocket, Target, Zap } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">
                OUR_MISSION_STATEMENT
              </h1>
              <div className="space-y-6 opacity-60 font-mono leading-relaxed">
                <p>
                  Runtime Hackers Club was founded with a single goal: to bridge the gap between theoretical computer science and real-world application.
                </p>
                <p>
                  We believe that the best way to learn is by doing. Our community provides the resources, mentorship, and environment for students to experiment, fail fast, and build remarkable things.
                </p>
                <p>
                  Whether it's securing a network, building a decentralized app, or optimizing a kernel, we approach every challenge with curiosity and technical rigor.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="aspect-square glass rounded-3xl neon-border flex items-center justify-center p-12">
                <Terminal className="text-hacker-green w-full h-full opacity-20 absolute" />
                <div className="relative z-10 space-y-4 text-center">
                  <div className="text-6xl font-bold text-hacker-green">2022</div>
                  <div className="text-xl font-mono uppercase tracking-widest">ESTABLISHED_PROTOCOL</div>
                </div>
              </div>
              {/* Decorative Blobs */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-hacker-green/20 blur-3xl rounded-full"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-hacker-blue/20 blur-3xl rounded-full"></div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter">CORE_VALUES</h2>
            <p className="opacity-40 font-mono text-sm">The principles that guide our community.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Innovation', icon: Rocket, desc: 'We don\'t just follow trends; we aim to set them by exploring emerging technologies.' },
              { title: 'Integrity', icon: Shield, desc: 'Ethics are at the heart of everything we do, especially in security research.' },
              { title: 'Collaboration', icon: Users, desc: 'Knowledge is meant to be shared. We grow faster when we work together.' },
              { title: 'Excellence', icon: Target, desc: 'We strive for the highest quality in our code, designs, and research.' },
              { title: 'Agility', icon: Zap, desc: 'The tech world moves fast. We stay ahead by being adaptable and quick to learn.' },
              { title: 'Curiosity', icon: Terminal, desc: 'We never stop asking "how does this work?" and "can we make it better?"' }
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-2xl border border-white/5 hover:border-hacker-green/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-hacker-green/10 flex items-center justify-center text-hacker-green mb-6">
                  <value.icon size={24} />
                </div>
                <h3 className="text-xl font-mono font-bold mb-4">{value.title}</h3>
                <p className="opacity-50 text-sm font-mono leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
