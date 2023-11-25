import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss'; // Certifique-se de que o caminho do seu arquivo SCSS está correto

const users = [
  { username: 'RM550154', password: '123456' },
  { username: 'RM98919', password: '123456' },
];

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Limpar dados da sessão ao montar o componente
    sessionStorage.clear();
  }, []);

  const handleLogin = () => {
    const authenticatedUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (authenticatedUser) {
      // Salvar dados da sessão e redirecionar para a página home
      sessionStorage.setItem('isLoggedIn', 'true');
      navigate('/home');
    } else {
      alert('Usuário ou senha inválidos');
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Entrar</button>
      </div>
    </div>
  );
};

export default Login;
