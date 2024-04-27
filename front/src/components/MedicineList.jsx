import { useEffect, useState } from "react";
import { Medicine } from "./Medicine";

export function MedicineList(){

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

  return(
    <>
      <div className="bg-stone-900 m-5 flex flex-col gap-2">
        {medicines.map((medicine) => (<Medicine key={medicine.id} medicine={medicine}></Medicine>))}
      </div>
    </>
  )
}