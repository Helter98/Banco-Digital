import './Login.css';
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/auth';



const Login = () => {

  const { authenticated, login } = useContext(AuthContext);

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault();

    console.log("submit", { email, password })
    
    login(email, password); //integração com o contexto e api
  }

  return (
    <div className="login">
      <form className='FormLogin' onSubmit={handleSubmit}>
      <h1>Login</h1>
      <p>{String(authenticated)}</p>
        <div className="field">
        <label htmlFor="name">
          <input className='loginCadasatro' type="email" name="name" id="name" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label htmlFor="password">
          <input className='loginCadasatro' name="password" id="password" type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        </div>
        <input className='buttonLogin' type="submit" value="Entrar" />
      </form>
    </div>
  )
}

export default Login