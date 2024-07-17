import React from 'react';

function Loader() {
  return (
    <div className='flex justify-center mt-10'>
      <div className='text-center w-40 bg-blue-500 p-3 rounded-3xl'>
        <div className='flex items-center gap-3 justify-center'>
          <span className='w-5 h-5 border-4 border-t-transparent border-white-800 rounded-full animate-spin'></span>
          <h1 className='text-white'>Loading...</h1>
        </div>
      </div>
    </div>
  );
}

export default Loader;
