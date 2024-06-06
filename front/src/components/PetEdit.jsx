import { useState } from "react";

function updatePet(petEdited) {
  const info = {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(petEdited)
  }
    fetch(`http://localhost:5000/api/pet/${petEdited.id}`, info) 
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.error('Error:', error));
}

export function PetEdit({ pet }) {

  const handleSubmit = (e) => {
    updatePet(petTemp);
  };

  const [petTemp, setPetTemp] = useState(pet);
  const [petChanged, setPetChanged] = useState(false);

  return (
    <>
      <article className="bg-stone-800 m-5 h-full text-center">
        <h1 className="text-3xl m-2 p-1">Editando a {pet.name}</h1>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="m-2 text-black placeholder:text-gray-500"
            placeholder="Nombre"
            value={petTemp.name}
            onChange={(e) => {
              setPetChanged(true)
              setPetTemp({ ...petTemp, name: e.target.value })
            }}
          />
          <input
            type="number"
            name="weight"
            className="m-2 text-black placeholder:text-gray-500"
            placeholder="Peso (KG)"
            value={petTemp.weight}
            onChange={(e) => {
              setPetChanged(true)
              setPetTemp({ ...petTemp, weight: e.target.value })
            }}
          />
          <input
            type="text"
            name="race"
            className="m-2 text-black placeholder:text-gray-500"
            placeholder="Raza"
            value={petTemp.race}
            onChange={(e) => {
              setPetChanged(true)
              setPetTemp({ ...petTemp, race: e.target.value })
            }}
          />
          { petChanged ? 
          <>
            <button className="p-2 m-2 bg-yellow-700 rounded-md hover:bg-yellow-800 font-bold" onClick={() => updatePet(petTemp)}>Guardar Cambios</button>
            <button className="p-2 m-2 bg-stone-700 rounded-md hover:bg-stone-500 font-bold" onClick={(e) => {
              setPetTemp(pet)
              setPetChanged(false)
              }}>Descartar cambios</button>
          </> : null}
        </form>
      </article>
    </>
  );
}
