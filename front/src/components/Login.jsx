import { useState } from "react";
import { Button } from "./Button";

export function Login () {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
   
    const handleLogin = (event) => {
        event.preventDefault();
    }

    return (
      <>
        <form onSubmit={handleLogin} className="flex flex-col">
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
            className="m-2"
            />
            <Button text="Login"></Button>
         </form>
      </>
    );
  }