import { useState } from 'react';
import Datos from '../datos';
import style from "./Form.module.css";

// import {Link} from 'react-router-dom';
// import ada from './ada.png';

export default function Form(){

  const[input, setInput] = useState({ usuario: "", mail: "", contraseña: "" })
  const[baseDatos] = useState({ usuario: "Emiliano", mail: "emi@gmail.com", contraseña: "12345678" })
  const[datos, setDatos] = useState(false)

  const [errors, setErrors] = useState({})

  function errores(input){
    let error = {};

    if(!input.usuario || !/^[A-Z]+[A-Za-z0-9\s]+$/g.test(input.usuario)){
        error.usuario = 'Al menos dos caracteres el primero, letra mayuscula.';
    }

    if(!input.mail){
        error.mail = 'Coloque un mail';
    }

    if(!input.contraseña  || input.contraseña.length < 8) {
        error.contraseña = 'La contraseña tiene que tener 8 caracteres como minimo.';
    }

    return error
  }

  function handleChange(e){
      e.preventDefault ();
      setInput({
      ...input,
      [e.target.name] : e.target.value,
      });
      setErrors(errores({
        ...input,
        [e.target.name]: e.target.value
      }));
  }

  function handleSubmit(e){
    e.preventDefault()
    if(input.usuario.length < 1
    || errors.hasOwnProperty("usuario") //devuelve un buleano si el objeto tiene la propiedad especificada 
    || errors.hasOwnProperty("mail")
    || errors.hasOwnProperty("contraseña")
    ) {
    alert ("Debe completar todos los datos con asteriscos (*) de manera correcta")

    } else if(input.usuario !== baseDatos.usuario)
      {alert ("usuario incorrecto")
      } else if(input.mail !== baseDatos.mail)
        {alert ("mail incorrecto")
        } else if(input.contraseña !== baseDatos.contraseña)
          {alert ("contraseña incorrecta")
          }  else {
              alert ("sesion iniciada")
              setDatos (true)
              }
      
  }
  function click(){
    setDatos(false)
  }
    

   return(

    <div>
      {/* <a href="https://adaitw.org/"> */}
      <img className={style.imagen} src = "https://adaitw.org/wp-content/uploads/2021/05/carreras_backend_2021.png" alt="ada" />
      {/* </a> */}
      {datos ?
      (<div className ={style.datos}>
        Bienvenida/o {input.usuario} {<br />}
        Los datos de sus alumnas son: 
        <Datos />
        Ante cualquier duda comuniquese con ada@gmail.com
        <button onClick={click}>Salir</button>
      </div>):
      <form className={style.contenedor}  onSubmit = {(e)=>handleSubmit(e)} >
     
        <label> </label><br/>
        <input
        placeholder="Usuario: (*)"
        autoComplete="off"
        type = "text"
        value = {input.usuario}
        name = "usuario"
        onChange ={(e)=>handleChange(e)} 
        /> <br/>
        {errors.usuario && (<p className ={style.error}>{errors.usuario}</p>)} 

        <input  
        autoComplete="off"  
        type="text" 
        value={input.mail} 
        name='mail' 
        placeholder="Mail. (*)"  
        onChange={(e)=>handleChange(e)} 
        /><br/>
        {errors.mail && (<p className ={style.error}>{errors.mail}</p>)} 

        <input  
        autoComplete="off" 
        type="password" 
        value={input.contraseña} 
        name='contraseña'  
        placeholder="Contraseña. (*)" 
        onChange={(e)=>handleChange(e)}
        /> <br/>
        {errors.contraseña && (<p className ={style.error}>{errors.contraseña}</p>)} 

        <button className={style.boton} type='submit'>Iniciar sesion</button>

      </form>
 }

    </div>
  )
}