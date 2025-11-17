import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Tag from '../components/Tag';
import Button from '../components/Button';

const ProjectCard = ({ project, onViewDetails }) => {
  return (
    <motion.div
      className="card p-6 group hover:border-primary-800/50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-lg mb-5 aspect-video bg-dark-800">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex gap-2">
            {project.repo && (
              <motion.a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-5 h-5 text-dark-200" />
              </motion.a>
            )}
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-5 h-5 text-dark-200" />
              </motion.a>
            )}
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="space-y-4">
        {/* Category & Year */}
        <div className="flex items-center justify-between">
          <Tag variant="primary">{project.category}</Tag>
          <span className="text-sm text-dark-500">{project.year}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-dark-50 group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-dark-400 text-sm line-clamp-2">
          {project.short}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech, index) => (
            <Tag key={index} variant="default">
              {tech}
            </Tag>
          ))}
          {project.stack.length > 4 && (
            <Tag variant="default">+{project.stack.length - 4}</Tag>
          )}
        </div>

        {/* View Details Button */}
        <Button
          variant="ghost"
          size="sm"
          icon={ArrowRight}
          iconPosition="right"
          onClick={() => onViewDetails(project)}
          className="w-full justify-center mt-2"
        >
          View Details
        </Button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;