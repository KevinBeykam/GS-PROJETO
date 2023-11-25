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
        A solução para a Meta 3.1 dos ODS visa reduzir a taxa de mortalidade materna global para menos de 70 mortes por 100.000 nascidos vivos até 2030. Esta meta faz parte do compromisso global de melhorar a saúde materna e alcançar um desenvolvimento sustentável.
        </p>
      </div>

      <div className="box-section">
        <h1 className="title-box">Funcionalidade</h1>
        <h2 className="section-title">Registro de Dados de Saúde:</h2>
        <p className="section-text">
          Registro de Dados de Saúde:
          <ul>
            <li>Os usuários podem registrar informações pessoais, como nome e idade.</li>
            <li>Podem inserir registros específicos relacionados à saúde.Intervenções em Saúde Materna:

Implementará medidas abrangentes para melhorar a saúde das mulheres durante a gravidez, parto e pós-parto. Isso pode envolver a promoção de cuidados pré-natais, garantia de parto seguro e acesso a serviços médicos de qualidade.
Educação e Conscientização:

Desenvolverá programas educacionais para mulheres, famílias e profissionais de saúde, visando aumentar a conscientização sobre práticas seguras de maternidade, nutrição adequada e sinais de complicações obstétricas.
Acesso Equitativo a Serviços de Saúde:

Trabalhará para eliminar disparidades no acesso aos serviços de saúde materna, garantindo que todas as mulheres, independentemente de sua localização geográfica ou condição socioeconômica, tenham acesso a cuidados essenciais.
Fortalecimento de Infraestruturas de Saúde:

Investirá na construção e manutenção de instalações médicas adequadas, treinamento de profissionais de saúde e fornecimento de recursos necessários para oferecer serviços de qualidade.</li>
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
            <li>Ao executar o programa, os usuários são apresentados a um menu com opções, como registrar dados, consultar registros, realizar análises e sair do programa.Implementação de Políticas Governamentais:

Os governos desempenharão um papel crucial na implementação de políticas que promovam a saúde materna. Isso pode incluir legislação para garantir a qualidade dos serviços de saúde e o direito ao atendimento materno.
Parcerias Internacionais:

Cooperação entre países, organizações não governamentais e setor privado para compartilhar recursos, conhecimentos e melhores práticas na área de saúde materna.
Monitoramento e Avaliação Contínuos:

Estabelecimento de sistemas robustos de monitoramento e avaliação para rastrear o progresso em direção à meta. Isso envolverá a coleta regular de dados sobre mortalidade materna, análise de tendências e ajustes nas estratégias conforme necessário.
Envolvimento Comunitário:

Promoção do envolvimento ativo das comunidades na promoção da saúde materna. Isso pode incluir programas de conscientização liderados pela comunidade e a criação de redes de apoio.</li>
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
