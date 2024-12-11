import React from 'react';

const Historial = ({ historial }) => {
  return (
    <div>
      <h3>Historial de Búsquedas</h3>
      <ul>
        {historial.map((pais, index) => (
          <li key={index}>{pais}</li>
        ))}
      </ul>
    </div>
  );
};

export default Historial;
