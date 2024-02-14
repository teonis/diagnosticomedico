import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Recursos = () => {
  const [dataRecursos, setDataRecursos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/recursos.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar dados dos recursos');
        }
        return response.json();
      })
      .then(data => {
        setDataRecursos(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  return (
    <div className="container">
      <h1>Recursos</h1>
      {dataRecursos && Array.isArray(dataRecursos) && (
        <ul>
          {dataRecursos.map(recurso => (
            <li key={recurso.id}>
              <Link to={recurso.link}>{recurso.titulo}</Link>
              <p>{recurso.descricao}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Recursos;
