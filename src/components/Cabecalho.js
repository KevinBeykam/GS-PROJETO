// src/components/Cabecalho.js
import React from 'react';

const Cabecalho = () => {
  // Obter dados do usuário do sessionStorage
  const usuario = JSON.parse(sessionStorage.getItem('usuario'));

  return (
    <header>
      <h1 style={{ textAlign: 'center', marginTop: '50px' }}>
        {usuario ? (
          <div>
            <p>Nome: {usuario.nome}</p>
            <p>Email: {usuario.email}</p>
          </div>
        ) : (
          <p></p>
        )}
      </h1>
    </header>
  );
};

export default Cabecalho;
