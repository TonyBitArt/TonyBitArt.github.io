import React, { useState, useEffect } from 'react';
import './BootScreen.css';

const BootScreen = ({ onComplete }) => {

  const [progress, setProgress] = useState(0);

  useEffect(() => {
  
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 2;
        

        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return newProgress;
      });
    }, 100);


    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="boot-container">
      <div className="boot-content">
        
        <h1 className="boot-title">
          <span className="microsoft">MICROSOFT</span>
          <br />
          <span className="tony-os">TONY<span className="os-suffix">OS</span></span>
        </h1>
        
        <p className="boot-subtitle">Internet High Performance Portfolio</p>

      <img src='https://media1.tenor.com/m/jn3Ke4dUbGwAAAAC/mullet-mad.gif'></img>

        <div className="boot-bar-container">
            
            <div 
                className="boot-bar-fill" 
                style={{ width: `${progress}%` }} 
            />
        </div>

        <p className="boot-status">Loading System Resources... {progress}%</p>
      
      </div>
      
      <div className="boot-footer">
        <p>Copyright © 1995-2026 TonyBitArt Corp.</p>
      </div>
    </div>
  );
};

export default BootScreen;