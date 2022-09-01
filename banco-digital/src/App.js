import './App.css';

// React Router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

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


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Transferencia"  element={<Transferencia />} />
          <Route path='/Deposito' element={<Deposito />} />
          <Route path='/Saque' element={<Saque />} />
          <Route path='/GerarBoleto' element={<GerarBoleto />} />
          <Route path='/PagamentoBoleto' element={<PagamentoBoleto />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Cadastro' element={<Cadastro />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;