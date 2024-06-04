import { useState } from "react";

function updateMedicine(medicineEdited) {
  const info = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(medicineEdited),
  };
  fetch(`http://localhost:5000/api/medicine/${medicineEdited.id}`, info)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Error:", error));
}

export function MedicineEdit({ medicine }) {

  const handleSubmit = (e) => {
    updateMedicine(medicineTemp);
  };

  const [medicineTemp, setMedicineTemp] = useState(medicine);
  const [medicineChanged, setMedicineChanged] = useState(false);

  return (
    <>
      <article className="bg-stone-800 m-5 h-full text-center">
        <h1 className="text-3xl m-2 p-1">Editando {medicine.name}</h1>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="m-2 text-black placeholder:text-gray-500"
            value={medicineTemp.name}
            onChange={(e) => {
              setMedicineChanged(true);
              setMedicineTemp({ ...medicineTemp, name: e.target.value });
            }}
          />
          <input
            type="text"
            name="brand"
            className="m-2 text-black placeholder:text-gray-500"
            value={medicineTemp.brand}
            onChange={(e) => {
              setMedicineChanged(true)
              setMedicineTemp({ ...medicineTemp, brand: e.target.value })
            }}
          />
          <input
            type="text"
            name="description"
            className="m-2 text-black placeholder:text-gray-500"
            value={medicineTemp.description}
            onChange={(e) => {
              setMedicineChanged(true)
              setMedicineTemp({ ...medicineTemp, description: e.target.value })
            }}
          />
          { medicineChanged ? 
          <>
            <button className="p-2 m-2 bg-yellow-700 rounded-md hover:bg-yellow-800 font-bold" onClick={() => updateMedicine(medicineTemp)}>Guardar Cambios</button>
            <button className="p-2 m-2 bg-stone-700 rounded-md hover:bg-stone-500 font-bold" onClick={(e) => {
              setMedicineTemp(medicine)
              setMedicineChanged(false)
              }}>Descartar cambios</button>
          </> : null}
        </form>
      </article>
    </>
  );
}
