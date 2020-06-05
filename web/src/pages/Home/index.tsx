import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';
import logo from '../../assets/logo.svg';

const Home: React.FC = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta"/>
        </header>

        <main>
          <h1>Seu marketplace de coleta de resíduos.</h1>
          <p>Ajudemos pessoas a encontrar pontos de coletas de forma eficiente.</p>

          <a href="#">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </a>
        </main>
      </div>
    </div>
  );
}

export default Home;
