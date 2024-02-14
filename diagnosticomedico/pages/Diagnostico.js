import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Diagnóstico = () => {
  const { currentUser } = useAuth();
  const [dataDiagnostico, setDataDiagnostico] = useState([]);
  const [previousUser, setPreviousUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const idUsuario = currentUser ? currentUser.uid : null;

    if (idUsuario && idUsuario !== previousUser) {
      fetch(`/api/diagnosticos/${idUsuario}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Erro ao buscar dados do diagnóstico');
          }
          return response.json();
        })
        .then(data => {
          setDataDiagnostico(data);
          setError(null);
        })
        .catch(error => {
          console.error('Erro:', error);
          setError('Erro ao buscar dados do diagnóstico');
        });

      setPreviousUser(idUsuario);
    }
  }, [currentUser, previousUser]);

  return (
    <div className="container">
      <h1>Diagnóstico</h1>
      <p>Olá, {currentUser.email}!</p>
      {dataDiagnostico.length > 0 && (
        <div>
          <h2>Seu Diagnóstico</h2>
          <ul>
            {dataDiagnostico.map(({ id, data, doenca, descricao, medicamentos, recomendacoes }) => (
              <li key={id}>
                <p>Data: {data}</p>
                <p>Doença: {doenca}</p>
                <p>Descrição: {descricao}</p>
                <p>Medicamentos: {medicamentos}</p>
                <p>Recomendações: {recomendacoes}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {dataDiagnostico.length === 0 && (
        <p>Nenhum diagnóstico foi realizado até o momento.</p>
      )}
      {error && (
        <p>{error}</p>
      )}
    </div>
  );
};

export default Diagnóstico;