import { useState } from "react";
import { Button } from "./Button"
import { useForm } from "react-hook-form"

export function Register () {
  const {register, handleSubmit, 
    formState:{errors}
  } = useForm()




  const onSubmit = handleSubmit((data) =>{
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({data})
  };

    fetch("http://localhost:5000/api/user/register", requestOptions)
      .then(response => response.json())
      .then(a => console.log(a));
  })  

    return (
      <>
        <form className="flex flex-col" onSubmit={onSubmit}>
            <input 
            type="text" 
            name="name" 
            {...register("name",{
              required: true
            },)}
            className="m-2 text-black" 
            />{errors.name && <span className="text-sm text-red-700 ml-5">Nombre es requerido.</span>}
            <input 
            type="text" 
            {...register("lastname",{
              required: true
            })}
            name="lastname"
            className="m-2 text-black"
            />{errors.lastname && <span className="text-sm text-red-700 ml-5">Apellido es requerido.</span>}
            <input 
            type="text" 
            name="address"
            {...register("address",{
              required: true
            })}
            className="m-2 text-black"
            />{errors.address && <span className="text-sm text-red-700 ml-5">Dirección es requerido.</span>}
            <input 
            type="number" 
            name="phoneNumber"
            {...register("phoneNumber",{
              required: true
            })}
            className="m-2 text-black"
            />{errors.phoneNumber && <span className="text-sm text-red-700 ml-5">Teléfono es requerido.</span>}
            <input 
            type="email" 
            name="email"
            {...register("email",{
              required: true
            })}
            className="m-2 text-black"
            />{errors.email && <span className="text-sm text-red-700 ml-5">Email es requerido.</span>}
            <input
            type="password" 
            name="password"
            {...register("password",{
              required: true
            })}
            className="m-2 text-black"
            />{errors.password && <span className="text-sm text-red-700 ml-5">Contraseña es requerido.</span>}
            <Button text="Register"></Button>
         </form>
      </>
    );
  }