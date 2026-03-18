import { motion } from 'motion/react';
import { PROJECTS } from '../data/constants';
import { ProjectCard } from '../components/ProjectCard';
import { Search, Filter } from 'lucide-react';
import { useState } from 'react';

export const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = PROJECTS.filter(project => 
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter"
          >
            PROJECT_ARCHIVE
          </motion.h1>
          <p className="opacity-40 font-mono text-sm max-w-xl mx-auto">
            A showcase of our technical prowess and creative problem-solving.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 opacity-20" size={20} />
            <input
              type="text"
              placeholder="SEARCH_BY_TITLE_OR_TECH..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 font-mono focus:outline-none focus:border-hacker-green transition-colors"
            />
          </div>
          <button className="btn-secondary flex items-center justify-center space-x-2">
            <Filter size={18} />
            <span>FILTER_BY_CATEGORY</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="opacity-20 font-mono text-xl">NO_PROJECTS_FOUND_IN_DATABASE</div>
          </div>
        )}
      </div>
    </div>
  );
};
