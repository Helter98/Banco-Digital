import './Cadastro.css';
import { useState } from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask';

const Cadastro = () => {

  // // USE FORM
  const { register, handleSubmit, formState: { erros } } = useForm();

    const addPost = data => console.log(data)

  //SELECIONAR A OPÇÃO DE CADASTRO DE PESSOA JURIDICA
  const [documentType, setDocumentType] = useState('CPF') 


  return (
    //PAGINA DE CADASTRO
    <div className='Cadastro'>
      <div className='heroCadastro'>
        <h1>Complete os campos ao lado
          <br />para se cadastrar <br /> em nosso banco</h1>
          
          <form onSubmit={handleSubmit(addPost)}>

          <div className="selectForm">
            <select name="document_type" id="document_type" value={documentType} onChange={(e)=>setDocumentType(e.target.value)}>
              <option value="CPF">CPF</option>
              <option value="CNPJ">CNPJ</option>
            </select>
          </div>

          <div className='pessoa'>
          <label htmlFor="document_number"> 
              <InputMask type="document_number" name="document_number" id="document_number" {...register("document_type", { required: true })} placeholder={documentType} />
          </label>

           <label htmlFor="name">
              <input type='text' name='name' {...register("name", { required: true })} placeholder='Nome' />
          </label>

          <label htmlFor="email">
            <input type="email" name="email" id="email" {...register("email", { required: true })} placeholder='Email' />
          </label>

          <label htmlFor="password">
            <input type="password" name="password" id="password" {...register("email", { required: true })} placeholder='Senha' />
          </label>

          <input id='btnPCadastro' type="submit" value="Enviar" />
          </div>
        </form>
      </div>
    <div>
  </div>
</div>
  )
}
export default Cadastro