'use client'

import React, { useEffect } from 'react'
import Button from './(components)/Button';
import Status from './(components)/Status';

const Home = () => {
  const [counter, setCounter] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  
  const fetchInitialValue = async () => {
    setLoading(true);
    const response = await fetch('/api/counter', {
      method: 'GET',
    });
    const updatedCounter = await response.json();
    setCounter(updatedCounter.value);
    setLoading(false);
  }

  useEffect( () => {
    fetchInitialValue();
  }, []);

  if(loading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <div className='min-h-screen gap-4 flex flex-col justify-center items-center'>
      <h1 className='text-xl'>How much more can you</h1> <p className='text-red-600 text-7xl'>ENDURE?</p>
      <Button onCounterUpdate={setCounter} />

      <div className='text-xl'>
      Pomocount is <span className='text-red-600 text-7xl'>{counter}</span>
    </div>
    </div>
  )
}

export default Home