import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0a0a0a] px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-xl"
      >
        <h1 className="text-7xl font-extrabold text-blue-600 mb-6">404</h1>

        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-500 dark:text-gray-400 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>

        <Link
          to="/"
          className="
            inline-block px-6 py-3 rounded-xl
            bg-blue-600 hover:bg-blue-500
            text-white font-semibold
            shadow-lg shadow-blue-500/20
            transition-all active:scale-95
          "
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;