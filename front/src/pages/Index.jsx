import { AddPet } from "../components/AddPet";
import { AddMedicine } from "../components/AddMedicine";
import { Navbar } from "../components/Navbar";


export function Index() {
  return (
    <>
      <Navbar></Navbar>
      <AddMedicine></AddMedicine>
    </>
  );
}