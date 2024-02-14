import React, { useState, useMemo, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { enviarFeedback } from '../api/feedback';

const Feedback = () => {
  const { currentUser } = useAuth();
  const [mensagem, setMensagem] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState(null);
  const [sucesso, setSucesso] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!mensagem) {
      return;
    }

    setEnviando(true);

    try {
      await enviarFeedback(currentUser.uid, mensagem);
      setMensagem('');
      setErro(null);
      setSucesso(true);
    } catch (error) {
      setErro(error.message);
    } finally {
      setEnviando(false);
    }
  };

  useEffect(() => {
    if (mensagem) {
      setErro(null);
    }
  }, [mensagem]);

  const mensagemValida = useMemo(() => mensagem.trim().length > 0, [mensagem]);

  return (
    <div className="container">
      <h1>Feedback</h1>
      <p>Olá, {currentUser.email}!</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mensagem">Deixe seu feedback:</label>
        <textarea
          id="mensagem"
          name="mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          required
        />
        {!mensagemValida && <p className="error">Por favor, digite uma mensagem</p>}
        {erro && <p className="error">{erro}</p>}
        {sucesso && <p className="success">Feedback enviado com sucesso!</p>}
        <button type="submit" disabled={enviando || !mensagemValida}>
          {enviando ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </div>
  );
};

export default Feedback;