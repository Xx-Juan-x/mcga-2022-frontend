import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data)
  };

  console.log(errors);
  return (
    <div>
       <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input type={"email"} {...register("email",{required: true})}/>
        {errors.email && <span>This field is required</span>}

        <label>Password</label>
        <input type={"password"} {...register("password", { required: true, minLength: 6 })} />
        {errors.password && <span>error password</span>}


        <button type="submit">Login</button>
      </form>
      <Link to={"/"}>Ir al welcome</Link> 
    </div>
   
  )
}