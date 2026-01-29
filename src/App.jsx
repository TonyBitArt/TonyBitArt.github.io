function App() {
  return (
    <div style={{ 
      backgroundColor: '#050505', /* Negro profundo */
      color: '#00ff41', /* Verde Matrix/Terminal */
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '"Courier New", Courier, monospace', /* Fuente retro */
      textAlign: 'center'
    }}>
      
      {/* Efecto de borde brillante */}
      <div style={{
        border: '2px solid #00ff41',
        padding: '40px',
        boxShadow: '0 0 20px rgba(0, 255, 65, 0.3)',
        maxWidth: '600px'
      }}>
        <h1 style={{ 
          fontSize: '3.5rem', 
          margin: '0',
          textShadow: '4px 4px 0px #4b0082' /* Sombra morada sólida */
        }}>
          TONY BIT ART
        </h1>
        
        <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>
          INGENIERÍA + PIXEL ART + GAMEDEV_
        </p>

        <p style={{ marginTop: '30px', color: '#ffffff' }}>
          [ Sistema Online. Cargando Portfolio... ]
        </p>
      </div>

    </div>
  )
}

export default App