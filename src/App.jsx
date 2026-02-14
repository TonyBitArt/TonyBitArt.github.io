import { useState } from 'react'
import Window from './components/Window'
import Bio from './components/Bio' 
import BootScreen from './components/BootScreen';
import './App.css'


function App() {
  
  const [isBooting, setIsBooting] = useState(true);
  

  const [showWelcome, setShowWelcome] = useState(true);
  const [showBio, setShowBio] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showMusic, setShowMusic] = useState(false);

  
  if (isBooting) {
    return <BootScreen onComplete={() => setIsBooting(false)} />;
  }

  
  return (
    <div className="desktop">
      
      <div className="icons-column">
        
        <div className="desktop-icon" onClick={() => setShowBio(true)}>
          <div className="icon-img">👤</div>
          <span className="icon-label">My Profile</span>
        </div>


        <div className="desktop-icon" onClick={() => setShowProjects(true)}>
          <div className="icon-img">📁</div>
          <span className="icon-label">My Projects</span>
        </div>

        
        <div className="desktop-icon" onClick={() => setShowMusic(true)}>
          <div className="icon-img">🎵</div>
          <span className="icon-label">Music Player</span>
        </div>


        <div className="desktop-icon" onClick={() => alert("¡La basura está vacía!")}>
          <div className="icon-img">🗑️</div>
          <span className="icon-label">Recycle Bin</span>
        </div>

      </div>


      {showWelcome && (
        <Window 
          title="Welcome to TonyOS" 
          initialPosition={{x: 300, y: 100}}
          onClose={() => setShowWelcome(false)}
        >
          <div style={{ textAlign: 'center' }}>
            <img 
              src="https://media1.tenor.com/m/qlxWKT-Et9QAAAAC/90s-anime.gif" 
              alt="Anime Welcome" 
              style={{ width: '100%', marginBottom: '10px', border: '2px solid gray' }}
            />
            <h3>¡Sistema Online! 🟢</h3>
            <p>Explora mi mundo digital.</p>
            <button 
                style={{ marginTop: '10px', cursor: 'pointer' }}
                onClick={() => {
                    setShowWelcome(false);
                    setShowBio(true);
                }}
            >
              Iniciar Sesión
            </button>
          </div>
        </Window>
      )}


      {showBio && (
        <Window 
          title="User Profile: TonyBitArt" 
          initialPosition={{x: 300, y: 100}}
          onClose={() => setShowBio(false)}
        >
          <Bio></Bio>
        </Window>
      )}


      {showProjects && (
        <Window 
          title="C:\Users\Tony\Projects" 
          initialPosition={{x: 150, y: 80}}
          onClose={() => setShowProjects(false)}
        >
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <p>🚧 Carpeta en construcción... 🚧</p>
            <img src="https://i.pinimg.com/1200x/c5/80/76/c580769268bca78427291ca8dbaf1254.jpg" width="300" height="200"/>
          </div>
        </Window>
      )}


      {showMusic && (
        <Window 
            title="WinAmp Player" 
            initialPosition={{x: 500, y: 400}} 
            onClose={() => setShowMusic(false)}
        >
            <p>🎶 Now Playing: Kasane Teto - Fukkireta</p>
            <div style={{background: 'black', height: '40px', color: '#00ff00', display:'flex', alignItems:'center', justifyContent:'center'}}>
                [ ||||||||| ] 85%
            </div>
        </Window>
      )}

    </div>
  )
}

export default App