import { useState, useCallback, useEffect } from 'react';
import { Language } from '../types/quiz';

// Global state management
let globalLanguageState: Language = (() => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('preferred-language');
    return (saved as Language) || 'ko';
  }
  return 'ko';
})();

const listeners: Set<(language: Language) => void> = new Set();

// Custom event for language changes
const LANGUAGE_CHANGE_EVENT = 'languageChange';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(globalLanguageState);

  useEffect(() => {
    const handleLanguageChange = (event: CustomEvent<Language>) => {
      setLanguage(event.detail);
    };

    window.addEventListener(LANGUAGE_CHANGE_EVENT, handleLanguageChange as EventListener);
    
    return () => {
      window.removeEventListener(LANGUAGE_CHANGE_EVENT, handleLanguageChange as EventListener);
    };
  }, []);

  const changeLanguage = useCallback((newLanguage: Language) => {
    if (newLanguage === globalLanguageState) return;
    
    globalLanguageState = newLanguage;
    localStorage.setItem('preferred-language', newLanguage);
    document.documentElement.lang = newLanguage;
    
    // Dispatch custom event for immediate updates
    const event = new CustomEvent(LANGUAGE_CHANGE_EVENT, { detail: newLanguage });
    window.dispatchEvent(event);
  }, []);

  return { language, changeLanguage };
}
