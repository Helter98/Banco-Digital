import "./Login.css";
import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/auth";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object({
  username: yup.string().email('Digite um email válido').required('O email é obrigatório'),
  password: yup.string().min(6, 'A senha deve ter pelo menos 6 digitos').required('Digite sua senha'),

}).required();

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const { authenticated, login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const addLogin = (e) => {
    login(username, password);
  };

  return (
    <div className="formularioDeLogin">
    <div className="login">
      <form className="FormLogin" onSubmit={handleSubmit(addLogin)}>
        <h1>Login</h1>
        <p>{String(authenticated)}</p>
        <div className="field">
          <label htmlFor="name">
            <input className="loginCadasatro"
              type="email"
              name="username"
              id="username"
              placeholder="Email"
              value={username}
              {...register("username", { required: true })}
              onChange={(e) => setUsername(e.target.value)}/>
              <span>{errors.username?.message}</span>
          </label>
          <label htmlFor="password">
            <input
              className="loginCadasatro"
              name="password"
              id="password"
              type="password"
              placeholder="Senha"
              value={password}
              {...register("password", { required: true })}
              onChange={(e) => setPassword(e.target.value)}/>
              <span>{errors.password?.message}</span>
          </label>
        </div>
        <input className="buttonLogin" type="submit" value="Entrar" />
      </form>
    </div>
    </div>
  );
};

export default Login;

// {
// 	"client_id": "2",
// 	"client_secret": "oWYeZUBNkxViZSyKrvydfZWa3YgkUTq78lKt3WTe",
// 	"username":"teste11279453@gmail.com",
// 	"password":"123456",
// 	"grant_type":"password"
// }
