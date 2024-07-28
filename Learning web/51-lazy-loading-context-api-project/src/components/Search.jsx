import { useContext, useEffect, useState } from "react";
import { contextData } from "../context/ContextApi";

function Search(items) {
  const [searchItems, setSearchItems] = useState([]);
  const { searchQuery } = useContext(contextData);
  useEffect(() => {
    setSearchItems(items);
  }, []);

  useEffect(() => {
    setSearchItems(
      items.filter((item) => {
        const itemName = item.name.toLowerCase();
        const category = item.category.toLowerCase();
        const query = searchQuery.toLowerCase();
        if (itemName.includes(query) || category.includes(query)) {
          return item;
        }
      })
    );
  }, [searchQuery]);

  return searchItems;
}

export default Search;
