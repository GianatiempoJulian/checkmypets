import { Button } from "./Button";
import { SectionTitle } from "./SectionTitle";

export function AddMedicine() {
  return (
    <>
      <SectionTitle text={"Agregar Medicina"}></SectionTitle>
      <form className="flex flex-col justify-center items-center">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          className="m-2 w-64"
        />
        <label htmlFor="brand" className="w-1/2 mr-16">Empresa</label>
        <select name="brand" className="m-2 text-black font-bold w-64">
          <option value="moroco" className="text-black">
            Moroco
          </option>
          <option value="diversion" className="text-black">
            Diversion
          </option>
        </select>
        <input
          type="text"
          name="description"
          placeholder="Descripcion"
          className="m-2 w-64"
        />
        <Button text="Agregar Medicina"></Button>
      </form>
    </>
  );
}
