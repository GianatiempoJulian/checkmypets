import { useState } from "react";
import { Button } from "./Button"

export function Register () {
    const [name, setName] = useState(" ");
    const [lastname, setLastname] = useState(" ");
    const [address, setAddress] = useState(" ")
    const [phoneNumber, setPhoneNumber] = useState(" ")
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");

    return (
      <>
        <form className="flex flex-col">
            <input 
            type="text" 
            value={name} 
            name="name" 
            onChange={target => setName(target.value)}
            className="m-2 text-black"
            />
            <input 
            type="text" 
            value={lastname} 
            name="lastname"
            onChange={target => setLastname(target.value)}
            className="m-2 text-black"
            />
            <input 
            type="text" 
            value={address} 
            name="address" 
            onChange={target => setAddress(target.value)}
            className="m-2 text-black"
            />
            <input 
            type="number" 
            value={phoneNumber} 
            name="phoneNumber" 
            onChange={target => setPhoneNumber(target.value)}
            className="m-2 text-black"
            />
            <input 
            type="email" 
            value={email} 
            name="email" 
            onChange={target => setEmail(target.value)}
            className="m-2 text-black"
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