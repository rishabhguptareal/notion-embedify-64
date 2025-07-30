
import { useEffect, useState } from 'react';

/**
 * Custom hook for delayed rendering with fade-in animation
 */
export function useFadeIn(delay: number = 100) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  return {
    isVisible,
    className: isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
  };
}

/**
 * Custom hook for sequential animation of multiple elements
 */
export function useSequentialAnimation(itemCount: number, baseDelay: number = 100, interval: number = 50) {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(itemCount).fill(false));
  
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    for (let i = 0; i < itemCount; i++) {
      const timer = setTimeout(() => {
        setVisibleItems(prev => {
          const newState = [...prev];
          newState[i] = true;
          return newState;
        });
      }, baseDelay + (i * interval));
      
      timers.push(timer);
    }
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [itemCount, baseDelay, interval]);
  
  const getItemProps = (index: number) => {
    return {
      className: visibleItems[index] ? 'animate-slide-up opacity-100' : 'opacity-0',
    };
  };
  
  return { getItemProps };
}

/**
 * Helper for staggered animation of list items
 */
export function getStaggeredDelay(index: number, baseDelay: number = 100, interval: number = 50) {
  return {
    style: {
      animationDelay: `${baseDelay + index * interval}ms`
    }
  };
}
