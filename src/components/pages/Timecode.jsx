
import React, { useRef, useState, useEffect } from 'react'


const TimeCode = () => {
    const [value, setValue] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setValue(prevValue => prevValue + 0.01);
      }, 16.67); // 60 frames per second
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    const sinValue = Math.sin(value);
  
    // Use sinValue in another component or anywhere else in the same page of code
  
    return (
      <div>
  
      <p>Interval value: {interval}</p>
      </div>
    );
  };



  export default TimeCode