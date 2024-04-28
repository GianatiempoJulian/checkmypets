import { PetCard } from "./PetCard";
import { PetEdit } from "./PetEdit";
import { useState } from "react";

export function Pet( pet ) {
  const [data, setData] = useState('hidden');
  const [edit, setEdit] = useState('hidden');

  const showInfo = () => {
    data == ' ' ? setData('hidden') : setData(' ')
  };

  const showEdit = () =>{
    edit == ' ' ? setEdit('hidden') : setEdit(' ')
  }

  return (
    <>
    <article>
        <section
          className="grid grid-cols-3 h-28 items-center bg-stone-800 gap-5	hover:bg-stone-700"
        >
          <img src={pet.pet.image} alt="" className="w-24 h-24 rounded-full p-2" />
          <div>
            <h2 className="text-3xl mt-5">{pet.pet.name}</h2>
            <div className="advises grid grid-rows-2 gap-2">
              <div className="text-xs bg-red-900	p-1 rounded-full w-auto flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-alert"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
                <p className="mr-3">Desparasitar</p>
              </div>
            </div>
          </div> 
          {/* If session admin */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4 p-4">
              <button onClick={showInfo}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-text"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg></button>
              <button onClick={showEdit}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(202 138 4)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-pen-line"><path d="m18 5-3-3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"/><path d="M8 18h1"/><path d="M18.4 9.6a2 2 0 1 1 3 3L17 17l-4 1 1-4Z"/></svg></button>
              <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(185 28 28)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg></button>
          </div>
          {/* end If session admin */}
        </section>
      </article>
      <div className={data}>
        <PetCard pet={pet.pet}></PetCard>
      </div>
      <div className={edit}>
        <PetEdit pet={pet.pet}></PetEdit>
      </div>
    </>
  );
}
