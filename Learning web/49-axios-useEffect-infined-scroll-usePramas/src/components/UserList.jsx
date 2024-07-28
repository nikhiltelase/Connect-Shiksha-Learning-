import React from 'react';
import { Link } from 'react-router-dom';

const UserList = ({ users }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {users.map(user => (
        <Link 
          to={`/user/${user.id}`} 
          key={user.id} 
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 ease-in-out group"
        >
          <div className="flex items-center mb-4">
            <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-2xl font-bold text-white mr-4 group-hover:animate-bounce">
              {user.name[0]}
            </div>
            <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-500">{user.name}</h2>
          </div>
          <p className="text-gray-600 mb-2"><span className="font-semibold">Email:</span> {user.email}</p>
          <p className="text-gray-600 mb-2"><span className="font-semibold">Phone:</span> {user.phone}</p>
          <p className="text-gray-600 mb-2"><span className="font-semibold">Company:</span> {user.company.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default UserList;
