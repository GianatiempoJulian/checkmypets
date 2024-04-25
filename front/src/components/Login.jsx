import { useState } from "react";
import { Button } from "./Button";

export function Login () {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
  

    return (
      <>
        <form className="flex flex-col">
            <input 
            type="email" 
            value={email} 
            name="email"
            placeholder="Email" 
            onChange={target => setEmail(target.value)}
            className="m-2"
            />
            <input
            type="password" 
            value={password} 
            name="password"
            placeholder="Contraseña"
            onChange={target => setPassword(target.value)}
            className="m-2"
            />
            <Button text="Login"></Button>
         </form>
      </>
    );
  }