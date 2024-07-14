import React from "react";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const [usersList, setUsersList] = useState([]);
  const [formDisplay, setFormDisplay] = useState("none");

  function handleChange(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUsersList([...usersList, user]);
    setUser({
      name: "",
      email: ""
    })
  }

  return (
    <>
      <div className="w-full flex justify-center items-center flex-col relative">
        <h1 className="text-3xl mt-16 mb-8 text-indigo-600">Users</h1>
        <div className="overflow-x-auto w-full flex justify-center f">
          <table className="min-w-[400px] border-collapse bg-indigo-50 shadow-md rounded-lg">
            <thead>
              <tr className="bg-indigo-200 text-left">
                <th className="p-3 border-b-2">Name</th>
                <th className="p-3 border-b-2">Email</th>
              </tr>
            </thead>
            <tbody>
              {usersList.map((user, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="p-3 border-b">{user.name}</td>
                  <td className="p-3 border-b">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          className="p-3 bg-indigo-400 mt-7 rounded-3xl"
          onClick={() => setFormDisplay("flex")}
        >
          Add User
        </button>
      </div>

      <div
        className="form-container absolute top-0 w-full h-screen "
        style={{ display: `${formDisplay}` }}
      >
        <div className="w-full h-screen flex justify-center items-center ">
          <div className="flex justify-center items-center w-[28%] h-[70%] bg-indigo-400 rounded-3xl relative">
            <span className="absolute -top-7 -right-7 text-3xl cursor-pointer" onClick={() => setFormDisplay("none")}>❌</span>
            <div className="w-min">
              <form onSubmit={(e) => handleSubmit(e)} method="post">
                <label className="text-2xl text-white" htmlFor="name">
                  Enter your Name
                </label>
                <input
                  className="mb-7 mt-2 w-[300px] h-[2%] rounded-2xl px-3 py-2 text-2xl outline-none"
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={(e) => handleChange(e)}
                />

                <label className="text-2xl text-white" htmlFor="name">
                  Enter your Email
                </label>
                <input
                  className="mb-7 mt-2 w-[300px] h-[2%] rounded-2xl px-3 py-2 text-2xl outline-none"
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={(e) => handleChange(e)}
                />
                <br />

                <button
                  type="submit"
                  className="outline-none bg-indigo-500 p-3 text-white font-bold rounded-3xl text-1xl"
                  onClick={() => setFormDisplay("none")}
                >
                  add user
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
