import { useContext, useEffect, useRef, useState } from "react";
import { contextData } from "../context/ContextApi";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchItems, setSearchItems] = useState([]);
  const { items } = useContext(contextData);
  const searchRef = useRef(null);

  useEffect(() => {
    setSearchItems(
      items.filter((item) => {
        const itemName = item.name.toLowerCase();
        const category = item.category.toLowerCase();
        const query = searchQuery.toLowerCase();
        return itemName.includes(query) || category.includes(query);
      })
    );
  }, [searchQuery, items]);

  const handleSuggestionClick = () => {
    setSearchQuery("");
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchQuery("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto h-10" ref={searchRef}>
      <div className="flex justify-center items-center overflow-hidden pl-2 rounded-lg bg-white">
        <FaSearch className="text-lg text-gray-500 select-none" />
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Search for products, brands and more"
          aria-label="Search"
          className="w-full px-4 py-2 outline-none transition duration-300"
        />
      </div>
      {searchQuery && (
        <div className="max-h-96 bg-white -mt-3 pt-3 rounded-lg overflow-y-auto shadow-lg">
          {searchItems.length > 0 ? (
            searchItems.map((item, index) => (
              <Link
                to={`item/${item.id}`}
                key={index}
                onClick={handleSuggestionClick}
              >
                <div className="flex p-2 items-center cursor-pointer hover:bg-slate-100">
                  <FaSearch className="text-gray-500 select-none" />
                  <h1 className="px-4">{item.name}</h1>
                </div>
              </Link>
            ))
          ) : (
            <div className="flex p-2 items-center cursor-pointer">
              <h1 className="px-4 text-gray-500">No results found</h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
