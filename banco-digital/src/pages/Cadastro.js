import './Cadastro.css';
import { useState } from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask';

const Cadastro = () => {

  const { register, handleSubmit, formState: { erros } } = useForm();

  const [type, setType] = useState("CPF")

  const addCadastro = data => axios.post(data)
  .then(() => {
    console.log('deu certo')
  })
  .catch(() => {
    console.log('erro')
  })

  return (
    <div className='Cadastro'>
      <div className='heroCadastro'>
        <form onSubmit={handleSubmit(addCadastro)}>
          <h1>Cadastro</h1>
          <div className="formCheck">
            <div className='inputRadioRow'>
              <div className="inputRadio">
                <input type="radio" name="document_type" id="CPF" value={"CPF"} {...register("document_type", { required: true })} onClick={(e) => setType(e.target.value)} />
                <label>Pessoa Fisica</label>
              </div>
              <div className="inputRadio">
                <input type="radio" name="document_type" id="CNPJ" value={"CNPJ"} {...register("document_type", { required: true })} onClick={(e) => setType(e.target.value)} />
                <label>Pessoa Juridica</label>
              </div>
            </div>
          </div>
          <div className='inputMaskType'>
            {type === "CPF" ?
              <InputMask className="styleInfo" mask="999.999.999-99" type="text" name='document_number' {...register("ducument_number")} placeholder="CPF" />
              : <InputMask className="styleInfo" mask="99.99.999/9999-99" type="text" name='document_number' {...register("ducument_number")} placeholder="CNPJ" />
            }
          </div>

          <div className='inputInfo'>
            <label htmlFor="name">
              <input className='styleInfo' type="text" name="name" id="name" {...register("name")} placeholder="Nome Completo" />
            </label>
            <label htmlFor="name">
              <input className='styleInfo' type="email" name="email" id="email" {...register("email", { required: true })} placeholder='Email' />
            </label>
            <label htmlFor="">
              <input className="styleInfo" name="password" id="password" {...register("password")} type="password" placeholder="Senha" />
            </label>
          </div>
          <input id='btnCadastro' type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  )
}
export default Cadastro