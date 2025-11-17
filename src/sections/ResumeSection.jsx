import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Download, Calendar, MapPin } from 'lucide-react';
import { resume } from '../data/resume';
import Button from '../components/Button';

const ResumeSection = () => {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="resume" className="section-container">
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
            Resume & <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto mb-8">
            My educational background and professional journey
          </p>
          <Button
            variant="primary"
            icon={Download}
            iconPosition="left"
            href="/resume.pdf"
          >
            Download Full Resume
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center shadow-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-dark-50">Education</h3>
            </div>

            <div className="space-y-6">
              {resume.education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card p-6 border-l-4 border-primary-600"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <h4 className="text-lg font-bold text-dark-50 mb-1">
                      {edu.degree}
                    </h4>
                    <span className="text-sm text-primary-400 font-medium">
                      {edu.years}
                    </span>
                  </div>
                  <p className="text-dark-300 font-medium mb-2">
                    {edu.institution}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-dark-400 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
                  </div>
                  {edu.gpa && (
                    <p className="text-dark-400 text-sm mb-3">
                      GPA: <span className="font-semibold text-primary-400">{edu.gpa}</span>
                    </p>
                  )}
                  {edu.percentage && (
                    <p className="text-dark-400 text-sm mb-3">
                      Percentage: <span className="font-semibold text-primary-400">{edu.percentage}</span>
                    </p>
                  )}
                  {edu.achievements && (
                    <ul className="space-y-1 mt-3">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-dark-400 flex items-start gap-2">
                          <span className="text-primary-500 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center shadow-lg">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-dark-50">Experience</h3>
            </div>

            <div className="space-y-6">
              {resume.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card p-6 border-l-4 border-green-600"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-dark-50 mb-1">
                        {exp.title}
                      </h4>
                      <p className="text-dark-300 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm text-green-400 font-medium mt-2 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-dark-400 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                  <p className="text-dark-400 mb-3">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-dark-400 flex items-start gap-2">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-dark-800 border border-dark-700 rounded-full text-xs text-dark-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications & Achievements */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-dark-50">Certifications</h3>
            </div>
            <div className="space-y-4">
              {resume.certifications.map((cert, index) => (
                <motion.a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-4 block hover:border-purple-800/50 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <h4 className="font-semibold text-dark-50 mb-1">{cert.name}</h4>
                  <p className="text-sm text-dark-400 mb-1">{cert.issuer}</p>
                  <div className="flex items-center gap-2 text-xs text-dark-500">
                    <Calendar className="w-3 h-3" />
                    <span>{cert.date}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg flex items-center justify-center shadow-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-dark-50">Achievements</h3>
            </div>
            <div className="space-y-3">
              {resume.achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="card p-4 flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-orange-500 text-xl mt-0.5">🏆</span>
                  <p className="text-dark-300">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;