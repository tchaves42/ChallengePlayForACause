import { useState } from "react";
import axios from "axios";
import PropTypes from 'prop-types';

const AuthPage = (props) => {
  // State para armazenar informações do formulário
  const [username, setUsername] = useState();
  const [secret, setSecret] = useState();
  const [email, setEmail] = useState();
  const [first_name, setFirstName] = useState();
  const [last_name, setLastName] = useState();

  // Função chamada ao tentar fazer login
  // Verifica na API se o usuário já é cadastrado
  const onLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { username, secret })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  // Função chamada ao se cadastrar
  const onSignup = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", {
        username,
        secret,
        email,
        first_name,
        last_name,
      })
      .then((r) => props.onAuth({ ...r.data, secret })) // NOTE: over-ride secret
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

  return (
    <div className="login-page">
      <div className="card">
        {/* Login Form */}
        <form onSubmit={onLogin}>
          <div className="title">Login</div>
          <input
            type="text"
            name="username"
            placeholder="Usuário"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="secret"
            placeholder="Senha"
            onChange={(e) => setSecret(e.target.value)}
          />
          <button type="submit" className="login-button">Entrar</button>
        </form>

        {/* Sign Up Form */}
        <form onSubmit={onSignup}>
          <div className="title">ou Cadastre-se</div>
          <input
            type="text"
            name="username"
            placeholder="Usuário"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="secret"
            placeholder="Senha"
            onChange={(e) => setSecret(e.target.value)}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name="first_name"
            placeholder="Nome"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            name="last_name"
            placeholder="Sobrenome"
            onChange={(e) => setLastName(e.target.value)}
          />
          <button type="submit">Cadastre-se</button>
        </form>
      </div>

      <style>{`
  .login-page {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: url('/background.jpg') center/cover;
  }

  .card {
    width: 300px;
    text-align: center;
    background-color: #000;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .title {
    font-size: 24px;
    color: #fff;
    font-weight: 700;
    margin-bottom: 20px;
  }

  input {
    width: calc(100% - 20px);
    margin-top: 12px;
    padding: 10px;
    background-color: #00000;
    border: 1px solid #e6f7ff;
    border-radius: 5px;
    outline: none;
    box-sizing: border-box;
  }

  button {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
    padding: 10px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .login-button {
    background-color: #2196f3;
  }
`}</style>
    </div>
  );
};

AuthPage.propTypes = {
  onAuth: PropTypes.func.isRequired,
};

export default AuthPage;
