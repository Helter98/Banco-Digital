import './Cadastro.css';
import { useState } from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask';

const Cadastro = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const [type, setType] = useState("CPF")

  const addCadastro = data => console.log(data)
  // axios.post("https://9d97-179-108-104-153.sa.ngrok.io/api/users", 
  // {name: data.name,
  //   document_type: data.document_type,
  //   document_number: parseInt(data.document_number),
  //   email: data.email, 
  //   password: data.password
  // })
  // .then((response) => {
  //   console.log(response.data)
  // })
  // .catch((erro) => {
  //   console.log(erro, 'erro')
  // })

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
              : <InputMask className="styleInfo" mask="99999999999999" type="text" name='document_number' {...register("document_number")} placeholder="CNPJ" />
            }
            <div className='spanObrig'>
              {errors.document_number && <span>O documento é obrigatório</span>}
            </div>
          </div>

          <div className='inputInfo'>
            <label htmlFor="name">
              <input className='styleInfo' type="text" name="name" id="name" {...register("name")} placeholder="Nome" />
              <div className='spanObrig'>
              {errors.name && <span>O nome é obrigatório</span>}
            </div>
            </label>
            
            <label htmlFor="email">
              <input className='styleInfo' type="email" name="email" id="email" {...register("email", { required: true })} placeholder='Email' />
            <div className='spanObrig'>
              {errors.email && <span>O email é obrigatório</span>}
            </div>
            </label>
            <label htmlFor="password">
              <input className="styleInfo" name="password" id="password" {...register("password")} type="password" placeholder="Senha" />
            <div className='spanObrig'>
              {errors.password && <span>A senha é obrigatória</span>}
            </div>
            </label>
          </div>
          <input id='btnCadastro' type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  )
}
export default Cadastro;