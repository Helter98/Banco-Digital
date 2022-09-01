import './Cadastro.css';
import { useState } from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask';

const Cadastro = () => {

  const { register, handleSubmit, formState: { erros } } = useForm();

  const [type, setType] = useState("CPF")

 
  
  // const addCadastro = data => console.log(
  //   {name: data.name,
  //       document_type: data.document_type,
  //       document_number: parseInt(data.document_number), 
  //       email: data.email, 
  //       password:  data.password
  //     }) 
  const addCadastro = data => axios.post("https://9d97-179-108-104-153.sa.ngrok.io/api/users", 
  {name: data.name,
    document_type: data.document_type,
    document_number: parseInt(data.document_number), 
    email: data.email, 
    password: data.password
  })
  .then((response) => {
    console.log(response.data)
  })
  .catch((erro) => {
    console.log(erro, 'erro')
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
              <InputMask className="styleInfo" mask="99999999999" type="text" name='document_number' {...register("document_number")} placeholder="CPF" />
              : <InputMask className="styleInfo" mask="9999999999999" type="text" name='document_number' {...register("document_number")} placeholder="CNPJ" />
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