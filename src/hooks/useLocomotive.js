import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function useLocomotive() {
  useEffect(() => {
    const scrollEl = document.querySelector('#main-container');
    
    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: 'is-revealed',
      reloadOnContextChange: true,
    });

    // Clean up
    return () => {
      if (scroll) scroll.destroy();
    }
  }, []);
} 