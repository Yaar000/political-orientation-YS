import { LanguageSelector } from '../ui/language-selector';
import { DarkModeToggle } from '../ui/dark-mode-toggle';
import { useLanguage } from '../../hooks/use-language';
import { useDarkMode } from '../../hooks/use-dark-mode';
import { translations } from '../../lib/translations';

export function Header() {
  const { language, changeLanguage } = useLanguage();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const t = translations[language];

  return (
    <header className="bg-white dark:bg-slate-800 shadow-sm border-b border-gray-200 dark:border-slate-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            {t.headerTitle}
          </h1>
          <div className="flex items-center space-x-3">
            <LanguageSelector 
              language={language} 
              onLanguageChange={changeLanguage} 
            />
            <DarkModeToggle 
              isDarkMode={isDarkMode} 
              onToggle={toggleDarkMode} 
            />
          </div>
        </div>
      </div>
    </header>
  );
}
