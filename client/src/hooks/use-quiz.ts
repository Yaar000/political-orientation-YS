import { useState, useCallback, useEffect } from 'react';
import { QuizState, Question, QuizScreen } from '../types/quiz';
import { questions } from '../lib/questions';
import { Language } from '../types/quiz';

export function useQuiz(language: Language) {
  const [quizState, setQuizState] = useState<QuizState>({
    currentScreen: 'welcome',
    currentQuestionIndex: 0,
    selectedQuestions: [],
    answers: [],
    isLoading: false
  });

  // Force complete state reset when language changes to trigger re-render
  useEffect(() => {
    setQuizState(prev => ({
      currentScreen: 'welcome',
      currentQuestionIndex: 0,
      selectedQuestions: [],
      answers: [],
      isLoading: false
    }));
  }, [language]);

  const selectRandomQuestions = useCallback((): Question[] => {
    const availableQuestions = [...questions[language]];
    const selected: Question[] = [];
    
    // Ensure we have enough questions
    const questionCount = Math.min(20, availableQuestions.length);
    
    for (let i = 0; i < questionCount; i++) {
      const randomIndex = Math.floor(Math.random() * availableQuestions.length);
      selected.push(availableQuestions[randomIndex]);
      availableQuestions.splice(randomIndex, 1);
    }
    
    console.log(`Selected ${selected.length} questions for language ${language}`);
    return selected;
  }, [language]);

  const startQuiz = useCallback(() => {
    const selectedQuestions = selectRandomQuestions();
    console.log(`Starting quiz with ${selectedQuestions.length} questions`);
    setQuizState({
      currentScreen: 'quiz',
      currentQuestionIndex: 0,
      selectedQuestions,
      answers: [],
      isLoading: false
    });
  }, [selectRandomQuestions]);

  const selectAnswer = useCallback((score: number) => {
    setQuizState(prev => {
      const newAnswers = [...prev.answers, score];
      
      if (prev.currentQuestionIndex < prev.selectedQuestions.length - 1) {
        return {
          ...prev,
          currentQuestionIndex: prev.currentQuestionIndex + 1,
          answers: newAnswers
        };
      } else {
        // Quiz complete, show loading
        setTimeout(() => {
          setQuizState(current => ({
            ...current,
            currentScreen: 'results',
            isLoading: false
          }));
        }, 2000);
        
        return {
          ...prev,
          currentScreen: 'loading',
          answers: newAnswers,
          isLoading: true
        };
      }
    });
  }, []);

  const goBack = useCallback(() => {
    setQuizState(prev => {
      if (prev.currentQuestionIndex > 0) {
        return {
          ...prev,
          currentQuestionIndex: prev.currentQuestionIndex - 1,
          answers: prev.answers.slice(0, -1)
        };
      }
      return prev;
    });
  }, []);

  const restartQuiz = useCallback(() => {
    setQuizState({
      currentScreen: 'welcome',
      currentQuestionIndex: 0,
      selectedQuestions: [],
      answers: [],
      isLoading: false
    });
  }, []);

  const getTotalScore = useCallback(() => {
    return quizState.answers.reduce((sum, score) => sum + score, 0);
  }, [quizState.answers]);

  const getProgress = useCallback(() => {
    const totalQuestions = quizState.selectedQuestions.length;
    return totalQuestions > 0 ? ((quizState.currentQuestionIndex + 1) / totalQuestions) * 100 : 0;
  }, [quizState.currentQuestionIndex, quizState.selectedQuestions.length]);

  return {
    quizState,
    startQuiz,
    selectAnswer,
    goBack,
    restartQuiz,
    getTotalScore,
    getProgress
  };
}
