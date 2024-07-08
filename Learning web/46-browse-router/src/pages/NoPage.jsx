import React from "react";
import { Link } from "react-router-dom";

function NoPage() {
  return (
    <div className="flex justify-center items-center w-screen h-screen ">
      <div className=" flex justify-center items-center flex-col">
        <h1 className="text-4xl">404 error , page not found</h1>
        <div>
        <Link to={'/'}>
          <button className="m-4 p-2 bg-red-500 text-white ">
            Go to home page
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default NoPage;
