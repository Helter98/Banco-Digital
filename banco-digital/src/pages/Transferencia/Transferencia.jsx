import './Transferencia.css';
import CurrencyInput from 'react-currency-masked-input'


const Transferencia = () => {
  return (
   <div className="heroTranfer">
    <form className='formTransfer' action="">
      
      <div className="inputFormTransfer">
      <h1>Transferir Valor</h1>
      <label className='valorTranfer' htmlFor="">
       <p>R$</p> 
      <CurrencyInput type='text' name="valorTransfer" pattern="\d*"  placeholder="0,00" required />
      </label>
      {/* <label className='valorTranfer' htmlFor="">
          <input type="text" name="name" id="name" placeholder="Transferir"/>
      </label>

      <label className='valorTranfer' htmlFor=""> 
          <input type="text" name="name" id="name" placeholder="Transferir"/>
      </label>

      <label className='valorTranfer' htmlFor="">
          <input type="text" name="name" id="name" placeholder="Transferir"/>
      </label> */}
      </div>
    </form>
   </div>
  ) 
}

export default Transferencia;