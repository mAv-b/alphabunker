import { useContext, useState, useRef } from "react";
import { ApiRequest } from "../libs/axios";
import { LoginContext } from "../providers";
import { LoginComponent } from '.'

export function RegisterComponent(){
    const c = useContext(LoginContext);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const nameVerify = useRef(null);
    const cpfVerify = useRef(null);
    const passwordVerify = useRef(null);
    const password2Verify = useRef(null);
    const emailVerify = useRef(null);
    const ageVerify = useRef(null);

    const validateEmail = (email: string) => {
      const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return regex.test(email)
    };

    function calcAge(dateString: string) {
        var birthday = +new Date(dateString);
        return ~~((Date.now() - birthday) / (31557600000));
    }

    const validateCPF = (cpf: string) => {
      const regex = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/
      return regex.test(cpf)
    };

    const validatePassword = (password: string) => {
      const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#!%])[0-9a-zA-Z$*&@#!%]{8,}$/
      return regex.test(password)
    };



    const ErrorTransaction = (cpf: string, password: string, email: string, age: string, name:string, password2:string) => {

      let nameCheck: any = nameVerify.current!;
      let cpfCheck: any = cpfVerify.current!;
      let passCheck: any = passwordVerify.current!;
      let pass2Check: any = password2Verify.current!;
      let emailCheck: any = emailVerify.current!;
      let ageCheck: any = ageVerify.current!;

      if (name.length < 3) {
          nameCheck.classList.toggle("hidden");
      }
      if (!validateCPF(cpf)) {
          cpfCheck.classList.toggle("hidden");
      }
      if (!validatePassword(password)) {
          passCheck.classList.toggle("hidden");
      }
      if (!(password2 === password)) {
          pass2Check.classList.toggle("hidden");
      }
      if (!validateEmail(email)) {
        emailCheck.classList.toggle("hidden");
      }
      if (calcAge(age)<16) {
        ageCheck.classList.toggle("hidden");
      }
  };

    return (
        <section className="flex flex-col justify-center items-center">
            <h2 className="mt-7 mb-4 text-center text-header-dark dark:text-white">Crie sua conta</h2>
            <div><input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Digite seu nome" className="text-paragraph-dark text-center mb-3 w-240 p-1 border-2 border-gray-300 placeholder-input-placeholder border-input-b rounded-md dark:text-black" /></div>
            <p ref={nameVerify} className="hidden text-red-600/100 absolute pb-48 text-sm">Nome maior que 3 caracteres</p>
            <div><input onChange={(e)=>setBirthdate(e.target.value)} type="text" placeholder="Data de nascimento" className="text-paragraph-dark text-center mb-3 w-240 p-1 border-2 border-gray-300 placeholder-input-placeholder border-input-b rounded-md dark:text-black" /></div>
            <p ref={ageVerify} className="hidden text-red-600/100 absolute pb-24 text-sm">Deve ser maior que 16 anos</p>
            <div><input onChange={(e)=>setCpf(e.target.value)} type="text" placeholder="Digite seu CPF" className="text-paragraph-dark text-center mb-3 w-240 p-1 border-2 border-gray-300 placeholder-input-placeholder border-input-b rounded-md dark:text-black" /></div>
            <p ref={cpfVerify} className="hidden text-red-600/100 absolute pb-4 text-sm">CPF Inválido</p>
            <div><input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Digite seu email" className="text-paragraph-dark text-center mb-3 w-240 p-1 border-2 border-gray-300 placeholder-input-placeholder border-input-b rounded-md dark:text-black" /></div>
            <p ref={emailVerify} className="hidden text-red-600/100 absolute pt-20 text-sm">Email Inválido</p>
            <div><input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Digite sua senha" className="text-paragraph-dark text-center mb-3 w-240 p-1 border-2 border-gray-300 placeholder-input-placeholder border-input-b rounded-md dark:text-black" /></div>
            <p ref={passwordVerify} className="hidden text-red-600/100 absolute pt-40 text-sm">Senha deve conter caracteres do tipo Aa1!</p>
            <div><input onChange={(e)=>setPassword2(e.target.value)} type="password" placeholder="Confirme sua senha" className="text-paragraph-dark text-center mb-5 w-240 p-1 border-2 border-gray-300 placeholder-input-placeholder rounded-md dark:text-black" /></div>
            <p ref={password2Verify} className="hidden text-red-600/100 absolute pt-64 text-sm">Senhas diferentes</p>
            <div><button onClick={()=>{ApiRequest.createInstanceAxios().register(name,password,email,cpf,birthdate); ErrorTransaction(cpf, password, email, birthdate, name, password2)}} className="px-20 mb-1 w-240 p-1 text-btn-text rounded-md bg-btn-primary-base hover:bg-btn-primary-hover">Cadastrar</button></div>
            <button className="px-24 w-240 p-0.5 text-center dark:text-input-inactive" onClick={()=>c!.setState(<LoginComponent />)}>Entrar</button>
        </section>
    )
};
