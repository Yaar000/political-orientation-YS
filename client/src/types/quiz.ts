export interface Answer {
  text: string;
  score: number;
}

export interface Question {
  text: string;
  answers: Answer[];
}

export interface PoliticalResult {
  type: string;
  icon: string;
  description: string;
  characteristics: string[];
  values: string[];
}

export type Language = 'ko' | 'en' | 'ja';

export type QuizScreen = 'welcome' | 'quiz' | 'loading' | 'results';

export interface QuizState {
  currentScreen: QuizScreen;
  currentQuestionIndex: number;
  selectedQuestions: Question[];
  answers: number[];
  isLoading: boolean;
}
