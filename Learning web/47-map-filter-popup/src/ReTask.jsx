import React, { useState } from "react";

function ReTask() {
  const [users, setUsers] = useState(["nikhil", "nikita"]);

  function deleteUser(index) {
    const newUsers = users.filter((user, i) => i !== index);
    setUsers(newUsers);
  }

  function addBoy() {
    const newBoy = 'ram'
    setUsers([...users, newBoy]);

  }

  function addGirl() {
    const newGirl = 'pallvi'
    setUsers([...users, newGirl]);
  }

  return (
    <>
      <div className="flex justify-center items-center mt-16 flex-col mb-10 relative">
        <h1 className="m-2 p-3 text-4xl font-semibold ">Users</h1>
        <div className="flex  ">
          <div className="flex flex-col mx-2 pt-5 px-16 border border-black h-min bg-green-200">
            <div className="mb-3 flex flex-col">
              {users.map((user, index) => (
                <li
                  key={index}
                  className="flex justify-between m-2  p-2 bg-red-500 text-white px-2"
                >
                  <h1 className="text-2xl mr-6 ">
                    {index + 1}. {user}
                  </h1>
                  <button
                    className=" p-1 bg-red-600"
                    onClick={() => deleteUser(index)}
                  >
                    delete
                  </button>
                </li>
              ))}
            </div>
            <div className="flex self-center mb-2 mt-3">
              <button
                onClick={addBoy}
                className="p-2 bg-green-400 font-semibold rounded-1xl mx-2 "
              >
                add boy
              </button>
              <button
                onClick={addGirl}
                className="p-2 bg-green-400 font-semibold rounded-1xl mx-2"
              >
                add girl
              </button>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default ReTask;
