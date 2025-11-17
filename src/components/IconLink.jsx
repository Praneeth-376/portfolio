import { motion } from 'framer-motion';

const IconLink = ({ 
  href, 
  icon: Icon, 
  label, 
  className = '',
  ...props 
}) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-dark-800 border border-dark-700 text-dark-300 hover:text-primary-500 hover:border-primary-600 hover:bg-dark-700 transition-all duration-200 ${className}`}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <Icon className="w-5 h-5" />
    </motion.a>
  );
};

export default IconLink;