import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './CadastroLogin.css';

const CadastroLogin = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [isCadastro, setIsCadastro] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    // TODO: Implementar lógica de cadastro/login
    if (isCadastro) {
      // Cadastrar novo usuário
      alert(`Novo usuário cadastrado: ${data.nome}`);
    } else {
      // Efetuar login
      alert(`Logado com sucesso: ${data.email}`);
      setIsLogged(true);
    }
  };

  const handleFormChange = () => {
    setIsCadastro(!isCadastro);
  };

  if (isLogged) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="container">
      <div className="form-container">
        <h1>{isCadastro ? 'Cadastro' : 'Login'}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {isCadastro && (
            <input
              type="text"
              name="nome"
              placeholder="Nome completo"
              ref={register({ required: true })}
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            ref={register({ required: true })}
          />
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            ref={register({ required: true })}
          />
          <button type="submit">{isCadastro ? 'Cadastrar' : 'Login'}</button>
          <p>
            {isCadastro ? 'Já possui conta?' : 'Não possui conta?'}{' '}
            <a href="#" onClick={handleFormChange}>
              {isCadastro ? 'Faça login' : 'Crie uma conta'}
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CadastroLogin;
