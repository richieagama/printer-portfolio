import React from 'react';
import './ThumbnailTable.css';

export default function ThumbnailTable({ projects, currentId, onSelect }) {
  return (
    <div className="thumb-table">
      {projects.map(p => (
        <div
          key={p.id}
          className={`thumb ${currentId === p.id ? 'active' : ''}`}
          onClick={() => onSelect(p.id)}
        >
          <img src={p.image} alt={p.title} />
          <p>{p.title}</p>
        </div>
      ))}
    </div>
  );
}