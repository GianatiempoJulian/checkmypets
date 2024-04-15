import { Button } from "../components/Button";

export function ProfileEdit() {
    return (
      <>
        <article className="bg-stone-800 m-5 h-full text-center">
            <h1 className="text-3xl m-2">Editar datos</h1>
            <form className="flex flex-col items-center">
                <input 
                type="text" 
                name="number" 
                className="m-2 text-black placeholder:text-gray-500"
                placeholder="Número"
                />
                <input
                type="email" 
                name="email" 
                className="m-2 text-black placeholder:text-gray-500"
                placeholder="Correo"
                />
                <input 
                type="text" 
                name="address" 
                className="m-2 text-black placeholder:text-gray-500"
                placeholder="Dirección"
                />
                <Button text="Guardar cambios"></Button>
            </form>
        </article>
      </>
    );
  }