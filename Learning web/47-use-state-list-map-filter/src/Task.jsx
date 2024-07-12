import React, { useState } from "react";

function Task() {
  const [boys, setBoys] = useState(["nikhil", "pintu"]);
  const [girls, setGirls] = useState(["nikhit", "babita"]);
  const [boyPopup, setBoyPopup] = useState("none");
  const [girlPopup, setGirlPopup] = useState("none");
  const [newBoy, setNewBoy] = useState("");
  const [newGirl, setNewGirl] = useState("");

  function deleteBoy(index) {
    const newBoys = boys.filter((boy, i) => i !== index);
    setBoys(newBoys);
  }

  function deleteGirl(index) {
    const newGirl = girls.filter((boy, i) => i !== index);
    setGirls(newGirl);
  }

  function addBoy() {
    setBoyPopup("none");
    setBoys([...boys, newBoy]);
    setNewBoy("");
    console.log(newBoy);
  }

  function addGirl() {
    setGirlPopup("none");
    setGirls([...girls, newGirl]);
    setNewGirl("");
    console.log(newGirl);
  }

  return (
    <>
      <div className="flex justify-center items-center mt-16 flex-col mb-10 relative">
        <h1 className="m-2 p-3 text-4xl font-semibold ">Users</h1>
        <div className="flex  ">
          <div className="flex flex-col mx-2 pt-5 px-16 border border-black h-min bg-green-200">
            <h1 className="text-3xl mb-2">Boys</h1>
            <div className="mb-3 flex flex-col">
              {boys.map((boy, index) => (
                <li
                  key={index}
                  className="flex justify-between m-2  p-2 bg-red-500 text-white px-2"
                >
                  <h1 className="text-2xl mr-6 ">
                    {index + 1}. {boy}
                  </h1>
                  <button
                    className=" p-1 bg-red-600"
                    onClick={() => deleteBoy(index)}
                  >
                    delete
                  </button>
                </li>
              ))}
            </div>
            <button
              onClick={() => setBoyPopup("flex")}
              className="my-2 p-2 bg-green-400 font-semibold rounded-1xl self-center"
            >
              add boy
            </button>
          </div>

          <div className="flex flex-col mx-2 pt-5 px-16 border border-black h-min bg-green-200">
            <h1 className="text-3xl mb-2">Girls</h1>
            <div className="mb-3 flex flex-col">
              {girls.map((girl, index) => (
                <li
                  key={index}
                  className="flex justify-between m-2  p-2 bg-red-500 text-white px-2"
                >
                  <h1 className="text-2xl mr-6 ">
                    {index + 1}. {girl}
                  </h1>
                  <button
                    className=" p-1 bg-red-600"
                    onClick={() => deleteGirl(index)}
                  >
                    delete
                  </button>
                </li>
              ))}
            </div>
            <button
              onClick={() => setGirlPopup("flex")}
              className="my-2 p-2 bg-green-400 font-semibold rounded-1xl self-center"
            >
              add girl
            </button>
          </div>
        </div>
      </div>

      <div
        className="w-full h-full absolute  top-0 "
        style={{ display: `${boyPopup}` }}
      >
        <div className="popup w-full h-full flex justify-center items-center">
          <div className=" w-96 py-5 flex flex-col justify-center items-center bg-green-500 relative">
            <span
              className="absolute text-3xl -top-9 -right-9 cursor-pointer"
              onClick={() => setBoyPopup("none")}
            >
              ❌
            </span>
            <h1 className="mb-2 text-white">Add new boy</h1>
            <input
              className="outline-green-500"
              type="text"
              value={newBoy}
              onChange={(e) => setNewBoy(e.target.value)}
              autoFocus
            />
            <button
              onClick={addBoy}
              className="text-white text-2xl bg-green-600 mt-5 font-semibold p-1 px-2"
            >
              add
            </button>
          </div>
        </div>
      </div>

      <div
        className="w-full h-full absolute  top-0 "
        style={{ display: `${girlPopup}` }}
      >
        <div className="popup w-full h-full flex justify-center items-center">
          <div className=" w-96 py-5 flex flex-col justify-center items-center bg-green-500 relative">
            <span
              className="absolute text-3xl -top-9 -right-9 cursor-pointer"
              onClick={() => setGirlPopup("none")}
            >
              ❌
            </span>
            <h1 className="mb-2 text-white">Add new girl</h1>
            <input
              className="outline-green-500"
              type="text"
              value={newGirl}
              onChange={(e) => setNewGirl(e.target.value)}
              autoFocus
            />
            <button
              onClick={addGirl}
              className="text-white text-2xl bg-green-600 mt-5 font-semibold p-1 px-2"
            >
              add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Task;
