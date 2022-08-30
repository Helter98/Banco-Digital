import './Home.css';
import { NavLink } from "react-router-dom"


const Home = () => {
  return (
      <div className="hero">
        <div className="infoCadastro">
          <h1>Conta grátis, 100% digital e <br />com serviços ilimitados

           <h1 className='spanColor'>para você</h1> 
           <h1 className='spanColor2'>fazer acontecer </h1>
           </h1>
        </div>

        <div className="intBtn">
          <NavLink className="btnCadastro" to="/Cadastro">Cadastro</NavLink>
        </div>
      </div>
  )
}

export default Home
