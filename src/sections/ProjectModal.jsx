import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle } from 'lucide-react';
import Tag from '../components/Tag';
import Button from '../components/Button';

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-dark-950/90 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="min-h-full flex items-center justify-center p-4">
              <motion.div
                className="bg-dark-900 border border-dark-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-dark-800 hover:bg-dark-700 text-dark-300 hover:text-dark-50 transition-colors z-10"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Project Images */}
                <div className="relative aspect-video bg-dark-800 rounded-t-2xl overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  {/* Header */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Tag variant="primary">{project.category}</Tag>
                      <span className="text-dark-500">{project.year}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-dark-50">
                      {project.title}
                    </h2>
                    <p className="text-dark-300 text-lg">
                      {project.short}
                    </p>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-xl font-semibold text-dark-50 mb-3">
                      About This Project
                    </h3>
                    <p className="text-dark-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  {project.features && (
                    <div>
                      <h3 className="text-xl font-semibold text-dark-50 mb-3">
                        Key Features
                      </h3>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {project.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-dark-400"
                          >
                            <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-xl font-semibold text-dark-50 mb-3">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, index) => (
                        <Tag key={index} variant="default">
                          {tech}
                        </Tag>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    {project.live && (
                      <Button
                        variant="primary"
                        icon={ExternalLink}
                        iconPosition="right"
                        href={project.live}
                      >
                        View Live Demo
                      </Button>
                    )}
                    {project.repo && (
                      <Button
                        variant="secondary"
                        icon={Github}
                        iconPosition="left"
                        href={project.repo}
                      >
                        View Source Code
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;