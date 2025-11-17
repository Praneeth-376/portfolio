import { motion } from 'framer-motion';
import { Code, Rocket, Users, Award } from 'lucide-react';
import { resume } from '../data/resume';

const About = () => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '10+' },
    { icon: Rocket, label: 'Technologies', value: '15+' },
    { icon: Users, label: 'Clients / Team Projects', value: '3+' },
    { icon: Award, label: 'Achievements', value: '2+' },
  ];

  const highlights = [
    {
      title: 'Problem Solver',
      description: 'Love tackling complex challenges and finding elegant solutions through code.',
    },
    {
      title: 'Fast Learner',
      description: 'Quick to adapt to new technologies and frameworks in the ever-evolving tech landscape.',
    },
    {
      title: 'Team Player',
      description: 'Experienced in collaborative development and contributing to open-source projects.',
    },
    {
      title: 'Detail-Oriented',
      description: 'Focused on writing clean, maintainable code with proper documentation.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="section-container bg-dark-900/50">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto">
            Get to know more about who I am and what I do
          </p>
        </motion.div>

        {/* Two Column Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">

          {/* Left Column – Image + Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-700/20 border border-primary-800/30 overflow-hidden">
                <img
                  src=""
                  alt="Profile"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl" />
            </div>

            {/* Bio Card */}
            <div className="card p-6">
              <h3 className="text-xl font-bold text-dark-50 mb-3">Quick Bio</h3>
              <p className="text-dark-300 leading-relaxed">
                {resume.bio}
              </p>
            </div>
          </motion.div>

          {/* Right Column – Highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-dark-50 mb-6">
                What I Bring
              </h3>

              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="card p-5 hover:border-primary-800/50 transition-colors"
                  >
                    <h4 className="font-semibold text-dark-50 mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-dark-400 text-sm">
                      {highlight.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-6 text-center hover:scale-105 transition-transform"
              >
                <div className="w-12 h-12 bg-primary-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary-400" />
                </div>

                {/* FIXED VALUE SECTION */}
                <div className="text-3xl font-bold text-dark-50 mb-1">
                  {stat.value}
                </div>

                <div className="text-sm text-dark-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
