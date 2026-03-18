import { motion } from 'motion/react';
import { Github, ExternalLink, Code } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    image: string;
    link: string;
  };
}

export const ProjectCard = (props: any) => {
  const { project } = props;
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass rounded-xl overflow-hidden group border border-white/5 hover:border-hacker-green/30 transition-all duration-500"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-4 left-4 flex gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="px-2 py-1 bg-black/50 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-hacker-green rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-mono font-bold mb-2 group-hover:text-hacker-green transition-colors">
          {project.title}
        </h3>
        <p className="opacity-50 text-sm mb-6 line-clamp-2 font-mono">
          {project.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <a href="#" className="opacity-40 hover:opacity-100 transition-opacity">
              <Github size={20} />
            </a>
            <a href={project.link} className="opacity-40 hover:opacity-100 transition-opacity">
              <ExternalLink size={20} />
            </a>
          </div>
          <button className="text-hacker-green text-xs font-mono flex items-center group/btn">
            VIEW_DETAILS
            <Code className="ml-1 group-hover/btn:rotate-12 transition-transform" size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
