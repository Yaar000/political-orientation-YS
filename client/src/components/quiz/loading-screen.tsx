import { motion } from 'framer-motion';
import { translations } from '../../lib/translations';
import { Language } from '../../types/quiz';

interface LoadingScreenProps {
  language: Language;
}

export function LoadingScreen({ language }: LoadingScreenProps) {
  const t = translations[language];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center"
    >
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-6"></div>
        <h3 className="text-xl font-semibold mb-2">{t.loadingTitle}</h3>
        <p className="text-gray-600 dark:text-slate-400">{t.loadingDescription}</p>
      </div>
    </motion.div>
  );
}
