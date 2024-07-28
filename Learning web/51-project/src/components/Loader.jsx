import React from 'react'
import { Puff } from "react-loader-spinner";
function Loader() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Puff
     
        visible={true}
        height="180"
        width="180"
        color="rgb(96 165 250)"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      
    </div>
  )
}

export default Loader