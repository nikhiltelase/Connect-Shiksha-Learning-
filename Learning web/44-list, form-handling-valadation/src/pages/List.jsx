import React from 'react'
import { useState } from 'react'
import '../css/list.css'

function UsreList() {
  const [userList, setList] = useState(['ram', 'shyam', 'krishna', 'ramchandra'])
  const [userObject, setuserObject] = useState([
    {
      id: 1,
      name: 'nikhil'
    },
    {
      id: 2,
      name: 'pintu'
    },
    {
      id: 3,
      name: 'ankit'
    },
    {
      id: 4,
      name: 'karan'
    }
  ])

  return (
    <div>
      <div>
        <h1>List Randraning</h1>
        <ul>
          {
            userList.map((name, index) => (
              <li key={index}>
                {index + 1}. {name}
              </li>
            ))
          }
        </ul>
      </div>

      <div>
        <h1>Object List Randraning</h1>
        <ul>
          {
            userObject.map((user,) => (
              <li key={user.id}>
                {user.id}. {user.name}
              </li>
            ))
          }
        </ul>
      </div>

    </div>
  )
}

export default UsreList