import { useEffect, useState } from "react";

export function PetCard({pet}) {
   const [gender, setGender] = useState(" ");

    useEffect(()=>{
      let span = document.getElementsByClassName('pet-gender-span');
      for(let i = 0; i < span.length; i++){
        if(!span[i].classList.contains('bg-sky-700') && !span[i].classList.contains('bg-purple-500')){
          pet.gender == 'Macho' ? setGender("bg-sky-700") : setGender("bg-purple-500")
          span[i].className += gender;
        }
      }
    })


    return (
      <>
        <article className="bg-stone-800 h-full">
          <section className="pet-info grid grid-cols-2">
             <img src={pet.img} alt=""  className="w-32 h-32 rounded-full p-2"/>
             <div className="grid">
                 <h2 className="text-4xl mt-2">{pet.name}</h2>
                 <div className="grid grid-rows-2 grid-cols-2 gap-2">
                    <span className="pet-gender-span text-xs p-1 rounded-full w-16 h-7 text-center">{pet.gender} ♂</span>
                    <span className="text-xs bg-stone-700	p-1 rounded-full w-16 h-7 text-center	">{pet.weight} KG </span>
                    <span className="text-xs bg-stone-700	p-1 rounded-full w-16 h-7 text-center	">{pet.race} 🐾</span>
                 </div>
             </div>
          </section>
          <section className="medicine-status grid grid-rows-3 grid-cols-2 gap-2 m-2 mt-5">
                <div className="bg-stone-700 grid p-2">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/medical-science-lab/vaccination-icon.png" alt="" className="w-20"/>
                    <div>
                      <h3 className="text-2xl text-black bold">Quintuple</h3>
                      <p className="text-neutral-500	">Canigen MHA2PPi</p>
                      <p className="text-neutral-500	">Aplicada: 24/04/23 - Vencimiento 24/04/24</p>
                    </div>
                </div>
                <div className="bg-stone-700 grid p-2">
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/medical-science-lab/vaccination-icon.png" alt="" className="w-20"/>
                    <div>
                      <h3 className="text-2xl text-black bold">Sextuple</h3>
                      <p className="text-neutral-500	">Quantum DA2PPvL</p>
                      <p className="text-neutral-500	">Aplicada: 24/04/23 - Vencimiento 24/04/24</p>
                    </div>
                </div>
                <div className="bg-red-900 grid p-2">
                <img src="https://uxwing.com/wp-content/themes/uxwing/download/medical-science-lab/medicine-icon.png" alt="" className="w-20"/>
                    <div>
                      <h3 className="text-xl text-black bold">Desparasitación</h3>
                      <p className="text-red-500	">Quantum DA2PPvL</p>
                      <p className="text-red-500	">Aplicada: 24/04/23 - Vencimiento 24/04/24</p>
                    </div>
                </div>
          </section>
        </article>
      </>
    );
  }