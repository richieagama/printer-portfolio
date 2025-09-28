import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Typewriter.css';

export default function Typewriter({ text, speed = 50 }) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));   // show first i characters
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <motion.div
      className="typewriter-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <span className="typewriter-text">{displayed}</span>
      <motion.span
        className="cursor"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      >
        |
      </motion.span>
    </motion.div>
  );
}