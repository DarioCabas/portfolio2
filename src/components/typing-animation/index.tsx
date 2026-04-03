import { useState, useEffect, useRef } from 'react';
import usePrefersReducedMotion from '@/hooks/use-prefers-reduced-motion';

interface TypingAnimationProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

const TypingAnimation = ({
  words,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseDuration = 1800,
}: TypingAnimationProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [displayed, setDisplayed] = useState(prefersReducedMotion ? words[0] : '');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayed(words[0]);
      return;
    }

    const currentWord = words[wordIndex];

    const tick = () => {
      if (!isDeleting) {
        setDisplayed(currentWord.slice(0, displayed.length + 1));
        if (displayed.length + 1 === currentWord.length) {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
        timeoutRef.current = setTimeout(tick, typingSpeed);
      } else {
        setDisplayed(currentWord.slice(0, displayed.length - 1));
        if (displayed.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
        timeoutRef.current = setTimeout(tick, deletingSpeed);
      }
    };

    timeoutRef.current = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration, prefersReducedMotion]);

  return (
    <span aria-label={words.join(', ')}>
      {displayed}
      <span
        aria-hidden="true"
        style={{
          display: 'inline-block',
          width: '3px',
          height: '0.85em',
          background: 'linear-gradient(135deg, #0693E3, #7C3AED)',
          marginLeft: '4px',
          verticalAlign: 'middle',
          borderRadius: '2px',
          animation: 'cursorBlink 1s step-end infinite',
        }}
      />
    </span>
  );
};

export default TypingAnimation;
