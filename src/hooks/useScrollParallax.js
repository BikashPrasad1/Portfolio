import { useEffect } from "react";
import { useReducedMotion } from "framer-motion";

export function useScrollParallax(ref, intensity = 0.15) {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !ref?.current) return;

    const el = ref.current;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const offset = -rect.top * intensity;

      el.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [reduceMotion, ref, intensity]);
}
