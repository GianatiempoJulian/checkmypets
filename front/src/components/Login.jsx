import { useState } from "react";
import { Button } from "./Button";

export function Login() {
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ')

  const handleSubmit = (e) =>{
    e.preventDefault();

    const data = {
      email: email,
      password: password
    }
    
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({data})
    };
  
    fetch("http://localhost:5000/api/user/login", requestOptions)
      .then(response => response.json())
      .then(a => console.log(a));
    }


  return (
    <>
       <form className="flex flex-col m-2" onSubmit={handleSubmit}>
        <input
          placeholder="Correo"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="m-2 text-black"
        />
        <input
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="m-2 text-black"
        />
        <Button text="Login"></Button>
      </form>
    </>
  );
}

