// Declare Kakao SDK types
declare global {
  interface Window {
    Kakao?: {
      init: (appKey: string) => void;
      Link: {
        sendDefault: (settings: any) => void;
      };
    };
  }
}

export function shareResult(platform: string, resultType: string, url: string, language: string = 'ko') {
  let text = '';
  
  // Language-specific share messages
  switch (language) {
    case 'ko':
      text = `나는 '${resultType}'입니다! 정치 성향 테스트 해보세요:`;
      break;
    case 'en':
      text = `I am a '${resultType}'! Take the Political Orientation Quiz:`;
      break;
    case 'ja':
      text = `私は「${resultType}」です！政治傾向テストをやってみてください：`;
      break;
    default:
      text = `I am a '${resultType}'! Take the Political Orientation Quiz:`;
  }
  
  switch (platform) {
    case 'kakao':
      // Use KakaoTalk sharing - simplified approach for better compatibility
      const kakaoText = `${text} ${url}`;
      
      // Use web-based KakaoTalk sharing which works without app key
      if (/android|iphone|ipad|ipod/i.test(navigator.userAgent)) {
        // Mobile - try to open KakaoTalk app
        window.location.href = `kakaotalk://msg?text=${encodeURIComponent(kakaoText)}`;
        
        // Fallback after short delay if app doesn't open
        setTimeout(() => {
          window.open(`https://sharer.kakao.com/talk/friends/?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`);
        }, 500);
      } else {
        // Desktop - open web sharing
        window.open(`https://sharer.kakao.com/talk/friends/?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`);
      }
      break;
    case 'line':
      window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`);
      break;
    case 'whatsapp':
      window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`);
      break;
    case 'wechat':
      // WeChat sharing requires their SDK, so we'll copy to clipboard
      navigator.clipboard.writeText(text + ' ' + url);
      break;
  }
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy text: ', err);
    return false;
  }
}
