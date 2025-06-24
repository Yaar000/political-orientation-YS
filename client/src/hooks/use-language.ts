import { useState } from 'react';
import { Language } from '../types/quiz';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('preferred-language');
    return (saved as Language) || 'ko';
  });

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('preferred-language', newLanguage);
    
    // Force immediate re-render by updating document language
    document.documentElement.lang = newLanguage;
  };

  return { language, changeLanguage };
}
