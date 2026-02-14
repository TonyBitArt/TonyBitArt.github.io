import React from 'react';
import './Bio.css';

const Bio = () => {
  return (
    <div className="bio-container">
      
      
      <div className="bio-sidebar">
        
        <img 
          src="https://media1.tenor.com/m/qlxWKT-Et9QAAAAC/90s-anime.gif" 
          alt="Tony Avatar" 
          className="bio-image" 
        />
        <div className="bio-level">LVL. 20</div>
      </div>

      <div className="bio-content">
        <h2 className="bio-name">USER: TonyBitArt</h2>
        <hr className="bio-divider" />

        <div className="stat-row">
          <span className="stat-label">CLASS:</span>
          <span className="stat-value">Creative Engineer</span>
        </div>
        
        <div className="stat-row">
          <span className="stat-label">GUILD:</span>
          <span className="stat-value">TEC Costa Rica</span>
        </div>

        <div className="stat-row">
          <span className="stat-label">SPECIALTY:</span>
          <span className="stat-value">React / Low Poly / Unity</span>
        </div>

        
        <div className="hp-section">
          <span className="stat-label">HP (Caffeine):</span>
          <div className="hp-bar-border">

            <div className="hp-bar-fill" style={{ width: '70%' }}></div>
          </div>
        </div>

        <p className="bio-description">
          "Creando mundos digitales donde el código se encuentra con el arte."_
        </p>
      </div>

    </div>
  );
};

export default Bio;