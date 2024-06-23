import React from 'react'
import Cards from '../componts/Card'
import './home.css'

function Home() {
  function addCard() {
    console.log('clicked')
  }


  return (
    <>
      <h1>Home Page</h1>
      <div className="card-container">
        <Cards name='ram' text='1' />
        <Cards name='shym' text='2' />
        <Cards name='ramnaresh' text='3' />
        <Cards name='kanha' text='4' />
        <Cards name='krishna' text='5' />
        <Cards name='bharat' text='6' />
        <Cards name='ramchnadra' text='7' />

      </div>

      <div className='button'>
        <button onClick={addCard}>Add Card</button>
      </div>
    </>
  )
}

export default Home