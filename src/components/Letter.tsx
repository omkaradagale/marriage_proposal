import { motion } from 'framer-motion';
import { useState } from 'react';
import TypewriterText from './TypewriterText';
import './Letter.css';

const letterText = `Hi My Captain, My Love,

As our wedding day comes closer, I keep thinking about the life we are about to begin together.

I may not be perfect, but I promise you this…

I will always listen to you — not just your words, but also your silence.

I will always stand beside you — in happiness and in difficult days.

I will protect your heart — because it is now my home.

I will take care of you — not as a duty, but as my priority.

I will respect you — your dreams, your choices, your individuality.

And even on the days we argue, I will never stop choosing you.

Marriage for me is not just living together,
it is growing together, understanding each other,
and becoming best friends for life.

From today, your worries are mine,
your happiness is mine,
and your smile… will always be my responsibility.

I am waiting to start our forever.

Yours,
`;

interface LetterProps {
  onComplete: () => void;
}

export default function Letter({ onComplete }: LetterProps) {
  const [typingComplete, setTypingComplete] = useState(false);

  return (
    <motion.div
      className="letter-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="letter-paper"
        initial={{ scale: 0.8, rotateX: -90 }}
        animate={{ scale: 1, rotateX: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="letter-content">
          <TypewriterText
            text={letterText}
            speed={60}
            onComplete={() => {
              setTypingComplete(true);
              setTimeout(onComplete, 500);
            }}
          />
          {typingComplete && (
            <motion.div
              className="signature"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Omkar ❤️
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
