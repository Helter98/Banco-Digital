import './Cadastro.css';
import { useState } from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from "react-router-dom";


//ratamento de erros no preenchimento do formuláro
const schema = yup.object({
  document_type: yup.string().required('Selecione uma opção'),
  document_number: yup.number('Digite um documento válido').required('O documento é obrigatório'),
  name: yup.string().required('O nome é obrigatório'),
  email: yup.string().email('Digite um email válido').required('O email é obrigatório'),
  password: yup.string().min(6, 'A senha deve ter pelo menos 6 digitos').required('A senha é obrigatório'),
  address: yup.string().required('O Endereço é obrigatório'),
  number: yup.number('Digite um número válido').required('O número é obrigatório'),
  city: yup.string().required('O Endereço é obrigatório'),
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
  //   document_number: data.document_number,
  //   email: data.email, 
  //   password: data.password
  // })
  // .then((response) => {
  //   console.log(response.data)
  // })
  // .catch((erro) => {
  //   console.log(erro, 'erro')
  // })

    let navigate = useNavigate();


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
            {errors.document_type && <span>Selecione uma opção</span>}
          </div>

          <div className="cadastraCamp">

          <div className='inputMaskType'>
            <label htmlFor="">
            {type === "CPF" ?
              <InputMask className="styleInfo" mask="99999999999" type="text" name='document_number' {...register("document_number", { required: true})} placeholder="CPF" />
              : <InputMask className="styleInfo" mask="99999999000199" type="text" name='document_number' {...register("document_number", { required: true})} placeholder="CNPJ" />
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
              {errors.password?.message}
            </label>

            <label htmlFor="address">
              <input className="styleInfo" type="text" name="address" id="andress" {...register("address", { required: true})} placeholder="Endereço" />
              {errors.address?.message && <span>O Endereço é obrigatório</span>}
            </label>

            <label htmlFor="number">
              <input className="styleInfo" type="text" name="number" id="number" {...register("number", { required: true})} placeholder="Numero" />
              {errors.number?.message && <span>O número é obrigatório</span>}
            </label>

            <label htmlFor="city">
              <input className="styleInfo" type="text" name="city" id="city" {...register("city", { required: true})} placeholder="Cidade" />
              {errors.city?.message && <span>A cidade é obrigatória</span>}
            </label>
          </div>

          </div>
          <input id='btnCadastro' 
          onClick={()=>navigate("/Login")} 
          type="button" value="Enviar"/>
        </form>
      </div>
    </div>
  )
}
export default Cadastro;