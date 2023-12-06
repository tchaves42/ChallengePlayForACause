import { useState } from "react";
import axios from "axios";
import PropTypes from 'prop-types';

const AuthPage = (props) => {
  const [username, setUsername] = useState("");
  const [secret, setSecret] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { username, secret })
      .then((r) => props.onAuth({ ...r.data, secret }))
      .catch((e) => console.log(JSON.stringify(e.response.data)));
  };

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
      .then((r) => props.onAuth({ ...r.data, secret }))
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
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="secret"
            placeholder="Password"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
          />
          <button type="submit" className="login-button">LOG IN</button>
        </form>

        {/* Sign Up Form */}
        <form onSubmit={onSignup}>
          <div className="title">or Sign Up</div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="secret"
            placeholder="Password"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            name="first_name"
            placeholder="First name"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last name"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
          <button type="submit" className="signup-button">SIGN UP</button>
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
          background-color: rgba(255, 255, 255, 0.8);
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
        .title {
          font-size: 24px;
          color: #333;
          font-weight: 700;
          margin-bottom: 20px;
        }
        input {
          width: calc(100% - 20px);
          margin-top: 12px;
          padding: 10px;
          background-color: #e6f7ff;
          border: 1px solid #e6f7ff;
          border-radius: 5px;
          outline: none;
          box-sizing: border-box;
        }
        button {
          margin-top: 12px;
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
