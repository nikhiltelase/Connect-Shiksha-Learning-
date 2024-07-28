import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ItemList from "../components/ItemList";
import OfferSlider from "../components/Slider";
import CategoryLinks from "../components/CategoryLinks";

function Home() {
  return (
    <div className="w-full bg-slate-200">
      <Navbar />
      <CategoryLinks />
      <OfferSlider />
      <ItemList />
    </div>
  );
}

export default Home;
