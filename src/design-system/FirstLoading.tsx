import React, { useEffect, useState } from 'react';
import { Logo } from '../utils';

interface FirstLoadingProps {
  seconds: number;
  children: React.ReactNode; // Add children prop
}
const FirstLoading: React.FC<FirstLoadingProps> = ({ seconds, children }) => {
  const [currentNumber, setCurrentNumber] = useState(1);
  const [animate, setAnimate] = useState(false);
  const [pageUp, setPageUp] = useState(false); // New state for page movement
  const totalNumbers = 100;

  useEffect(() => {
    const intervalTime = (seconds * 1000) / totalNumbers;

    const interval = setInterval(() => {
      setCurrentNumber((prev) => {
        if (prev < totalNumbers) {
          setAnimate(true);
          return prev + 1;
        } else {
          setPageUp(true); // Trigger page movement
          clearInterval(interval);
          return prev;
        }
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [seconds]);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setAnimate(false), 500);
      return () => clearTimeout(timer);
    }
  }, [animate]);

  return (
    <>
      <div className={`FirstLoading ${pageUp ? 'PageUp' : ''}`}>
        <div>
          <img loading="lazy" src={Logo} className="Logo" alt="" />
          <div className={`Info`}>[{currentNumber} %]</div>
        </div>
      </div>
      {pageUp && children}
    </>
  );
};

export default FirstLoading;
