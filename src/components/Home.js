// Home.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import './estilo.scss';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Limpar dados da sessão
    sessionStorage.clear();
    // Redirecionar para a tela de login
    navigate('/');
  };

  return (
    <div className="home-container">
      <div className="header">
        <h1 className="title-box">O que é a solução</h1>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="box-section">
        <h2 className="section-title">A solução</h2>
        <p className="section-text">
          O projeto visa criar um sistema simples para o gerenciamento de dados de saúde, utilizando conceitos de prevenção, automação e precisão. A aplicação é destinada a estudantes da FIAP, desafiando-os a criar soluções inovadoras que possam moldar o futuro da saúde.
        </p>
      </div>

      <div className="box-section">
        <h1 className="title-box">Funcionalidade</h1>
        <h2 className="section-title">Registro de Dados de Saúde:</h2>
        <p className="section-text">
          Registro de Dados de Saúde:
          <ul>
            <li>Os usuários podem registrar informações pessoais, como nome e idade.</li>
            <li>Podem inserir registros específicos relacionados à saúde.</li>
          </ul>
        </p>

        <h2 className="section-title">Consulta de Registros:</h2>
        <p className="section-text">
          Os usuários podem consultar os registros de saúde associados ao seu nome.
        </p>

        <h2 className="section-title">Análise de Dados:</h2>
        <p className="section-text">
          A aplicação fornece uma funcionalidade de análise de dados. No código fornecido, essa funcionalidade ainda não está completamente implementada, mas a ideia é realizar análises relevantes para dados de saúde.
        </p>

        <h2 className="section-title">Persistência de Dados:</h2>
        <p className="section-text">
          Os dados são armazenados em um arquivo JSON (dados_saude.json) para persistência entre execuções do programa.
        </p>
      </div>

      <div className="box-section">
        <h1 className="title-box">Como Funciona</h1>
        <p className="section-text">
          Menu de Opções:
          <ul>
            <li>Ao executar o programa, os usuários são apresentados a um menu com opções, como registrar dados, consultar registros, realizar análises e sair do programa.</li>
          </ul>

          Registro de Dados:
          <ul>
            <li>Os usuários podem registrar suas informações pessoais e adicionar registros relacionados à saúde.</li>
          </ul>

          Consulta de Registros:
          <ul>
            <li>Podem consultar os registros associados ao seu nome.</li>
          </ul>

          Análise de Dados:
          <ul>
            <li>A funcionalidade de análise de dados ainda está em desenvolvimento, mas a ideia é utilizar técnicas de análise de dados ou aprendizado de máquina para extrair insights relevantes dos registros de saúde.</li>
          </ul>

          Persistência de Dados:
          <ul>
            <li>Os dados são salvos em um arquivo JSON, permitindo que os registros persistam entre diferentes execuções do programa.</li>
          </ul>
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
