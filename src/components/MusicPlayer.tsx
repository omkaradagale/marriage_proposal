import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './MusicPlayer.css';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Load the audio file from public folder
    audioRef.current = new Audio();
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;
    
    // Use the actual song file in public folder
    audioRef.current.src = '/James_Arthur_-_Say_You_Wont_Let_Go_CeeNaija.com_.mp3';
    
    // Fallback if file fails to load
    audioRef.current.addEventListener('error', () => {
      if (audioRef.current) {
        console.log('Audio file not found or failed to load');
        setAudioError(true);
      }
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          await audioRef.current.play();
          setIsPlaying(true);
          setAudioError(false);
        }
      } catch (err) {
        console.error('Audio play failed:', err);
        setAudioError(true);
        setIsPlaying(false);
      }
    }
  };

  return (
    <motion.button
      className="music-player"
      onClick={toggleMusic}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5, type: 'spring' }}
      title={audioError ? 'Audio unavailable' : (isPlaying ? 'Pause music' : 'Play music')}
    >
      {audioError ? '🎵' : (isPlaying ? '🔊' : '🔇')}
    </motion.button>
  );
}
