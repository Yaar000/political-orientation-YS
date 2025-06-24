import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { Language } from '../../types/quiz';

interface LanguageSelectorProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

export function LanguageSelector({ language, onLanguageChange }: LanguageSelectorProps) {
  return (
    <Select value={language} onValueChange={onLanguageChange}>
      <SelectTrigger className="w-24 bg-gray-100 dark:bg-slate-700 border-gray-300 dark:border-slate-600">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ko">한국어</SelectItem>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="ja">日本語</SelectItem>
      </SelectContent>
    </Select>
  );
}
