import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Envelope from './components/Envelope';
import Letter from './components/Letter';
import Ending from './components/Ending';
import HeartsBackground from './components/HeartsBackground';
import MusicPlayer from './components/MusicPlayer';
import './App.css';

type Stage = 'envelope' | 'letter' | 'ending';

function App() {
  const [stage, setStage] = useState<Stage>('envelope');
  const [heartsIntensity, setHeartsIntensity] = useState(1);

  const handleOpenLetter = () => {
    setStage('letter');
  };

  const handleLetterComplete = () => {
    setHeartsIntensity(1.5);
    setTimeout(() => {
      setStage('ending');
    }, 5000);
  };

  return (
    <div className="app">
      <HeartsBackground intensity={heartsIntensity} />
      {stage !== 'envelope' && <MusicPlayer />}
      
      <AnimatePresence mode="wait">
        {stage === 'envelope' && (
          <motion.div
            key="envelope"
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          >
            <Envelope onOpen={handleOpenLetter} />
          </motion.div>
        )}

        {stage === 'letter' && (
          <motion.div
            key="letter"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Letter onComplete={handleLetterComplete} />
          </motion.div>
        )}

        {stage === 'ending' && (
          <motion.div
            key="ending"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Ending />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
