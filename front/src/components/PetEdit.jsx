import { Button } from "../components/Button";
import { useEffect, useState } from "react";

function editPet(input) {
  const info = {
    "method": 'DELETE',
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
    fetch(`http://localhost:5000/api/pet/` + id, info) 
      .then(response => response.json())
      .then(data => console.log(data))
}



export function PetEdit({ pet }) {

  return (
    <>
        <article className="bg-stone-800 m-5 h-full text-center">
          <h1 className="text-3xl m-2 p-1">Editando a {pet.name}</h1>
          <form className="flex flex-col items-center">
            <input
              type="text"
              name="name"
              className="m-2 text-black placeholder:text-gray-500"
              placeholder="Nombre"
            />
            <input
              type="number"
              name="weight"
              className="m-2 text-black placeholder:text-gray-500"
              placeholder="Peso (KG)"
            />
            <input
              type="text"
              name="race"
              className="m-2 text-black placeholder:text-gray-500"
              placeholder="Raza"
            />
            <Button text={"Guardar cambios"}></Button>
          </form>
        </article>
      
    </>
  );
}
