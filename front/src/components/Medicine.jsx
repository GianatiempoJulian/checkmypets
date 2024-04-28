import { useState } from "react";
import { MedicineEdit } from "./MedicineEdit"

export function Medicine( medicine ) {

  const [edit, setEdit] = useState('hidden');

  const showEdit = () =>{
    edit == ' ' ? setEdit('hidden') : setEdit(' ')
  }

  return (
    <>
    <article>
        <section
          className="grid grid-cols-3 h-28 items-center bg-stone-800 gap-5">
          <img className="w-28 p-2" src="https://uxwing.com/wp-content/themes/uxwing/download/medical-science-lab/vaccination-icon.png" alt="" />
          <div className="flex flex-col mb-2">
            <h4 className="text-2xl mt-5">{medicine.medicine.name}</h4>
            <h5 className="text-sm">{medicine.medicine.brand}</h5>
            <p className="text-sm">{medicine.medicine.description}</p>
          </div> 
          <div className="flex flex-cols gap-3 ml-3">
              <button onClick={showEdit}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(202 138 4)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg></button>
              <button><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="rgb(185 28 28)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg></button>
          </div>
        </section>
        <div className={edit}>
        <MedicineEdit medicine={medicine.medicine}></MedicineEdit>
      </div>
      </article>
    </>
  );
}
