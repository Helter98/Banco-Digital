import './Cadastro.css';
import { useForm } from "react-hook-form";
import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import InputMask from 'react-input-mask';



//Tratamento de erros no preenchimento do formuláro
const schema = yup.object({
  cpf: yup.string().required('O CNPJé obrigatório'),
  cnpj: yup.string().required('O CPF é obrigatório'),
  name: yup.string().required('O nome é obrigatório'),
  email: yup.string().email('Digite um email válido').required('O email é obrigatório'),
  password: yup.string().min(6, 'A senha deve ter pelo menos 6 digitos').required('A senha é obrigatório'),
  confirmPassword: yup.string().required('Confirmar a senha é obrigatório').oneOf([yup.ref("password"), "As senhas deve ser iguais"]),
}).required();

const Cadastro = () => {

// USE FORM
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  //SELECIONAR A OPÇÃO DE CADASTRO DE PESSOA JURIDICA
  const [showPessoaJuridica, setshowPessoaJuridica] = useState(false)
  const showJuridica = () => setshowPessoaJuridica(true)

  //Enviar formulário
  const onSubmit = (registerUser) => {
    console.log(registerUser)
  }
  
  return (
//PAGINA DE CADASTRO
    <div className='Cadastro'>
      <div className='heroCadastro'>
        <h1>Complete os campos ao lado
          <br />para se cadastrar <br /> em nosso banco</h1>

          {/* FORMULÁRIO DE CADASTRO */}
          {/* ENVIO DO FORMULÁRIO */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* SELECIONAR A OPÇÃO DE CADASTRO DE PESSOA JURIDICA NO CLICK */}
          <div className="selectForm">
            <label>
            {/* */}  <input className='opSelect' type="text" value="Para sua Empresa" onClick={showJuridica} />
            </label>
          </div>
          
          {/* CONDICIONAL PARA MOSTRAR FORMULÁRIO PESSOA JURIDICA NO CLICK */}
          {showPessoaJuridica ?
            <div className='pessoa'>
              <label>
              <InputMask placeholder='CNPJ' mask="99.999.999/9999-99" {...register("cnpj", { required: true })} />
               {/*  <input type="text" placeholder='CNPJ' {...register("cnpj", { required: true })} />*/}
                {errors.cnpj &&
                  <span>{errors.cnpj?.message}</span>
                }
              </label>

              <label >
                <input type="text" placeholder='Razão Social' {...register("name", { required: true })} />
                {errors.name &&
                  <span>{errors.name?.message}</span>
                }
              </label>

              <label>
                <input type="email" placeholder='Email' {...register("email", { required: true })} />
                {errors.email &&
                  <span>Este campo é obrigatório</span>
                }
              </label>

              <label>
                <input type="password" placeholder='Senha' {...register("password", { required: true })} />
                {errors.password &&
                  <span>{errors.password?.message}</span>
                }
              </label>

              <label>
                <input type="password" placeholder='Confirmar Senha' {...register("confirmPassword", { required: true })} />
                {errors.confirmPassword &&
                  <span>{errors.confirmPassword?.message}</span>
                }
              </label>

              <button className='btnPCadastro' type='submit'>Enviar</button>
            </div>
            // AO ABRIR A PÁGINA OU QUANDO NÃO FOR CLICADO EM NADA VALOR NULL ABRE DIRETO NA PAGINA DE PESSOA FISICA
            : 
            <div className='pessoa'>
              <label>
              <InputMask placeholder='CPF' mask="999.999.999-99" {...register("cpf", { required: true })} />
               {/* <input type="text" placeholder='CPF' {...register("cpf", { required: true })} /> */}
                {errors.cpf &&
                  <span>{errors.cpf?.message}</span>
                }
              </label>

              <label >
                <input type="text" placeholder='Nome completo' {...register("name", { required: true })} />
                {errors.name &&
                  <span>{errors.name?.message}</span>
                }
              </label>

              <label>
                <input type="email" placeholder='Email' {...register("email", { required: true })} />
                {errors.email &&
                  <span>{errors.email?.message}</span>
                }
              </label>

              <label>
                <input type="password" placeholder='Senha' {...register("password", { required: true })} />
                {errors.password &&
                  <span>{errors.password?.message}</span>
                }
              </label>

              <label>
                <input type="password" placeholder='Confirmar Senha' {...register("confirmPassword", { required: true })} />
                {errors.confirmPassword &&
                  <span>{errors.confirmPassword?.message}</span>
                }
              </label>

             {/* VALIDAÇÃO DO FORMULARIO NO MOMENTO DO CLICK*/}
              <button className='btnPCadastro' type='submit'>Enviar</button>
            </div>
          }
        </form>
      </div>
      <div>
      </div>
    </div>

  )
}
export default Cadastro