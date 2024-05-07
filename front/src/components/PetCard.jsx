import { useEffect } from "react";

export function PetCard({ pet }) {


  /*
  useEffect(() => {
    fetch("http://localhost:5000/api/pets/medicines")
      .then((medicines) => {
        return medicines.json();
      })
      .then((medicines) => {
        setMedicine(medicines);
      });
  }, []);*/

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
            <div>
              <h3 className="text-2xl text-black bold">Quintuple</h3>
              <p className="text-neutral-500	">Canigen MHA2PPi</p>
              <div className="text-neutral-500 flex gap-2 m-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-check-2"><path d="M8 2v4"/><path d="M16 2v4"/><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"/><path d="M3 10h18"/><path d="m16 20 2 2 4-4"/></svg>
                <p> 24/04/23</p>
              </div>
              <div className="text-neutral-500 flex gap-2 m-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-x-2"><path d="M8 2v4"/><path d="M16 2v4"/><path d="M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"/><path d="M3 10h18"/><path d="m17 22 5-5"/><path d="m17 17 5 5"/></svg>
              <p> 24/04/24</p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
