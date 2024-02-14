import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useForm } from 'react-hook-form';

const Anamnese = () => {
  const { currentUser } = useAuth();
  const [dataAnamnese, setDataAnamnese] = useState([]);
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    // TODO: Implementar lógica para buscar dados da anamnese
    // Exemplo: Buscar dados da anamnese a partir do ID do usuário
    const idUsuario = currentUser.uid; // Substituir por ID real do usuário

    fetch(`/api/anamneses/${idUsuario}`)
      .then(response => response.json())
      .then(data => {
        setDataAnamnese(data);
      });
  }, []);

  const onSubmit = data => {
    // TODO: Implementar lógica para enviar dados da anamnese
    // Exemplo: Salvar dados da anamnese no banco de dados

    alert('Dados da anamnese enviados!');
  };

  return (
    <div className="container">
      <h1>Anamnese</h1>
      <p>Olá, {currentUser.email}!</p>
      <p>Preencha os dados abaixo para responder a anamnese:</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="date"
          name="data"
          placeholder="Data da anamnese"
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
        <input
          type="text"
          name="historico_familiar"
          placeholder="Histórico familiar de doenças"
          ref={register({ required: true })}
        />
        <input
          type="text"
          name="medicamentos"
          placeholder="Medicamentos em uso"
          ref={register({ required: true })}
        />
        <button type="submit">Enviar Anamnese</button>
      </form>
      {dataAnamnese.length > 0 && (
        <div>
          <h2>Histórico de Anamneses</h2>
          <ul>
            {dataAnamnese.map(anamnese => (
              <li key={anamnese.id}>
                <p>Data: {anamnese.data}</p>
                <p>Motivo: {anamnese.motivo}</p>
                <p>Sintomas: {anamnese.sintomas}</p>
                <p>Histórico familiar: {anamnese.historico_familiar}</p>
                <p>Medicamentos: {anamnese.medicamentos}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Anamnese;
