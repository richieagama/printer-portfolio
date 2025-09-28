// hooks/useTypingAnimation.js
import { useState, useEffect } from 'react';

export const useTypingAnimation = (text, speed = 50, delay = 0) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayedText('');
    setIsComplete(false);
    
    const timer = setTimeout(() => {
      if (displayedText.length < text.length) {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      } else if (!isComplete) {
        setIsComplete(true);
      }
    }, displayedText.length === 0 ? delay : speed);

    return () => clearTimeout(timer);
  }, [displayedText, text, speed, delay, isComplete]);

  return { displayedText, isComplete };
};