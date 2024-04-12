import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Index } from "./pages/Index";
import { User } from "./pages/User";
import { Session } from "./pages/Session";
import { useState } from "react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/pets" element={<Index/>}/>
        <Route path="/login" element={<Session/>}/>
        <Route path="/profile" element={<User />}/>
      </Routes>
    </>
  );
}

export default App
