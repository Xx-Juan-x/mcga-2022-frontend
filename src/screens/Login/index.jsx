import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './login.module.css';


//HTML DE LA VENTANA LOGIN CON VALIDACIONES EN LOS INPUT Y BUTTON
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);

  console.log("email", email);
  console.log("pass", password);

  /*const handleChangeEmail = (event) =>{
    setEmail(event.target.value)
  }

  const handleChangePassword = (event) =>{
    setPassword(event.target.value)
  }*/

  const handleChange = (event, name) =>{
    switch (name) {
      case "email":
        setEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      default:
        break;
    }
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log("email", email);
    console.log("password", password);

    if (!email) return setEmailError(true);
    if (!password) return setPassError(true);
      console.log("Error en email");

      setEmailError(false);
      setPassError(false);
  }

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form onSubmit={(handleSubmit)}>

      <label>Email</label>
      <input type="email" value={email} onChange = {(event) => handleChange(event, "email")}/>

      {/* If ternarios (si el error está en true muestra un mensaje) */}

      {
        emailError && <p>Email incorrecto</p>
      }

      <label >Password</label>
      <input type="password" value={password} onChange = {(event) => handleChange(event, "password")}/>

      {
        passError && <p>Password incorrecto</p>
      }

      <button type='submit'>Iniciar Sesión</button>

      <Link to={'/'}>Ir al Welcome</Link>

      </form>
    </div>
  );
};

export default Login;
