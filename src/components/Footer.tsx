import { motion } from 'framer-motion';
import './Footer.css';

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <p className="footer-text">
        Made by <span className="footer-name">Omkar</span> in love with{' '}
        <span className="footer-name">Shweta</span> ❤️
      </p>
    </motion.footer>
  );
}
