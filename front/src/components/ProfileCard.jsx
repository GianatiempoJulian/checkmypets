export function ProfileCard({user}) {
    return (
      <>
        <article className="bg-stone-800 m-5 h-full">
            <section className="pet-info grid grid-rows-2 justify-center items-center justify-items-center">
                <h1 className="text-4xl">Julian Gianatiempo</h1>
                <div className="flex flex-col gap-2">
                    <span className="bg-stone-500 rounded-md p-1">2235553333</span>
                    <span className="bg-stone-500 rounded-md p-1">giana@gmail.com</span>
                    <span className="bg-stone-500 rounded-md p-1">Urquia 3028</span>
                    <div className="flex flex-col rounded-md">
                        <span className="bg-stone-500 p-1">Catriel [Estrada 555]</span>
                        <span className="bg-stone-500 p-1">Loxo [Constitucion 555]</span>
                    </div>
                </div>
            </section>
            <section className="medicine-status grid grid-rows-3 grid-cols-2 gap-2 m-2 mt-5">
            </section>
        </article>
      </>
    );
  }