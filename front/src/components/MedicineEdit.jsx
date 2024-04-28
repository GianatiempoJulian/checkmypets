import { Button } from "../components/Button";


export function MedicineEdit({ medicine }) {

  return (
    <>
        <article className="bg-stone-800 m-5 h-full text-center">
          <h1 className="text-3xl m-2 p-1">Editando {medicine.name}</h1>
          <form className="flex flex-col items-center">
            <input
              type="text"
              name="name"
              className="m-2 text-black placeholder:text-gray-500"
              placeholder="Nombre"
            />
            <input
              type="text"
              name="brand"
              className="m-2 text-black placeholder:text-gray-500"
              placeholder="Marca"
            />
            <input
              type="text"
              name="description"
              className="m-2 text-black placeholder:text-gray-500"
              placeholder="Descripción"
            />
            <Button text={"Guardar cambios"}></Button>
          </form>
        </article>
      
    </>
  );
}
