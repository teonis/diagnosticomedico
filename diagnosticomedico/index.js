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
