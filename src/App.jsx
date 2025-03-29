import React, { useRef } from 'react';

function InputFocus() {
  // Creamos una referencia para el elemento input
  const inputRef = useRef(null);
  
  // Función que enfoca el input cuando se hace clic en el botón
  const enfocarInput = () => {
    
    inputRef.current.focus();
  };
  
  return (
    <div style={{ //estilo 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto',
      maxWidth: '300px',
      padding: '20px'
    }}>
      {}
      <input 
        ref={inputRef} 
        type="text" 
        placeholder="Escribe algo" 
        style={{
          width: '100%', //estilo
          padding: '8px',
          marginBottom: '10px'
        }}
      />
      <button 
        onClick={enfocarInput}
        style={{
          padding: '8px 16px'
        }}
      >
        Enfocar input
      </button>
    </div>
  );
}

export default InputFocus;