import { useRef } from "react";
import { useReducedMotion } from "framer-motion";

export function useTilt(maxTilt = 8) {
  const ref = useRef(null);
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return { ref };

  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateX = ((y - midY) / midY) * -maxTilt;
    const rotateY = ((x - midX) / midX) * maxTilt;

    /* Shadow sync */
    const shadowX = (-rotateY * 4).toFixed(2);
    const shadowY = (rotateX * 4).toFixed(2);

    el.style.transform = `
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;

    el.style.boxShadow = `
      ${shadowX}px ${shadowY}px 40px rgba(0,0,0,0.45)
    `;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;

    el.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg)";
    el.style.boxShadow =
      "0 20px 40px rgba(0,0,0,0.45)";
  };

  return {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };
}
