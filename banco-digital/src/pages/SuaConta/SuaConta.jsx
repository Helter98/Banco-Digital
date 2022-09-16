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
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNzIyY2ExNDIyNTZjOWRjODg2YzQ0MTVhOWVhZWM0NzRiZTIyYWQzY2Y0M2RkMWVjNWMxYzJiOTY2NzY0OTIxNWJjNTJiNDRhY2U5MTVlNTEiLCJpYXQiOjE2NjMzNDM1NzguNjE0NDMxLCJuYmYiOjE2NjMzNDM1NzguNjE0NDQsImV4cCI6MTY5NDg3OTU3OC41Njk3OTIsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.ZjxOW8S1kRRclTrIprd4Dqmif7j3oWJ3RN_nkV9EKrtdYXhuC7JHtxXa_Esqm3qO-fifNU1CqytIZ0BkwuPLE551Mxg1z43yjuSSzLVMu3OQRAiaPHCQzdRzW6XWPY9Z5LvKJ-OhU47MDWk6w1luS8d_fMZyUWP1hsfLLjH0aZ6L5r3xD7Qj3KdQWRiLZqLNxPnbfKTDn8JaxIqDW8cZyMWK3xTkcy9oAGiJ3C_mfdVPEetMOmpwsHINLNuS7BGycSGCAfpCEZS7vYfDTrSwOXh1IylFGALDqWOAiHLAIzccWj1olc8WdOjTaNOQYYmorepvHCkQ2oza0a50KyrLBsWsOiIJNy1DC1fBHT1uJqLbHLwqPYTApsKpzwgkh96YKiMszFmsIRUpwAMRwq4cX5RyXqXRVPNGiyScaprk79IoptTYi83ALZsrQxH22dBdhYXE-alRT3VMyk2h_-paAIUJRjv2LmcEXRXmt-IVMJHFINNWF1LtwMsizNjiy1U8z4iv48pA4_lw7NCuXwOC7uqbyMPOIgAqAalS5aj3aEKoHqRBBm5OyMnS7b5l7052guke8Zf3611yZ8Acq72DPsduKsFw7Krx1emgWI-Eoga1zt76aM78yTBA_gfRQYG9cKPRMyksOkXY6-5ofv6UDN62TBZjEzHBeWhC2O9pY8Q`
    }
    }
    axios.get("https://741c-179-108-104-153.sa.ngrok.io/api/users", dataUser)
    .then((response => {
      setConta(response.data)
    }))
    .catch((erro) => {
      console.log(erro, 'erro')
    })
  }, []) 

  console.log(conta)

  return (
    <div>
      <h1>Sua conta</h1>
      
      <div>Saldo: </div>
    </div>
  )
}

export default SuaConta