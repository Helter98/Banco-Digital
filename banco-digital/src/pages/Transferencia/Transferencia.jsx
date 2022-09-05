import './Transferencia.css';
import CurrencyInput from 'react-currency-masked-input'


const Transferencia = () => {
  return (
   <div className="heroTranfer">
    <form className='formTransfer' action="">
      
      <div className="inputFormTransfer">
      <h1>Transferir Valor</h1>
      <label className='valorTranfer' htmlFor="">
      <CurrencyInput type='text' name="myInput" pattern="\d*" required />
      </label>
      <label className='valorTranfer' htmlFor="">
          <input type="text" name="name" id="name" placeholder="Transferir"/>
      </label>

      <label className='valorTranfer' htmlFor=""> 
          <input type="text" name="name" id="name" placeholder="Transferir"/>
      </label>

      <label className='valorTranfer' htmlFor="">
          <input type="text" name="name" id="name" placeholder="Transferir"/>
      </label>
      </div>
    </form>
   </div>
  ) 
}

export default Transferencia;