import { translations } from '../../lib/translations';
import { Language } from '../../types/quiz';

interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
  progress: number;
  language: Language;
}

export function ProgressBar({ currentQuestion, totalQuestions, progress, language }: ProgressBarProps) {
  const t = translations[language];

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-slate-300">
          {t.progressText}
        </span>
        <span className="text-sm font-medium text-blue-500">
          {currentQuestion} / {totalQuestions}
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3">
        <div 
          className="bg-blue-500 h-3 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
