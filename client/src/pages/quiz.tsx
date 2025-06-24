import { ProgressBar } from '../components/quiz/progress-bar';
import { QuestionCard } from '../components/quiz/question-card';
import { Question, Language } from '../types/quiz';

interface QuizProps {
  language: Language;
  currentQuestion: Question;
  currentQuestionIndex: number;
  totalQuestions: number;
  progress: number;
  onAnswer: (score: number) => void;
  onBack: () => void;
  canGoBack: boolean;
}

export function Quiz({ 
  language, 
  currentQuestion, 
  currentQuestionIndex, 
  totalQuestions, 
  progress, 
  onAnswer, 
  onBack, 
  canGoBack 
}: QuizProps) {
  return (
    <div>
      <ProgressBar
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={totalQuestions}
        progress={progress}
        language={language}
      />
      
      <QuestionCard
        question={currentQuestion}
        onAnswer={onAnswer}
        onBack={onBack}
        canGoBack={canGoBack}
      />
    </div>
  );
}
