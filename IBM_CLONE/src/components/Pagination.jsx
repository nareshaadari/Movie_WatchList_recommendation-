import React from 'react';

function Pagination({handleNext,handlePrev,pageNo}) {
  return (

    <div className='bg-gray-400/60   py-1 mt-4 flex justify-center'>
        <div onClick={handlePrev} className='px-8'><i class="fa-solid fa-arrow-left"></i></div>
        <div>{pageNo}</div>
        <div onClick={handleNext} className='px-8'><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination;