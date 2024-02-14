import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Consulta from './pages/Consulta';
import Anamnese from './pages/Anamnese';
import Diagnostico from './pages/Diagnostico';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/consulta" component={Consulta} />
        <Route path="/anamnese" component={Anamnese} />
        <Route path="/diagnostico" component={Diagnostico} />
      </Switch>
    </Router>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="banner">
        <h1 className="title">Diagnóstico médico online</h1>
        <p className="description">
          Descubra o que pode estar acontecendo com sua saúde em poucos minutos.
        </p>
        <a href="/consulta" className="btn-start">Comece agora</a>
      </div>
      <div className="features">
        <h2>Funcionalidades</h2>
        <ul>
          <li>
            <i className="fas fa-check"></i>
            Descubra os sintomas mais comuns para diversos problemas de saúde.
          </li>
          <li>
            <i className="fas fa-question-circle"></i>
            Receba dicas de como aliviar seus sintomas e melhorar sua saúde.
          </li>
          <li>
            <i className="fas fa-book-medical"></i>
            Acesse informações confiáveis sobre doenças e tratamentos.
          </li>
        </ul>
      </div>
      <div className="testimonials">
        <h2>Depoimentos</h2>
        <div className="testimonial">
          <p>
            "O diagnóstico médico online me ajudou a descobrir o que estava acontecendo comigo e a tomar as medidas necessárias para melhorar minha saúde."
          </p>
          <p className="author">- Maria Silva</p>
        </div>
        <div className="testimonial">
          <p>
            "O sistema é muito fácil de usar e as informações são muito úteis."
          </p>
          <p className="author">- João Oliveira</p>
        </div>
      </div>
      <div className="call-to-action">
        <h2>Comece agora a cuidar da sua saúde!</h2>
        <a href="/consulta" className="btn-start">Comece agora</a>
      </div>
    </div>
  );
};

export default Home;


