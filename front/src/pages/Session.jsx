import { Register } from "../components/Register" 
import { Login } from "../components/Login"

export function Session() {

  return (
    <>
      <div className="grid grid-rows-2 h-screen">
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