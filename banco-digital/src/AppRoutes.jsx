// React Router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import React, { useContext } from 'react';
// Components
import Navbar from './components/Navbar';

//Pages
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import Deposito from './pages/Deposito/Deposito';
import Transferencia from './pages/Transferencia/Transferencia';
import Saque from './pages/Saque/Saque';
import GerarBoleto from './pages/GerarBoleto/GerarBoleto';
import PagamentoBoleto from './pages/PagamentoBoleto/PagamentoBoleto';
import Login from './pages/Login/Login';

import { AuthProvider, AuthContext } from './context/auth';

function AppRoutes() {
  const Private = ({children}) => {
     const { authenticated, loading } = useContext(AuthContext); 
    
     if(loading){
      return <div className="loading">Carregando...</div>
     }
     if (!authenticated){
      return <Navigate to={"/login"} /> 
     }
     return children;
  }
    
  const logout = () => {
    console.log('logout');
  };

  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Transferencia"  element={ <Private> <Transferencia/> </Private>} />
              <Route path='/Deposito' element={<Private> <Deposito /> </Private>} />
              <Route path='/Saque' element={<Private> <Saque /> </Private>} />
              <Route path='/GerarBoleto' element={<Private> <GerarBoleto /> </Private>} />
              <Route path='/PagamentoBoleto' element={<Private> <PagamentoBoleto /> </Private>} />
              <Route path='/Login' element={<Login />} />
              <Route path='/Cadastro' element={<Cadastro />} />
            </Routes>
          </AuthProvider>
      </BrowserRouter>
    </div>
  );
}
export default AppRoutes;