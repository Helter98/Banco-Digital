import './Navbar.css';
import { Link, NavLink } from "react-router-dom"
import cartao from '../assets/cartao.png'


const Navbar = () => {
  return (
    <nav>
        <div className='logo'>
            <Link  to="/"><img src={cartao}alt="logo" /></Link>
        </div>
        <div className="links">            
            <NavLink to="/"  >Início</NavLink>
            <NavLink to="/Transferencia">Transferência</NavLink>
            <NavLink to="/Deposito">Depósito</NavLink>
            <NavLink to="/Saque">Saque</NavLink>
            <NavLink to="/GerarBoleto">Gerar Boleto</NavLink>
            <NavLink to="/PagamentoBoleto">Pagamento de Boleto</NavLink>
            <NavLink className="btnLogin" to="/Login">Login</NavLink>
          </div>
    </nav>
  )
}

export default Navbar