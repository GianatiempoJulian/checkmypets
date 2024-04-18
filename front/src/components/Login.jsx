import { useState } from "react";
import { Button } from "./Button";

export function Login () {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
   
    const handleLogin = (event) => {
        fetch("http://localhost:3030/api/user/login", {
          method: "post",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(data),
        }).then((res) => console.log(res));
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