import './Cadastro.css';
import { useForm } from "react-hook-form";


const Cadastro = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (userData) =>{
    console.log(userData)
  }


  function Evento() {
    console.log('ativado')
  }
  
  return (
    <div className='Cadastro'> 

    <div className='heroCadastro'>
      <h1>Complete os campos ao lado 
        <br />para se cadastrar <br /> em nosso banco</h1>
    </div>

        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="selectForm">

          <label>
          <input className='buttonSelect' type="button" n value="fisica" onClick={Evento}/>
          </label>

          <label>
          <input className='buttonSelect' type="button"  value="Juridica" onClick={Evento}/>

          </label>
          </div>



        <label>
          <input placeholder='CPF' {...register("cpf",{ required: true })} />
        </label>

        <label > 
          <input placeholder='Nome completo' {...register("name", { required: true })}/>
        </label>

        <label>
          <input placeholder='Email' {...register("email", { required: true })}/>
        </label>

        <label>
          <input placeholder='Senha' {...register("password", { required: true })}/>
        </label>

        <button className='btnPCadastro' type='submit'>Enviar</button>

      </form>

      
      </div>

  )
}


export default Cadastro