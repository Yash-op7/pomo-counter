'use client';
import React from 'react';

const Button = ({ onCounterUpdate }) => {
  const incrementPomoCount = async () => {
    const response = await fetch('/api/counter', {
      method: 'POST',
    });
    const updatedCounter = await response.json();
    onCounterUpdate(updatedCounter.value);
  };

  return (
    <div>
      <button
        className="p-3 m-2 border border-yellow-500 rounded-sm text-white text-6xl"
        onClick={incrementPomoCount}
      >
        ⬆︎
      </button>
    </div>
  );
};

export default Button;
