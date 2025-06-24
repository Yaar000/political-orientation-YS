import { Button } from '../ui/button';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Question } from '../../types/quiz';
import { motion } from 'framer-motion';

interface QuestionCardProps {
  question: Question;
  onAnswer: (score: number) => void;
  onBack: () => void;
  canGoBack: boolean;
}

export function QuestionCard({ question, onAnswer, onBack, canGoBack }: QuestionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 sm:p-8 mb-6 max-w-full"
    >
      <div className="flex justify-between items-start mb-6 gap-4">
        <h3 className="text-lg sm:text-xl font-bold leading-relaxed flex-1 break-words-enhanced break-cjk pr-2 max-w-full overflow-hidden">
          {question.text}
        </h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          disabled={!canGoBack}
          className="flex-shrink-0 p-2 text-gray-500 hover:text-gray-700 dark:text-slate-400 dark:hover:text-slate-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="space-y-3">
        {question.answers.map((answer, index) => (
          <Button
            key={index}
            variant="ghost"
            onClick={() => onAnswer(answer.score)}
            className="w-full text-left p-4 h-auto border-2 border-gray-200 dark:border-slate-600 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-200 group min-h-[3.5rem] overflow-hidden"
          >
            <div className="flex items-start justify-between w-full gap-3">
              <span className="text-gray-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 break-words-enhanced break-cjk flex-1 text-left leading-normal">
                {answer.text}
              </span>
              <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0 mt-0.5" />
            </div>
          </Button>
        ))}
      </div>
    </motion.div>
  );
}
