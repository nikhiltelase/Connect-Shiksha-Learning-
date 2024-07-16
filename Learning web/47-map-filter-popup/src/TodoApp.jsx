import React from "react";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

function TodoApp() {
  const [todoList, setTodoList] = useState([]);
  const [addDisplay, setAddDisplay] = useState("none");
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    setAddDisplay("none");
    setTodoList([...todoList, todo]);
    setTodo("");
  };

  const deleteTodo = (index) => {
    setTodoList(todoList.filter((todo, i) => i !== index));
  };

  const showAddForm = () => {
    setAddDisplay("flex");
  };

  const cancelForm = () => {
    setAddDisplay("none");
  };

  return (
    <>
      <div className="w-full h-screen p-10 flex  items-center flex-col relative ">
        <h1 className="text-4xl font-semibold font-mono">To List</h1>
        <div className="mt-5">
          <ul className="flex justify-center items-center flex-col">
            {todoList.map((todo, index) => (
              <div
                key={index}
                className="bg-black text-white w-96 m-3 p-3 flex justify-between"
              >
                <li>
                  {index + 1}. {todo}
                </li>
                <button className="text-2xl" onClick={() => deleteTodo(index)}>
                  <FaCheckCircle />
                </button>
              </div>
            ))}
          </ul>
        </div>
        <button
          className=" bg-black text-white p-2  mt-4"
          onClick={showAddForm}
        >
          Add
        </button>
      </div>

      <div
        style={{ display: `${addDisplay}` }}
        className="bg-black absolute top-0 w-full h-full opacity-75 flex justify-center items-center "
      >
        <div className="flex justify-center items-center flex-col p-16 bg-white z-10 relative">
          <span
            className="absolute -top-10 -right-9 text-4xl  text-white cursor-pointer"
            onClick={cancelForm}
          >
            <RxCross1 />
          </span>
          <textarea
            className="border-2 border-black p-2 outline-none text-black font-semibold"
            type="text"
            placeholder="your todo"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button className="bg-black p-2 mt-5 text-white" onClick={addTodo}>
            Add
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoApp;
