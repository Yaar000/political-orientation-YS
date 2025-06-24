import { Header } from './components/layout/header';
import { Home } from './pages/home';
import { Quiz } from './pages/quiz';
import { Results } from './pages/results';
import { LoadingScreen } from './components/quiz/loading-screen';
import { useLanguage } from './hooks/use-language';
import { useQuiz } from './hooks/use-quiz';
import { results, calculatePoliticalOrientation } from './lib/results';
import { Toaster } from './components/ui/toaster';
import { TooltipProvider } from './components/ui/tooltip';

function App() {
  const { language } = useLanguage();
  
  const { 
    quizState, 
    startQuiz, 
    selectAnswer, 
    goBack, 
    restartQuiz, 
    getTotalScore, 
    getProgress 
  } = useQuiz(language);

  const renderCurrentScreen = () => {
    switch (quizState.currentScreen) {
      case 'welcome':
        return <Home language={language} onStartQuiz={startQuiz} />;
      
      case 'quiz':
        const currentQuestion = quizState.selectedQuestions[quizState.currentQuestionIndex];
        return (
          <Quiz
            language={language}
            currentQuestion={currentQuestion}
            currentQuestionIndex={quizState.currentQuestionIndex}
            totalQuestions={15}
            progress={getProgress()}
            onAnswer={selectAnswer}
            onBack={goBack}
            canGoBack={quizState.currentQuestionIndex > 0}
          />
        );
      
      case 'loading':
        return <LoadingScreen language={language} />;
      
      case 'results':
        const totalScore = getTotalScore();
        const orientationType = calculatePoliticalOrientation(totalScore);
        const result = results[language][orientationType];
        return (
          <Results
            language={language}
            result={result}
            onRestart={restartQuiz}
          />
        );
      
      default:
        return <Home language={language} onStartQuiz={startQuiz} />;
    }
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-slate-200 transition-colors duration-300">
        <Header />
        
        <main className="max-w-4xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8 w-full">
          <div className="w-full max-w-full">
            {renderCurrentScreen()}
          </div>
        </main>
        
        <Toaster />
      </div>
    </TooltipProvider>
  );
}

export default App;
