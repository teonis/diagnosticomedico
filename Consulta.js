import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useForm } from 'react-hook-form';

const Consulta = () => {
  const { currentUser } = useAuth();
  const [dataConsulta, setDataConsulta] = useState([]);
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    // TODO: Implementar lógica para buscar dados da consulta
    // Exemplo: Buscar dados da consulta a partir do ID do usuário
    const idUsuario = currentUser.uid; // Substituir por ID real do usuário

    fetch(`/api/consultas/${idUsuario}`)
      .then(response => response.json())
      .then(data => {
        setDataConsulta(data);
      });
  }, []);

  const onSubmit = data => {
    // TODO: Implementar lógica para enviar dados da consulta
    // Exemplo: Salvar dados da consulta no banco de dados

    alert('Dados da consulta enviados!');
  };

  return (
    <div className="container">
      <h1>Consulta</h1>
      <p>Olá, {currentUser.email}!</p>
      <p>Preencha os dados abaixo para realizar a consulta:</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="date"
          name="data"
          placeholder="Data da consulta"
          ref={register({ required: true })}
        />
        <input
          type="text"
          name="motivo"
          placeholder="Motivo da consulta"
          ref={register({ required: true })}
        />
        <input
          type="text"
          name="sintomas"
          placeholder="Sintomas apresentados"
          ref={register({ required: true })}
        />
        <button type="submit">Enviar Consulta</button>
      </form>
      {dataConsulta.length > 0 && (
        <div>
          <h2>Histórico de Consultas</h2>
          <ul>
            {dataConsulta.map(consulta => (
              <li key={consulta.id}>
                <p>Data: {consulta.data}</p>
                <p>Motivo: {consulta.motivo}</p>
                <p>Sintomas: {consulta.sintomas}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Consulta;
