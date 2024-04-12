import { Link } from "react-router-dom";

export function Navbar(){
  return(
    <>
        <ul className="flex flex-cols justify-center items-center gap-5 p-2 mt-5">
            <Link className="bg-stone-700 p-2 rounded-2xl hover:bg-stone-500 font-bold" to="/profile">Mis datos</Link>
            <Link className="bg-stone-700 p-2 rounded-2xl hover:bg-stone-500 font-bold" to="/pets">Mis mascotas</Link>
        </ul>
    </>
  )
}