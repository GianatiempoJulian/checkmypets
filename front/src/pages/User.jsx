import { ProfileCard } from "../components/ProfileCard";
import { Navbar } from "../components/Navbar";

const user = {
  id: 1,
  name: "Julian",
  lastname: "Gianatiempo",
  email: "giana@gmail.com",
  password: "123456",
  address: "Urquia",
  phoneNumber: "2234449923",
  isAdmin: true
}


export function User() {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-col">
        <ProfileCard user={user}></ProfileCard>
      </div>
     
    </>
  );
}