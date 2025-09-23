import React from 'react';
import { motion } from 'framer-motion';
import './PaperView.css';

export default function PaperView({ project, direction }) {
  const variants = {
    enter: dir => ({ x: dir === 'left' ? '-100%' : '100%', opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.6 } },
    exit: dir => ({ x: dir === 'left' ? '100%' : '-100%', opacity: 0 })
  };

  return (
    <motion.div
      key={project.id}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      className="paper"
    >
      <header className="paper-header">
        <span>NikeLabs Demo</span>
        <span>{project.title}</span>
        <span>{project.id}</span>
      </header>

      <main className="paper-main">
        <img src={project.image} alt={project.title} />
      </main>

      <footer className="paper-footer">
        <span>{project.date}</span>
        <span>{project.file}</span>
      </footer>
    </motion.div>
  );
}
