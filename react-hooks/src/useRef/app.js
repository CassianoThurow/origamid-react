import React, { useState, useRef} from 'react'

const App = () => {
    const [comentarios, setComentarios] = useState([]);
    const [input, setInput] = useState('');
    const inputElement = useRef()
   
  
    function handleClick() {
      setComentarios((comentarios) => [...comentarios, input]);
      setInput('')
      inputElement.current.focus();
    }
  
    return (
      <div>
        <ul>
          {comentarios.map((comentario) => (
            <li key={comentario}>{comentario}</li>
          ))}
        </ul>
        <input
          type="text"
          value={input}
          ref={inputElement}
          onChange={({ target }) => setInput(target.value)}
        />
        <br />
        <button onClick={handleClick}>Enviar</button>
      </div>
    );
  };

export default App
