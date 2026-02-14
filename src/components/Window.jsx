import React, { useRef } from 'react';
import Draggable from 'react-draggable';
import { FaTimes, FaWindowMinimize, FaExpand } from 'react-icons/fa';
import './Window.css';

const Window = ({ title, children, initialPosition = {x: 0, y: 0}, onClose }) => {
  const nodeRef = useRef(null);

  return (
    <Draggable 
      nodeRef={nodeRef}
      handle=".window-header" 
      defaultPosition={initialPosition}
    >
      <div ref={nodeRef} className="window-frame">
        
        <div className="window-header">
          <div className="window-title">
            <span style={{ marginRight: '5px' }}>💻</span>
            {title}
          </div>
          
          <div className="window-controls">
            <button className="control-btn minimize"><FaWindowMinimize size={10} /></button>
            <button className="control-btn maximize"><FaExpand size={10} /></button>
            <button className="control-btn close" onClick={onClose}><FaTimes size={12} /></button>
          </div>
        </div>

        <div className="window-content">
          {children}
        </div>
        
      </div>
    </Draggable>
  );
};

export default Window;