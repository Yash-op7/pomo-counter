'use client';
import React from 'react';

const Status = () => {
  const fetchValue = async () => {
    const response = await fetch('/api/counter');
  
    // Check if the response is OK
    if (!response.ok) {
      console.error('Failed to fetch:', response.status, response.statusText);
      return { value: 0 }; // Return a default value if the fetch fails
    }
  
    const data = await response.json();
    return data.value;
  };
  
  const [currentValue, setCurrentValue] = React.useState(0);

  React.useEffect(() => {
    const getValue = async () => {
      const value = await fetchValue();
      setCurrentValue(value);
    };
    getValue();
  }, []);

  return (
    <div className='text-xl'>
      Pomocount is <span className='text-red-600 text-7xl'>{currentValue}</span>
    </div>
  );
};

export default Status;
