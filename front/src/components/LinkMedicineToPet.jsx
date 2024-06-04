import { useState, useEffect } from "react";

function addMedicineToPet(medicineId, petId) {
  const info = {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify(petEdited)
  }
    fetch(`http://localhost:5000/api/medicine/${medicineId}/${petId}`, info) 
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.error('Error:', error));
}

export function LinkMedicineToPet(pet) {

const [medicines, setMedicine] = useState([])

  useEffect(
    () => {
      fetch('http://localhost:5000/api/medicine')
        .then((medicines) => {
          return medicines.json()
        })
        .then((medicines) => {
            setMedicine(medicines);
        })
        
    },[]
  )

  return (
    <>
      <article className="bg-stone-800 m-5 h-full text-center">
        <h1 className="text-2xl m-2 p-1">
          Agregar medicamento a {pet.pet.name}
        </h1>
        <form className="flex flex-col justify-center items-center">
          <select name="medicine" className="m-2 text-black font-bold w-64 text-sm">
          {medicines.map((medicine) => (
            <option value={medicine.id} className="text-black text-sm">
              {medicine.name} - {medicine.brand} - {medicine.description}
            </option>
            ))}
          </select>
          <button className="p-2 m-2 bg-yellow-700 rounded-md hover:bg-yellow-800 font-bold" onClick={() => addMedicineToPet(medicine.id, pet.pet.id)}>Guardar Cambios</button>
        </form>
      </article>
    </>
  );
}
