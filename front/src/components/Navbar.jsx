import { Link } from "react-router-dom";

export function Navbar(){
  return(
    <>
      <ul className="flex flex-cols justify-center items-center gap-5 p-2 mt-5">
        <Link className="bg-stone-700 p-2 rounded-2xl hover:bg-stone-500 font-bold flex gap-2" to="/profile"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-user-round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>Perfil</Link>
        <Link className="bg-stone-700 p-2 rounded-2xl hover:bg-stone-500 font-bold flex gap-2" to="/pets"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-paw-print"><circle cx="11" cy="4" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="20" cy="16" r="2"/><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"/></svg>Mascotas</Link>
      </ul>
    </>
  )
}