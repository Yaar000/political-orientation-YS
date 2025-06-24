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
      className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-4 sm:p-6 mb-6 w-full max-w-full overflow-hidden"
    >
      {/* Question Header */}
      <div className="mb-6 w-full">
        <div className="flex justify-between items-start gap-3 w-full">
          <div className="flex-1 min-w-0 pr-2">
            <h3 className="text-base sm:text-lg font-bold leading-relaxed break-words-enhanced break-cjk w-full">
              {question.text}
            </h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            disabled={!canGoBack}
            className="flex-shrink-0 p-2 text-gray-500 hover:text-gray-700 dark:text-slate-400 dark:hover:text-slate-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Answer Options */}
      <div className="space-y-3 w-full">
        {question.answers.map((answer, index) => (
          <Button
            key={index}
            variant="ghost"
            onClick={() => onAnswer(answer.score)}
            className="w-full text-left p-3 sm:p-4 h-auto border-2 border-gray-200 dark:border-slate-600 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-200 group block"
          >
            <div className="w-full">
              <div className="flex items-start justify-between w-full gap-3">
                <div className="flex-1 min-w-0">
                  <span className="text-sm sm:text-base text-gray-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 break-words-enhanced break-cjk leading-normal block text-left w-full">
                    {answer.text}
                  </span>
                </div>
                <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0 mt-0.5" />
              </div>
            </div>
          </Button>
        ))}
      </div>
    </motion.div>
  );
}
