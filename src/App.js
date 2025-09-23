import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import projects from './data/projects';
import ThumbnailTable from './components/ThumbnailTable';
import PaperView from './components/PaperView';
import './App.css';

function App() {
  const [current, setCurrent] = useState(1);
  const [direction, setDirection] = useState('right');

  const handleSelect = id => {
    setDirection(id > current ? 'right' : 'left');
    setCurrent(id);
  };

  const project = projects.find(p => p.id === current);

  return (
    <div className="App">
      <ThumbnailTable
        projects={projects}
        currentId={current}
        onSelect={handleSelect}
      />
      <AnimatePresence custom={direction} mode="wait">
        <PaperView key={project.id} project={project} direction={direction} />
      </AnimatePresence>
    </div>
  );
}

export default App;
