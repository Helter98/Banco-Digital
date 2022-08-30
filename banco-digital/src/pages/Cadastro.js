import './Cadastro.css';
import { useForm } from "react-hook-form";
import { useState } from 'react'



const Cadastro = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const [showPessoaFisica, setshowPessoaFisica] = useState(false)
  const showFisica = () => setshowPessoaFisica(true)

  const [showPessoaJuridica, setshowPessoaJuridica] = useState(false)
  const showJuridica = () => setshowPessoaJuridica(true)


  const onSubmit = (userData) => {
    console.log(userData)
  }
  return (
    <div className='Cadastro'>

      <div className='heroCadastro'>
        <h1>Complete os campos ao lado
          <br />para se cadastrar <br /> em nosso banco</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="selectForm">
            <label>
              <input className='buttonSelect' type="button" value="Para você" onClick={showFisica} />
            </label>

            <label>
              <input className='buttonSelect' type="button" value="Para sua Empresa" onClick={showJuridica} />
            </label>
          </div>

          {showPessoaFisica ?
            <div className='pessoaFisica'>
              <label>
                <input placeholder='CPF' {...register("cpf", { required: true })} />
              </label>

              <label >
                <input placeholder='Nome completo' {...register("name", { required: true })} />
              </label>

              <label>
                <input placeholder='Email' {...register("email", { required: true })} />
              </label>

              <label>
                <input placeholder='Senha' {...register("password", { required: true })} />
              </label>

              <button className='btnPCadastro' type='submit'>Enviar</button>
            </div> : null}


          {showPessoaJuridica ?
            <div className='pessoaFisica'>
              <label>
                <input placeholder='CNPJ' {...register("cnpj", { required: true })} />
              </label>

              <label >
                <input placeholder='Razão Social' {...register("name", { required: true })} />
              </label>

              <label>
                <input placeholder='Email' {...register("email", { required: true })} />
              </label>

              <label>
                <input placeholder='Senha' {...register("password", { required: true })} />
              </label>

              <button className='btnPCadastro' type='submit'>Enviar</button>
            </div> : null}
        </form>
      </div>
      <div>
      </div>
    </div>

  )
}


export default Cadastro