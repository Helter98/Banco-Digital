import './Cadastro.css';
import { useState } from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

//ratamento de erros no preenchimento do formuláro
const schema = yup.object({
  document_number: yup.string().required('O documento é obrigatório'),
  name: yup.string().required('O nome é obrigatório'),
  email: yup.string().email('Digite um email válido').required('O email é obrigatório'),
  password: yup.string().min(6, 'A senha deve ter pelo menos 6 digitos').required('A senha é obrigatório'),
}).required();


const Cadastro = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

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
        <form className='formCadastro' onSubmit={handleSubmit(addCadastro)}>
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
            {errors.document_number && <span>Selecione a opção</span>}
          </div>

          <div className="cadastraCamp">

          <div className='inputMaskType'>
            <label htmlFor="">
            {type === "CPF" ?
              <InputMask className="styleInfo" mask="999.999.999-99" type="text" name='document_number' {...register("document_number", { required: true})} placeholder="CPF" />
              : <InputMask className="styleInfo" mask="99.999.999/0001.99" type="text" name='document_number' {...register("document_number", { required: true})} placeholder="CNPJ" />
            }
            {errors.document_number?.message && <span>O documento é obrigatório</span>}
            </label>
          
          </div>

          <div className='inputInfo'>
            <label htmlFor="name">
              <input className='styleInfo' type="text" name="name" id="name" {...register("name", { required: true})} placeholder="Nome" />
              {errors.name?.message && <span>O nome é obrigatório</span>}
            </label>
            
            <label htmlFor="email">
              <input className='styleInfo' type="email" name="email" id="email" {...register("email", { required: true })} placeholder='Email' />
              {errors.email?.message && <span>O email é obrigatório</span>}

            </label>

            <label htmlFor="password">
              <input className="styleInfo" name="password" id="password" {...register("password", { required: true})} type="password" placeholder="Senha" />
              {errors.password?.message && <span>A senha é obrigatório</span>}
            </label>
          </div>

          </div>
          <input id='btnCadastro' type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  )
}
export default Cadastro;