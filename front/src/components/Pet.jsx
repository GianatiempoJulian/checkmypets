import { PetCard } from "./PetCard";
import { useState } from "react";

export function Pet( pet ) {
  const [data, setData] = useState('hidden');

  const showInfo = () => {
    data == ' ' ? setData('hidden') : setData(' ')
  };

  return (
    <>
    <article>
        <section
        
          className="grid grid-cols-3 h-28 items-center bg-stone-800 gap-5	hover:bg-stone-700 cursor-pointer"
          onClick={showInfo}
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
          <div className="flex flex-cols gap-3 ml-3">
              <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(202 138 4)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg></button>
              <button><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="rgb(185 28 28)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg></button>
          </div>
          {/* end If session admin */}
        </section>
      </article>
      <div className={data}>
        <PetCard pet={pet.pet}></PetCard>
      </div>
    </>
  );
}
