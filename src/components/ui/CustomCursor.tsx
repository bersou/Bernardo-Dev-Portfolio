'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [active, setActive] = useState(false);

  const cursorX = useSpring(0, { damping: 20, stiffness: 250 });
  const cursorY = useSpring(0, { damping: 20, stiffness: 250 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* DOT */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-brand-orange rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
      {/* RING */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-brand-orange/30 rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        transition={{ type: 'spring', damping: 15, stiffness: 100 }}
      />
    </div>
  );
}
