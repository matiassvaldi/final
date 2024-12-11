import React, { useState, useEffect } from 'react';
import Barra from './componentes/Barra';
import Paises from './componentes/Paises';
import Historial from './componentes/Historial';
import './App.css'; 

const App = () => {
  const [terminoBusqueda, setTerminoBusqueda] = useState('');
  const [paises, setPaises] = useState([]);
  const [historial, setHistorial] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (terminoBusqueda.trim() === '') {
      setPaises([]);
      return;
    }

    const fetchPaises = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${terminoBusqueda}`);
        if (!response.ok) throw new Error('No se encontraron resultados');
        const data = await response.json();
        setPaises(data);
        setError(null);
      } catch (err) {
        setPaises([]);
        setError(err.message);
      }
    };

    fetchPaises();
  }, [terminoBusqueda]);

  const agregarAlHistorial = () => {
    if (terminoBusqueda.trim() === '') return;

    const nuevoPais = paises[0]?.name.common; 

    
    if (nuevoPais && !historial.includes(nuevoPais)) {
      setHistorial((prevHistorial) => {
        const actualizado = [nuevoPais, ...prevHistorial];
        return actualizado.slice(0, 5);  
      });
    }
  };

  return (
    <div className="app">
      <h1>Buscador de Países</h1>

      
      <div className="barra-container">
        <Barra terminoBusqueda={terminoBusqueda} setTerminoBusqueda={setTerminoBusqueda} />
        <button onClick={agregarAlHistorial} className="boton-historial">
          Guardar en Historial
        </button>
      </div>

      
      {error && <p className="error">{error}</p>}

      
      {terminoBusqueda.trim() && <Paises paises={paises} />}

      
      <Historial historial={historial} />
    </div>
  );
};

export default App;
