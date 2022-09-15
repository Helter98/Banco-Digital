import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
// import { set } from 'react-hook-form';


function SuaConta() {

  const [conta, setConta] = useState([]);

  // 1 - Resgatando dados do usuário
  // useEffect(() => {
  //   axios.get("https://0630-179-108-104-153.sa.ngrok.io/oauth/token")
  //   .then((response => {
  //     setConta(response.data)

  //     // console.log(response.data)
  //   }))
  //   .catch((erro) => {
  //     console.log(erro, 'erro')
  //   })
  // }, []) 

  // console.log(conta)

  fetch('https://api.github.com/repos/facebook/react')
  .then((response) => response.json())
  .then((json) => console.log(json));

  return (
    <div>
      <h1>Sua conta</h1>
      
      <div>Saldo: </div>
    </div>
  )
}

export default SuaConta