import { Register } from "../components/Register" 
import { Login } from "../components/Login"

export function Session() {

  return (
    <>
      <div className="flex text-center p-10 pb-5 justify-center">
        <h1 className="text-4xl">CheckMyPets!</h1> 
      </div>
      <div className="flex justify-center p-2 pb-10">
        <hr/>
      </div>
      <div className="grid grid-rows-2h-screen">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl mb-5">Login</h1>
          <Login></Login>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl mb-5">Register</h1>
          <Register></Register>
        </div>
      </div>
    </>
  );
}