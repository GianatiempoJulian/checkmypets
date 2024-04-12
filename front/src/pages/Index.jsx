import { PetList } from "../components/PetList";
import { Navbar } from "../components/Navbar";

export function Index() {
  return (
    <>
      <Navbar></Navbar>
      <PetList></PetList>
    </>
  );
}