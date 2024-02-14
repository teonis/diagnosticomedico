import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const AreaUsuario = () => {
  const { currentUser } = useAuth();
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    // TODO: Implementar lógica para buscar dados do usuário
    // Exemplo: Buscar dados do usuário a partir do ID
    const idUsuario = 1; // Substituir por ID real do usuário

    fetch(`/api/usuarios/${idUsuario}`)
      .then(response => response.json())
      .then(data => {
        setNomeCompleto(data.nomeCompleto);
        setEmail(data.email);
      });
  }, []);

  return (
    <div className="container">
      <h1>Área do Usuário</h1>
      <p>Olá, {nomeCompleto}!</p>
      <p>Seu e-mail é: {email}</p>
      <ul>
        <li><Link to="/consulta">Realizar Consulta</Link></li>
        <li><Link to="/anamnese">Responder Anamnese</Link></li>
        <li><Link to="/recursos">Acessar Recursos</Link></li>
        <li><Link to="/feedback">Enviar Feedback</Link></li>
      </ul>
    </div>
  );
};

export default AreaUsuario;
