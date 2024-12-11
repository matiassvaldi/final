import React from 'react';

const Barra = ({ terminoBusqueda, setTerminoBusqueda }) => {
  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Busca un país..."
        value={terminoBusqueda}
        onChange={(e) => setTerminoBusqueda(e.target.value)}
        style={{ padding: '10px', width: '300px' }}
      />
    </div>
  );
};

export default Barra;
