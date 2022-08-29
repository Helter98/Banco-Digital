import './App.css';

// React Router
import {BrowserRouter, Routes, Route} from 'react-router-dom'


// Components
import Navbar from './components/Navbar';

//Pages

import Home from './pages/Home';
import Transferencia from './pages/Transferencia';
import Deposito from './pages/Deposito';
import Saque from './pages/Saque';
import GerarBoleto from './pages/GerarBoleto';
import PagamentoBoleto from './pages/PagamentoBoleto';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';


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
          <Route path='/Login' element={<Login/>} />
          <Route path='/Cadastro' element={<Cadastro />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;