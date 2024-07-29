import React, { useContext, useEffect, useState } from "react";
import CategoryLinks from "../components/CategoryLinks";
import OfferSlider from "../components/Slider";
import ItemList from "../components/ItemList";
import { contextData } from "../context/ContextApi";
import Footer from "../components/Footer";

function Home() {
  const { items} = useContext(contextData)

  return (
    <div className="w-full bg-slate-200">
      <CategoryLinks />
      <OfferSlider />
      <ItemList items={items} />
      <Footer />
    </div>
  );
}

export default Home;
