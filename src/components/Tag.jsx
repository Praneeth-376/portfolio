import { motion } from 'framer-motion';

const Tag = ({ children, variant = 'default', className = '', ...props }) => {
  const variants = {
    default: 'bg-dark-800 text-dark-200 border border-dark-700',
    primary: 'bg-primary-900/30 text-primary-400 border border-primary-800/50',
    success: 'bg-green-900/30 text-green-400 border border-green-800/50',
    warning: 'bg-yellow-900/30 text-yellow-400 border border-yellow-800/50',
  };
  
  return (
    <motion.span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      {...props}
    >
      {children}
    </motion.span>
  );
};

export default Tag;