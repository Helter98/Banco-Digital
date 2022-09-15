import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
// import { set } from 'react-hook-form';


function SuaConta() {

  const [conta, setConta] = useState([]);

  // 1 - Resgatando dados do usuário
  // useEffect(() => {
  //   axios.get("https://reqres.in/api/users")
  //   .then((response) => {
  //     console.log(response.data)
  //   })
  //   .catch((erro) => {
  //     console.log(erro, 'erro')
  //   })
  // }, ) 


  // token => eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZmY2Y2U4YWFiMmRhODJlYzcyOTIyMDAzNTY1ZGJkZDAzMDBlOGVjNzFkNTg5ZTdiZmU2MDY0OGI3NGVlOWE4NTQ5ODZiY2VlNTM0NDk4ODUiLCJpYXQiOjE2NjMwODg2NjIuNTg3MzY4LCJuYmYiOjE2NjMwODg2NjIuNTg3Mzc1LCJleHAiOjE2OTQ2MjQ2NjIuNTcxMDgxLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.jg9xTTO1Aec7WfyPQQMIzPjVOpxXFFnqFZWKsJ8MgCxt8R_IHG4wdI3SoLJ6dpGEyW7YWgrYgYz52jfqWBGz26SHLXl0ayqgd_qsd9lY9D5h0yC14c7uD4yHNaoiC-f1hMMBmbkVgWPtPGovpdJoxHAMazHVAN1zaH1W_pIWgtl7eqddQHtMHqFqtCpx3jFF0fmiqOhuT9M-xE04WJNFSYyh3B9HOrZyNmxOMgoFgvPWlWSOBOQqfdlVpc7ognFY1OvIE3j7VLCdTyLpda9J9Cov7VvONWrAoFVWvC0wmp4MNDvxHqnVYD1eWtuFV7q5Ukn7rbY1F18W0Tz1xTaYCftWl_nI04VOceRN3S6t5p7pdcqYoHeBMR4y5iIvlix4cgs_5gSE9bx1iUtFnrYSfC2RhOgYe5w1xfINagClI2HfVTTHcGfLKM6KkoMQalLd_TfSZeDkE5MnFdV0ryb1YfhrTXY8_Z7qh2QCoBrgXvtdGgQ_mzQ_Y4e2_BNuZx_rjtC7PMYWBQl0-im6o4bOzLOcAyPuELmNjMQkVvP49bx0SdJnmbxUD0bk9NUvs4Fs7GzL9XQZklkgf6wnURKH-Iwo4SiOTGodT8hWiT81Va63w6y8Yox1xpvOfmZxhvWcqtpRKQYbJyRUiK-74eSN8RIMBh8cBGvxh_Ihy6-pf8I.

  //https://7c71-179-108-104-153.sa.ngrok.io/api/users

  // console.log(conta)

  return (
    <div>
      <h1>Sua conta</h1>
      
      <div>Saldo: </div>
    </div>
  )
}

export default SuaConta