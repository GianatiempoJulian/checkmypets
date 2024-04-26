import { Button } from "./Button";
import {SectionTitle} from "./SectionTitle"

export function AddPet() {
  return (
    <>
      <SectionTitle text={"Agregar Mascota"}></SectionTitle>
      <form className="flex flex-col justify-center items-center">
        <input type="text" name="name" placeholder="Nombre" className="m-2 w-64"/>
        <label htmlFor="gender" className="w-1/2 mr-16">Genero</label>
        <select name="gender" className="m-2 text-black font-bold w-64">
          <option value="macho" className="text-black">
            Macho
          </option>
          <option value="hembra" className="text-black">
            Hembra
          </option>
        </select>
        <input
          type="text"
          name="weight"
          placeholder="Peso"
          className="m-2 w-64"
        />
        <input
          type="text"
          name="race"
          placeholder="Raza"
          className="m-2 w-64"
        />
        <input type="file" className="m-2 w-64"/>
        <input
          type="email"
          name="email"
          placeholder="Email del responsable"
          className="m-2 w-64"
        />
        <Button text="Agregar Mascota"></Button>
      </form>
    </>
  );
}
