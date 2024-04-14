import { Button } from "../components/Button";

export function ProfileEdit() {
    return (
      <>
        <article className="bg-stone-800 m-5 h-full text-center">
            <h1 className="text-3xl m-2">Editar datos</h1>
            <form className="flex flex-col">
                <input 
                type="text" 
                name="username" 
                className="m-2 placeholder:text-gray-500"
                placeholder="Número"
                />
                <input
                type="password" 
                name="password" 
                className="m-2 placeholder:text-gray-500"
                placeholder="Correo"
                />
                <input 
                type="text" 
                name="username" 
                className="m-2 placeholder:text-gray-500"
                placeholder="Dirección"
                />
                <Button text="Guardar cambios"></Button>
            </form>
        </article>
      </>
    );
  }