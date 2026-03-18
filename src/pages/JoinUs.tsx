import { motion } from 'motion/react';
import { useState, FormEvent } from 'react';
import { ChevronRight, Terminal, Shield, Zap, CheckCircle } from 'lucide-react';

export const JoinUs = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    github: '',
    skills: '',
    reason: ''
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter"
          >
            JOIN_THE_NETWORK
          </motion.h1>
          <p className="opacity-40 font-mono text-sm">
            Step {step} of 3: {step === 1 ? 'Personal Info' : step === 2 ? 'Technical Profile' : 'Confirmation'}
          </p>
        </div>

        <div className="glass p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden">
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
            <motion.div
              initial={{ width: '33.33%' }}
              animate={{ width: `${(step / 3) * 100}%` }}
              className="h-full bg-hacker-green shadow-[0_0_10px_#00cc33]"
            />
          </div>

          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <label className="text-xs font-mono opacity-40 uppercase tracking-widest">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-mono focus:outline-none focus:border-hacker-green transition-colors"
                  placeholder="Vatsal Goyal"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono opacity-40 uppercase tracking-widest">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-mono focus:outline-none focus:border-hacker-green transition-colors"
                  placeholder="vatsalgoyal778@gmail.com"
                />
              </div>
              <button onClick={nextStep} className="btn-primary w-full flex items-center justify-center">
                CONTINUE_TO_TECH_PROFILE <ChevronRight className="ml-2" />
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <label className="text-xs font-mono opacity-40 uppercase tracking-widest">GitHub Username</label>
                <input
                  type="text"
                  value={formData.github}
                  onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-mono focus:outline-none focus:border-hacker-green transition-colors"
                  placeholder="github.com/username"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono opacity-40 uppercase tracking-widest">Primary Skills (Comma separated)</label>
                <input
                  type="text"
                  value={formData.skills}
                  onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-mono focus:outline-none focus:border-hacker-green transition-colors"
                  placeholder="Python, React, Reverse Engineering"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono opacity-40 uppercase tracking-widest">Why do you want to join?</label>
                <textarea
                  rows={4}
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-mono focus:outline-none focus:border-hacker-green transition-colors resize-none"
                  placeholder="Tell us about your passion..."
                />
              </div>
              <div className="flex gap-4">
                <button onClick={prevStep} className="btn-secondary flex-1">BACK</button>
                <button onClick={handleSubmit} className="btn-primary flex-[2]">SUBMIT_APPLICATION</button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-hacker-green/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="text-hacker-green" size={48} />
              </div>
              <h2 className="text-3xl font-bold mb-4 tracking-tighter">APPLICATION_SUBMITTED</h2>
              <p className="opacity-60 font-mono mb-8 max-w-md mx-auto">
                Your credentials have been received. Our recruitment protocols are now analyzing your profile. Expect a transmission within 48-72 hours.
              </p>
              <button
                onClick={() => window.location.href = '/'}
                className="btn-secondary"
              >
                RETURN_TO_HOME
              </button>
            </motion.div>
          )}
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { title: 'Mentorship', icon: Shield, desc: 'Learn from senior members and industry experts.' },
            { title: 'Resources', icon: Zap, desc: 'Access to premium tools, servers, and learning materials.' },
            { title: 'Network', icon: Terminal, desc: 'Connect with a global community of hackers and devs.' }
          ].map((benefit) => (
            <div key={benefit.title} className="glass p-6 rounded-2xl border border-white/5 text-center">
              <benefit.icon className="text-hacker-green mx-auto mb-4" size={24} />
              <h3 className="font-mono font-bold mb-2">{benefit.title}</h3>
              <p className="opacity-40 text-xs font-mono">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
