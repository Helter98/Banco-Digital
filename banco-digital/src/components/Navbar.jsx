import './Navbar.css';
import { Link, NavLink } from "react-router-dom"
import cartao from '../assets/cartao.png'
import React, {useContext} from 'react';
import { AuthContext } from '../context/auth';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
  const {authenticated, logout } = useContext(AuthContext)

  const handleLogout = () =>{
    logout();
  }

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");

	};

  return (
        <header>    
            <Link to="/"><img src={cartao}alt="logo" /></Link>   
            <nav ref={navRef}>
            
            {authenticated ? 
            <>
            <NavLink className="backgroundLink" to="/SuaConta">Sua conta</NavLink>
            <NavLink className="backgroundLink" to="/Transferencia">Transferência</NavLink>
            <NavLink className="backgroundLink" to="/Deposito">Depósito</NavLink>
            <NavLink className="backgroundLink" to="/Saque">Saque</NavLink>
            <NavLink className="backgroundLink" to="/GerarBoleto">Boleto</NavLink>
            <NavLink className="backgroundLink" to="/PagamentoBoleto">Pagar</NavLink> 
            <button className='btn-logout' onClick={handleLogout}>Logout</button>
            </> :
            <>
              <NavLink className="backgroundLink" to="/"  >Início</NavLink>
             <NavLink  className="backgroundLink" to="/Cadastro">Cadastro</NavLink>
             <NavLink className="backgroundLink" to="/Login">Login</NavLink>
            </>
          }      
           <button className='nav-btn nav-close-btn' onClick={showNavbar} >
              <FaTimes />
             </button>
      </nav> 
            <button className='nav-btn' onClick={showNavbar}>
              <FaBars />
            </button>
    </header>
  )
}

export default Navbar

