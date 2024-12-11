import React from 'react';

const Historial = ({ historial }) => {
  return (
    <div className="historial-container">
      <h3>Historial de Búsquedas</h3>
      {historial.length === 0 ? (
        <p>No hay países en el historial.</p>
      ) : (
        <div className="historial-box">
          {historial.map((pais, index) => (
            <div key={index} className="pais-item">
              {pais}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Historial;
