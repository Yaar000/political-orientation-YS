import { Button } from '../components/ui/button';
import { RotateCcw, MessageCircle, Share, Link2, Check } from 'lucide-react';
import { PoliticalResult, Language } from '../types/quiz';
import { translations } from '../lib/translations';
import { shareResult, copyToClipboard } from '../lib/share';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ResultsProps {
  language: Language;
  result: PoliticalResult;
  onRestart: () => void;
}

export function Results({ language, result, onRestart }: ResultsProps) {
  const t = translations[language];
  const [copySuccess, setCopySuccess] = useState(false);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    shareResult(platform, result.type, url);
  };

  const handleCopyLink = async () => {
    const success = await copyToClipboard(window.location.href);
    if (success) {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="animate-fade-in"
    >
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 sm:p-8 mb-6">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{result.icon}</div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">{t.resultTitle}</h2>
          <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-6 py-3 rounded-full text-lg font-semibold mb-4">
            {result.type}
          </div>
          <p className="text-gray-600 dark:text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            {result.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-lg mb-3">{t.characteristicsTitle}</h4>
            <ul className="space-y-2 text-gray-700 dark:text-slate-300">
              {result.characteristics.map((char, index) => (
                <li key={index} className="flex items-start">
                  <Check className="text-green-500 mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                  {char}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-50 dark:bg-slate-700 rounded-xl p-6">
            <h4 className="font-semibold text-lg mb-3">{t.valuesTitle}</h4>
            <ul className="space-y-2 text-gray-700 dark:text-slate-300">
              {result.values.map((value, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">❤️</span>
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-slate-700 pt-6">
          <h4 className="font-semibold text-lg mb-4 text-center">{t.shareTitle}</h4>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <Button
              onClick={() => handleShare('kakao')}
              className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              카카오톡
            </Button>
            
            <Button
              onClick={() => handleShare('line')}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Line
            </Button>
            
            <Button
              onClick={() => handleShare('whatsapp')}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Share className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
            
            <Button
              onClick={() => handleShare('wechat')}
              className="bg-green-400 hover:bg-green-500 text-green-900"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WeChat
            </Button>
            
            <Button
              onClick={handleCopyLink}
              variant="secondary"
              className={copySuccess ? "bg-green-500 hover:bg-green-600 text-white" : ""}
            >
              {copySuccess ? <Check className="mr-2 h-4 w-4" /> : <Link2 className="mr-2 h-4 w-4" />}
              {copySuccess ? t.copied : t.copyText}
            </Button>
          </div>
        </div>

        <div className="text-center">
          <Button 
            onClick={onRestart}
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-xl"
          >
            <RotateCcw className="mr-2 h-5 w-5" />
            {t.restartText}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
