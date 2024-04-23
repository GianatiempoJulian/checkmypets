import { useEffect, useState } from "react";
import { Pet } from "./Pet";
import {pets2} from "../pets.json"


export function PetList(){

  const [pets, setPets] = useState([])

  useEffect(
    () => {
      fetch('http://localhost:5000/api/pet')
        .then((pets) => {
          return pets.json()
        })
        .then((pets) => {
          setPets(pets);
        })
        
    },[]
  )

  return(
    <>
      <div className="bg-stone-900 m-5 flex flex-col gap-2">
        <select name="" id="" className="m-5 text-black font-bold	">
          <option value="" className="text-black">Catriel - Estrada 555</option>
          <option value="" className="text-black">Facundo - Constitucion 1555</option>
        </select>
        {pets.map((pet) => (<Pet key={pet.id} pet={pet}></Pet>))}
      </div>
    </>
  )
}