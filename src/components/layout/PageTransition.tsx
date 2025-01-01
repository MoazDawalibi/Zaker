import React, { useState, useEffect, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface PageTransitionProps {
  to: string;
  children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ to, children }) => {
  const [transitioning, setTransitioning] = useState(false);
  const [reversed, setReversed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === to) {
      return; // Prevent navigation to the same route
    }
    setTransitioning(true);
    setTimeout(() => {
      navigate(to);
      setReversed(true); // Set reversed for the entrance animation
    }, 1000); // Match this timing with the exit animation duration
  };

  useEffect(() => {
    if (reversed) {
      setTimeout(() => {
        setReversed(false); // Clear the reversed state after the animation
        setTransitioning(false);
      }, 1000); // Match this timing with the entrance animation duration
    }
  }, [reversed]);

  return (
    <>
      <div
        className={`transition-overlay ${transitioning ? (reversed ? 'enter' : 'exit') : ''}`}
      />
      <div onClick={handleClick}>{children}</div>
    </>
  );
};

export default PageTransition;
