import React from 'react';

const Paises = ({ paises }) => {
  return (
    <div>
      {paises.map((pais) => (
        <div
          key={pais.cca3}
          style={{ border: '1px solid #ccc', padding: '20px', margin: '10px' }}
        >
          <h2>{pais.name.common}</h2>
          <p>
            <strong>Capital:</strong> {pais.capital ? pais.capital[0] : 'N/A'}
          </p>
          <p>
            <strong>Población:</strong> {pais.population.toLocaleString()}
          </p>
          <img
            src={pais.flags.png}
            alt={`Bandera de ${pais.name.common}`}
            style={{ width: '100px' }}
          />
        </div>
      ))}
    </div>
  );
};

export default Paises;
