import React, { useContext, useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import OfferSlider from "../components/Slider";
import CategoryLinks from "../components/CategoryLinks";
import { contextData } from "../context/ContextApi";
import Search from "../components/Search";

function Home() {
  const {searchQuery, items} = useContext(contextData)
  const filteredItems = Search(items)
  return (
    <div className="w-full bg-slate-200">
      <CategoryLinks />
      {searchQuery ? "" : <OfferSlider />}
      <ItemList items={filteredItems} />
    </div>
  );
}

export default Home;
