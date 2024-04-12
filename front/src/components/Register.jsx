import { useState } from "react";
import { Button } from "./Button"

export function Register () {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    return (
      <>
        <form className="flex flex-col">
            <input 
            type="text" 
            value={username} 
            name="username" 
            onChange={target => setUsername(target.value)}
            className="m-2"
            />
            <input
            type="password" 
            value={password} 
            name="password" 
            onChange={target => setPassword(target.value)} 
            className="m-2 text-black"
            />
            <Button text="Register"></Button>
         </form>
      </>
    );
  }