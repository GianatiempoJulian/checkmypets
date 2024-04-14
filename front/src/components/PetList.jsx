import { useEffect, useState } from "react";
import { Pet } from "./Pet";
import { pets } from "../pets.json"
import { PetCard } from "./PetCard"


export function PetList(){
  /*
    const [data, setData] = useState([])
    useEffect(() => {
      fetch('../pets.json')
        .then(res => res.json())
        .then((res) => setData(res))
        .catch((error) => console.error("Error fetching data:", error));
    }, [])
    */
 


  return(
    <>
      <div className="bg-stone-900 m-5 flex flex-col gap-2">
        <select name="" id="" className="m-5 text-black font-bold	">
          <option value="" className="text-black">Catriel - Estrada 555</option>
          <option value="" className="text-black">Facundo - Constitucion 1555</option>
        </select>
        {pets.map((pet) => (
          <Pet key={pet.id} pet={pet}></Pet>
        ))}
      </div>
     
    </>
  )
}