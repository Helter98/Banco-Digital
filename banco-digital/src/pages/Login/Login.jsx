import './Login.css';
import React, { useState } from 'react';
// import { AuthContext } from '../../context/auth';
import axios from 'axios';

const Login = () => {

  // const { authenticated, login } = useContext(AuthContext);

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  // const handleSubmit = (e) =>{
  //   e.preventDefault();    
  //   login(username, password); //integração com o contexto e api
  // }

  const addLogin = async(data) => {
    data.preventDefault();
    console.log(username, password)
    await axios.post('https://7268-179-108-104-153.sa.ngrok.io/oauth/token', 
    //  params: {
     // headers: 'Access-Control-Allow-Origin',
    //  },
  
    {
      // client_id: "2",
      // client_secret: "oWYeZUBNkxViZSyKrvydfZWa3YgkUTq78lKt3WTe",
      username: username,
      password: password,
      // grant_type: "password",
    } )
    .then((request)=>{
      console.log(request.data)
    })
    .catch((e) =>{
      console.log(e)
    })
  }

  return (
    <div className="login">
      <form className='FormLogin' onSubmit={addLogin}>
      <h1>Login</h1>
      {/* <p>{String(authenticated)}</p> */}
        <div className="field">
        <label htmlFor="name">
          <input className='loginCadasatro' type="email" name="username" id="username" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)}/>
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


// {
// 	"client_id": "2",
// 	"client_secret": "oWYeZUBNkxViZSyKrvydfZWa3YgkUTq78lKt3WTe",
// 	"username":"teste11279453@gmail.com",
// 	"password":"123456",
// 	"grant_type":"password"
// }