import { useEffect, useState } from "react";

export function PetCard({ pet }) {

  return (
    <>
      <article className="bg-stone-800 h-full">
        <section className="pet-info grid grid-cols-2">
          <img src={pet.image} alt="" className="w-32 h-32 rounded-full p-2" />
          <div className="grid">
            <h2 className="text-4xl mt-2">{pet.name}</h2>
            <div className="grid grid-rows-2 grid-cols-2 gap-2 p-1 items-center">
              <span
                className={`${
                  pet.gender === "Macho" ? "bg-sky-700" : "bg-purple-500"
                } text-xs p-1 rounded-full  text-center`}
              >
                {pet.gender}
              </span>
              <span className="text-xs bg-stone-700	p-1 rounded-full  text-center	">
                {pet.weight} KG
              </span>
              <span className="text-xs bg-stone-700	p-1 rounded-full text-center	">
                {pet.race}
              </span>
            </div>
          </div>
        </section>
        <section className="medicine-status grid grid-rows-4 grid-cols-2 gap-2 m-2 mt-5">
          <div className="bg-stone-700 grid p-2">
            <img
              src="https://uxwing.com/wp-content/themes/uxwing/download/medical-science-lab/vaccination-icon.png"
              alt=""
              className="w-20"
            />
          </div>
        </section>
      </article>
    </>
  );
}
