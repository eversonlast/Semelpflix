import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/Categoria';


//Desafio master blaster na drescrição
// const Pagina404 = ()=>(<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route path="/cadastro/video" component={CadastroVideo} />
        <Route path="/cadastro/categoria" component={CadastroCategoria} />
        <Route path="/" component={Home}  /> 
        <Route component={Home}/>
        {/* exact - exatamente */}
        {/* <Route component={Pagina404}/>  isso funciona para página não encontrada ou qualquer outro
         problema.*/}
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

