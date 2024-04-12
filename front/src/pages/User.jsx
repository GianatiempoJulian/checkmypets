import { ProfileCard } from "../components/ProfileCard";
import { ProfileEdit } from "../components/ProfileEdit";
import { Navbar } from "../components/Navbar";

export function User() {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-col">
        <ProfileCard></ProfileCard>
        <ProfileEdit></ProfileEdit>
      </div>
     
    </>
  );
}