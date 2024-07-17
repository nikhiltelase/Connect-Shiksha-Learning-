import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const UserDetail = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchUser() {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUser(response.data);
    }
    fetchUser();
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">{user.name}</h2>
      <p className="text-gray-600 mb-2"><span className="font-semibold">Email:</span> {user.email}</p>
      <p className="text-gray-600 mb-2"><span className="font-semibold">Phone:</span> {user.phone}</p>
      <p className="text-gray-600 mb-2"><span className="font-semibold">Company:</span> {user.company.name}</p>
      <p className="text-gray-600 mb-2"><span className="font-semibold">Website:</span> <a href={`http://${user.website}`} className="text-blue-500 hover:underline">{user.website}</a></p>
      <p className="text-gray-600 mb-2"><span className="font-semibold">Address:</span> {`${user.address.suite}, ${user.address.street}, ${user.address.city}`}</p>
      <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">Back to Users List</Link>
    </div>
  );
}

export default UserDetail;
