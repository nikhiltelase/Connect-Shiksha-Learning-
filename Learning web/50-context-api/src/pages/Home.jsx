import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ItemList from "../components/ItemList";


function Home() {
  return (
    <div className="w-full h-screen bg-slate-200">
      <Navbar />
      <div className="flex justify-around ">
        <ItemList />

      </div>
    </div>
  );
}

export default Home;
