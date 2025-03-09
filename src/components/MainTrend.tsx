
import { ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

export function MainTrend() {
  return (
    <motion.div 
      className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-100 mb-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <div className="flex items-center gap-2">
        <ArrowUp className="text-green-500 w-5 h-5" />
        <p className="font-medium">
          <span className="text-green-600">+10% </span>
          <span>d'augmentation des articles sur la data .NET</span>
        </p>
      </div>
    </motion.div>
  );
}
