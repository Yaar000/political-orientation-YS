import { Button } from '../components/ui/button';
import { Play, Clock, Shuffle, Share2 } from 'lucide-react';
import { translations } from '../lib/translations';
import { Language } from '../types/quiz';
import { motion } from 'framer-motion';

interface HomeProps {
  language: Language;
  onStartQuiz: () => void;
}

export function Home({ language, onStartQuiz }: HomeProps) {
  const t = translations[language];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center"
    >
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 mb-8">
        <div className="mb-6">
          <div className="text-6xl mb-4">🗳️</div>
          <h2 className="text-3xl font-bold mb-4">{t.welcomeTitle}</h2>
          <div 
            className="text-gray-600 dark:text-slate-400 text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t.welcomeDescription }}
          />
        </div>
        
        <div className="space-y-4 text-left max-w-md mx-auto mb-8">
          <div className="flex items-center text-gray-700 dark:text-slate-300">
            <Clock className="text-blue-500 mr-3 h-5 w-5" />
            <span>{t.durationText}</span>
          </div>
          <div className="flex items-center text-gray-700 dark:text-slate-300">
            <Shuffle className="text-blue-500 mr-3 h-5 w-5" />
            <span>{t.randomText}</span>
          </div>
          <div className="flex items-center text-gray-700 dark:text-slate-300">
            <Share2 className="text-blue-500 mr-3 h-5 w-5" />
            <span>{t.shareText}</span>
          </div>
        </div>
        
        <Button 
          onClick={onStartQuiz}
          size="lg"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <Play className="mr-2 h-5 w-5" />
          {t.startText}
        </Button>
      </div>
    </motion.div>
  );
}
