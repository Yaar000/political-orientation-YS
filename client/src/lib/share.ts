export function shareResult(platform: string, resultType: string, url: string) {
  const text = `I am a '${resultType}'! Take the Political Orientation Quiz:`;
  
  switch (platform) {
    case 'kakao':
      window.open(`https://story.kakao.com/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`);
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
