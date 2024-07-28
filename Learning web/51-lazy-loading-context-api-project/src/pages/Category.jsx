import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { contextData } from '../context/ContextApi';
import ItemList from '../components/ItemList';
import Search from '../components/Search';

function Category() {
    const {category} = useParams();
    const {items} = useContext(contextData)
    const filteredData = items.filter((item) => {
        return item.category === category
    })
    const searchItems = Search(filteredData)
  return (
    <div>
        <h1 className='mt-20 p-6 text-2xl font-semibold'>{category}</h1>
        <ItemList items={searchItems} />
    </div>
  )
}

export default Category