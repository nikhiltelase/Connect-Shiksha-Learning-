import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { contextData } from '../context/ContextApi';
import ItemList from '../components/ItemList';

function Category() {
    const {category} = useParams();
    const {items} = useContext(contextData)
    const filteredData = items.filter((item) => {
        return item.category === category
    })
    
  return (
    <div>
        <h1 className='mt-20 p-6 text-2xl font-semibold'>{category}</h1>
        <ItemList items={filteredData} />
    </div>
  )
}

export default Category