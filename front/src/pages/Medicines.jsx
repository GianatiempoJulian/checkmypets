import { MedicineList } from "../components/MedicineList";
import { Navbar } from "../components/Navbar";

export function Medicines() {
  return (
    <>
      <Navbar></Navbar>
      <MedicineList></MedicineList>
    </>
  );
}