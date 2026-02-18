import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './Ending.css';

export default function Ending() {
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newSparkle = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100,
      };
      setSparkles((prev) => [...prev.slice(-15), newSparkle]);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="ending-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="sparkles-container">
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="sparkle"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
            transition={{ duration: 1.5 }}
            style={{ left: `${sparkle.x}%`, top: `${sparkle.y}%` }}
          >
            ✨
          </motion.div>
        ))}
      </div>

      <motion.div
        className="ending-content"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2 className="ending-title">Forever begins in...</h2>
        <div className="countdown-placeholder">
          <div className="countdown-item">
            <span className="countdown-number">∞</span>
            <span className="countdown-label">Days of Love</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
