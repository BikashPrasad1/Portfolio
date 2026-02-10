import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { useScrollParallax } from "../../hooks/useScrollParallax";

export default function ParallaxBlobs() {
  const containerRef = useRef(null);
  useScrollParallax(containerRef, 0.18);
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="bg-blobs">
        <span className="blob blob-pink" />
        <span className="blob blob-indigo" />
      </div>
    );
  }

  return (
    <motion.div
      ref={containerRef}
      className="bg-blobs"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Large foreground blob (slow, deep) */}
      <motion.span
        className="blob blob-pink"
        animate={{
          y: [0, -36, 0],
          x: [0, 12, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Mid-depth blob */}
      <motion.span
        className="blob blob-indigo"
        animate={{
          y: [0, 24, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Accent blobs - desktop only */}
      <motion.span
        className="blob blob-sm blob-top hidden md:block"
        animate={{ y: [0, -16, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.span
        className="blob blob-sm blob-right hidden md:block"
        animate={{ y: [0, 14, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
