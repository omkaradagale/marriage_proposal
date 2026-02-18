import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './HeartsBackground.css';

interface Heart {
  id: number;
  left: number;
  delay: number;
  duration: number;
}

interface HeartsBackgroundProps {
  intensity?: number;
}

export default function HeartsBackground({ intensity = 1 }: HeartsBackgroundProps) {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const heartCount = Math.floor(8 * intensity);
    const newHearts = Array.from({ length: heartCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4,
    }));
    setHearts(newHearts);
  }, [intensity]);

  return (
    <div className="hearts-container">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="heart"
          initial={{ y: '100vh', opacity: 0 }}
          animate={{ y: '-100vh', opacity: [0, 0.6, 0] }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ left: `${heart.left}%` }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
}
