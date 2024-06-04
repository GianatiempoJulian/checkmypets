import { useState } from "react";

function updateUser(userEdited) {
  const info = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(userEdited),
  };
  fetch(`http://localhost:5000/api/user/${userEdited.id}`, info)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Error:", error));
}


export function ProfileEdit({ user }) {

  const handleSubmit = (e) => {
    updateUser(userTemp);
  };

  const [userTemp, setUserTemp] = useState(user);
  const [userChanged, setUserChanged] = useState(false);

  return (
    <>
      <article className="bg-stone-800 m-5 h-full text-center">
        <h1 className="text-3xl m-2">Editar datos</h1>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
          <input
            type="text"
            name="number"
            className="m-2 text-gray-400 placeholder:text-gray-500"
            placeholder="Número de télefono"
            value={userTemp.phoneNumber}
            onChange={(e) => {
              setUserChanged(true)
              setUserTemp({ ...userTemp, phoneNumber: e.target.value })
            }}
          />
          <input
            type="email"
            name="email"
            className="m-2 text-gray-400 placeholder:text-gray-500"
            placeholder="Correo"
            value={userTemp.email}
            onChange={(e) => {
              setUserChanged(true)
              setUserTemp({ ...userTemp, email: e.target.value })
            }}
          />
          <input
            type="text"
            name="address"
            className="m-2 text-gray-400 placeholder:text-gray-500"
            placeholder="Dirección"
            value={userTemp.address}
            onChange={(e) => {
              setUserChanged(true)
              setUserTemp({ ...userTemp, address: e.target.value })
            }}
          />
          { userChanged ? 
          <>
            <button className="p-2 m-2 bg-yellow-700 rounded-md hover:bg-yellow-800 font-bold" onClick={() => updateUser(userTemp)}>Guardar Cambios</button>
            <button className="p-2 m-2 bg-stone-700 rounded-md hover:bg-stone-500 font-bold" onClick={(e) => {
              setUserTemp(user)
              setUserChanged(false)
              }}>Descartar cambios</button>
          </> : null}
        </form>
      </article>
    </>
  );
}
