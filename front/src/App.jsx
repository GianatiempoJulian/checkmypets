import { Route, Routes } from "react-router-dom";
import { Pets } from "./pages/Pets";
import { User } from "./pages/User";
import { Index } from "./pages/Index";
import { Session } from "./pages/Session";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/pets" element={<Pets/>}/>
        <Route path="/login" element={<Session/>}/>
        <Route path="/profile" element={<User />}/>
      </Routes>
    </>
  );
}

export default App
