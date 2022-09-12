import './Navbar.css';
import { Link, NavLink } from "react-router-dom"
import cartao from '../assets/cartao.png'
import React, {useContext} from 'react';
import { AuthContext } from '../context/auth';


const Navbar = () => {
  const {authenticated, logout } = useContext(AuthContext)

  const handleLogout = () =>{
    logout();
  }
  return (
    <nav>
        <div className='logo'>
            <Link  to="/"><img src={cartao}alt="logo" /></Link>
        </div>
        <div className="links">            
            <NavLink to="/"  >Início</NavLink>

            {authenticated ? 
            <>
            <NavLink to="/Transferencia">Transferência</NavLink>
            <NavLink to="/Deposito">Depósito</NavLink>
            <NavLink to="/Saque">Saque</NavLink>
            <NavLink to="/GerarBoleto">Gerar Boleto</NavLink>
            <NavLink to="/PagamentoBoleto">Pagar</NavLink> 
            <button onClick={handleLogout}>Logout</button>
            </> :
            <>
             <NavLink className="btnPCadastro" to="/Cadastro">Cadastro</NavLink>
             <NavLink className="btnLogin" to="/Login">Login</NavLink>
            </>
          }
        </div>
    </nav>
  )
}

export default Navbar