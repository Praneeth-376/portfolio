import { motion } from 'framer-motion';
import { Code, Palette, Database, Cloud, GitBranch, Wrench } from 'lucide-react';
import { resume } from '../data/resume';
import Tag from '../components/Tag';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: resume.skills.languages,
      color: 'from-blue-500 to-blue-700',
    },
    {
      title: 'Frontend',
      icon: Palette,
      skills: resume.skills.frontend,
      color: 'from-purple-500 to-purple-700',
    },
    {
      title: 'Backend',
      icon: Database,
      skills: resume.skills.backend,
      color: 'from-green-500 to-green-700',
    },
    {
      title: 'Database',
      icon: Database,
      skills: resume.skills.database,
      color: 'from-orange-500 to-orange-700',
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: resume.skills.tools,
      color: 'from-red-500 to-red-700',
    },
    {
      title: 'Other Skills',
      icon: GitBranch,
      skills: resume.skills.other,
      color: 'from-pink-500 to-pink-700',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="section-container bg-dark-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing products
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-6 hover:border-primary-800/50 transition-colors"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-50">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.05 }}
                    >
                      <Tag variant="default">{skill}</Tag>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Skills Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="card p-8 max-w-3xl mx-auto">
            <p className="text-dark-300 text-lg leading-relaxed">
              I'm constantly learning and expanding my skillset. Currently exploring{' '}
              <span className="text-primary-400 font-semibold">AI/ML</span>,{' '}
              <span className="text-primary-400 font-semibold">Web3</span>, and{' '}
              <span className="text-primary-400 font-semibold">Cloud Architecture</span>{' '}
              to stay ahead in the ever-evolving tech landscape.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;