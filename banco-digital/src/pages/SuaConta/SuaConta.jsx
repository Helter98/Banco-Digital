import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
// import { set } from 'react-hook-form';


function SuaConta() {

  const [conta, setConta] = useState([]);

  // 1 - Resgatando dados do usuário
  useEffect(() => {
    const dataUser = {
      headers: {
        Accept: "application/json", 
        "ngrok-skip-browser-warning": null, 
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMjhjZjc4ZWI1NmFmODA2ODdlMGI0OThjNjJlOTI5NzQ4NzIzOTVhYjljOWRkMmQ2OTJlYmEzNDIyMmY3ZGQ4MGU5ZjAwNDE2ZjJjM2Q5YmEiLCJpYXQiOjE2NjMzNDUwMDIuMTAzNDE0LCJuYmYiOjE2NjMzNDUwMDIuMTAzNDMsImV4cCI6MTY5NDg4MTAwMi4wNDM0NjUsInN1YiI6IjIiLCJzY29wZXMiOltdfQ.Lst9WXFuWXyWiR5hoFyimx7L-YO0G9LCt6Uwy8PFidyNg1z8YcecQy7oPtF6hWeB5vt5dAoDRQe0YwiOeuOejJbf3J4bIYi1TEDaHM6SrBGXXb0LJcKCj-m3Koe_X7EiiBFYCegPR8gAI5DF_Z3lDRXyIl5VaHY2JvFoyssVUe_aRogjCiz1rlIO-8NHjHOCkZCEKVtsUtZbh3Tl1OvF6bIlBm1wtcJovFa-CWfMgQ906N8IABA1TomKSu7if2qnsFMPwAbpV04p8mBP9tzy2NikdJQiKQl2xfnvIyqGx5H-aQW-pi3uMfqL7IALzoEr7IkCMpHouZITvg0Fsu0ukztnoei4MnF_PvkME0WtvPZcjEW8-8keg2eNiYxRF1wguldTLEaZ7ZIixy_IKAq28-WeH7sdxKfuKPxx8CWNpxPRoAB7C8mXsOUl3ihb8UD75wi_ZRIYN3XTlgFF5LDVHwDpbrHJEBBoq2HTe0dP2Vlv6uSWZwQ04dmVFq-IQS0IglOqigBDXDkMBiY8ncr3eMT6ym24ZAVtpmyGOYl-N2LVifBRScMmfjPJyIsRivx_PLcmt8wc8AHbGkxrN7HabnmXzXf1TSUnvnYhjjS7BAV2pCwCb1RtyWED5kURpAt4fscqzB5GA_lX2skrFegjAOmyrL31lWgkyLGeLt2wuJo`
    }
    }
    axios.get("https://acca-179-108-104-153.sa.ngrok.io/api/show", dataUser)
    .then((response => {
      setConta(response)
    }))
    .catch((erro) => {
      console.log(erro, 'erro')
    })
  }, []) 

  console.log(conta);

  return (
    <div>
      <h1>Sua conta</h1>
      
      <div>Saldo: </div>
    </div>
  )
}

export default SuaConta