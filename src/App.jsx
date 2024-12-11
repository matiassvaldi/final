
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [pais, setPais] = useState('');
  const [historial, setHistorial] = useState([]);

  const handleSearch = () => {
    if (pais && !historial.includes(pais)) {
      setHistorial(prevHistorial => [pais, ...prevHistorial].slice(0, 5)); // Limita el historial a 5 países
    }
    setPais('');
  };

  return (
    <div className="App">
      <div className="barra-container">
        <input
          type="text"
          value={pais}
          onChange={(e) => setPais(e.target.value)}
          placeholder="Buscar país..."
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>

      <div className="historial-container">
        <h3>Historial de Búsquedas</h3>
        <ul>
          {historial.map((pais, index) => (
            <li key={index}>{pais}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
