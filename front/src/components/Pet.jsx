import { PetCard } from "./PetCard";
import { useState } from "react";

export function Pet({pet}) {
    return (
      <>
        <article>
            <section className="grid grid-cols-2 h-28 items-center bg-stone-800	">
                <img src={pet.img} alt="" className="w-28 h-28 rounded-full p-2"/>
                <div>
                   <h2 className="text-3xl mt-5">{pet.name}</h2>
                   <div className="advises grid grid-rows-2 gap-2">
                      <span className="text-xs bg-red-900	p-1 rounded-full w-24">Desparasitación</span>
                   </div>
                </div>
            </section>
        </article>
      </>
    );
  }