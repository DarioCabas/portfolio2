import { useEffect, RefObject } from 'react';

interface UseOnClickOutsideProps {
  ref: RefObject<HTMLElement>;
  handler: (event: MouseEvent | TouchEvent) => void;
}

const useOnClickOutside = ({ ref, handler }: UseOnClickOutsideProps) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
