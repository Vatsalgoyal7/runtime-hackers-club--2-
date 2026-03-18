import { motion } from 'motion/react';
import { useState } from 'react';

const IMAGES = [
  { id: 1, url: 'https://picsum.photos/seed/hack1/800/600', title: 'Hackathon 2025' },
  { id: 2, url: 'https://picsum.photos/seed/hack2/800/600', title: 'Workshop Session' },
  { id: 3, url: 'https://picsum.photos/seed/hack3/800/600', title: 'Team Building' },
  { id: 4, url: 'https://picsum.photos/seed/hack4/800/600', title: 'Cyber Lab' },
  { id: 5, url: 'https://picsum.photos/seed/hack5/800/600', title: 'Award Ceremony' },
  { id: 6, url: 'https://picsum.photos/seed/hack6/800/600', title: 'Late Night Coding' },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter"
          >
            VISUAL_LOGS
          </motion.h1>
          <p className="opacity-40 font-mono text-sm max-w-xl mx-auto">
            Capturing moments of innovation, collaboration, and victory.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMAGES.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedImage(img.url)}
              className="group relative aspect-video overflow-hidden rounded-xl cursor-pointer border border-white/5"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-hacker-green font-mono text-sm uppercase tracking-widest">{img.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={selectedImage}
            className="max-w-full max-h-full rounded-lg shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </div>
  );
};
