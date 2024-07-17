import React, { useState, useEffect } from "react";
import axios from "axios";
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  async function getData() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  }

  useEffect(() => {
    async function fetchData() {
      const usersData = await getData();
      setUsers(usersData);
      setFilteredUsers(usersData);
      
    }
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, users]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 py-10">
        <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-8 mb-10 shadow-md">
          <h1 className="text-center text-4xl font-bold tracking-wide">
            Users
          </h1>
        </header>
        <div className="container mx-auto px-4">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={<UserList users={filteredUsers} />}
            />
            <Route path="/user/:id" element={<UserDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
