import React from 'react'
import Cards from './components/Cards'

function App() {
  let users = [
    {
      name: 'Nikhil',
      age: 21,
      img:"https://img.freepik.com/free-photo/3d-render-little-boy-with-eyeglasses-blue-shirt_1142-50994.jpg?size=626&ext=jpg&ga=GA1.1.198045090.1710485532&semt=sph",
      bgImg:"https://images.unsplash.com/photo-1720206811364-684e8f8e803f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
    },
    {
      name:'ram',
      age:17,
      img:"https://img.freepik.com/free-photo/3d-illustration-teenager-with-funny-face-glasses_1142-50955.jpg?size=626&ext=jpg&ga=GA1.1.198045090.1710485532&semt=sph",
      bgImg: "https://images.unsplash.com/photo-1720211370947-68088964ae6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
    },
    {
      name: 'pintu',
      age: 11,
      img:"https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?size=626&ext=jpg&ga=GA1.1.198045090.1710485532&semt=sph",
      bgImg: "https://images.unsplash.com/photo-1719844841024-3c7166816fc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: 'aadi',
      age: 21,
      img:"https://img.freepik.com/free-photo/view-3d-man-holding-laptop_23-2150709818.jpg?size=626&ext=jpg&ga=GA1.1.198045090.1710485532&semt=sph",
      bgImg: "https://images.unsplash.com/photo-1720068910279-6899141564bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D"
    },
  ]

  return (
    <div className='w-full flex flex-wrap'>
      <Cards users={users} />
      
    </div>
  )
}

export default App