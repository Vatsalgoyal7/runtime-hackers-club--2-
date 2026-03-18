import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter"
          >
            ESTABLISH_CONNECTION
          </motion.h1>
          <p className="opacity-40 font-mono text-sm max-w-xl mx-auto">
            Have a question, proposal, or just want to say hello? Our protocols are open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-8">
              <div className="glass p-8 rounded-2xl border border-white/5">
                <h3 className="text-xl font-mono font-bold mb-6 text-hacker-green">CONTACT_DETAILS</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-hacker-green/10 flex items-center justify-center text-hacker-green shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-mono opacity-40 uppercase tracking-widest mb-1">Email</div>
                      <div className="font-mono">hello@runtimehackers.club</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-hacker-green/10 flex items-center justify-center text-hacker-green shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-mono opacity-40 uppercase tracking-widest mb-1">Phone</div>
                      <div className="font-mono">+91 7310698091</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-hacker-green/10 flex items-center justify-center text-hacker-green shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-xs font-mono opacity-40 uppercase tracking-widest mb-1">Location</div>
                      <div className="font-mono">IMS Engineering College, Ghaziabad</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass p-8 rounded-2xl border border-white/5">
                <h3 className="text-xl font-mono font-bold mb-6 text-hacker-green">SOCIAL_PROTOCOLS</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, link: '#', label: 'GitHub' },
                    { icon: Twitter, link: '#', label: 'Twitter' },
                    { icon: Linkedin, link: '#', label: 'LinkedIn' }
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.link}
                      className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center opacity-60 hover:bg-hacker-green hover:text-black transition-all duration-300"
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl border border-white/5 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono opacity-40 uppercase tracking-widest">Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-mono focus:outline-none focus:border-hacker-green transition-colors"
                    placeholder="Vatsal Goyal"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono opacity-40 uppercase tracking-widest">Email</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-mono focus:outline-none focus:border-hacker-green transition-colors"
                    placeholder="vatsalgoyal778@gmail.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono opacity-40 uppercase tracking-widest">Subject</label>
                <input
                  required
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-mono focus:outline-none focus:border-hacker-green transition-colors"
                  placeholder="Collaboration Inquiry"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono opacity-40 uppercase tracking-widest">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 font-mono focus:outline-none focus:border-hacker-green transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>
              <button
                disabled={status !== 'idle'}
                type="submit"
                className={`btn-primary w-full flex items-center justify-center space-x-2 ${status !== 'idle' ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {status === 'idle' && (
                  <>
                    <span>SEND_MESSAGE</span>
                    <Send size={18} />
                  </>
                )}
                {status === 'sending' && <span>TRANSMITTING...</span>}
                {status === 'sent' && <span>MESSAGE_RECEIVED</span>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
