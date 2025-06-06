import React from 'react'

function Moviescard({ poster_path, name, handletoaddWatchlist, movieObj, handletoremoveWatchlist, watchList }) {

  function doescontain(movieObj) {

    for (let i = 0; i < watchList.length ; i++) {

      if (watchList[i].id == movieObj.id) {
        return true;
      }

    }
    return false;

  }


  return (
    <div className='h-[40vh] w-[150px] bg-cover bg-center flex  flex-col justify-between  items-end  rounded-xl hover:scale-110 duration-300  hover:cursor-pointer' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}>

      {doescontain(movieObj) ?
        <div onClick={() => (handletoremoveWatchlist(movieObj))} className=' m-2 flex justify-center items-center h-8 w-8 rounded-lg bg-gray-900/70'>&#10060;</div> :
        <div onClick={() => (handletoaddWatchlist(movieObj))} className=' m-2 flex justify-center items-center h-8 w-8 rounded-lg bg-gray-900/70'>&#128525;</div>
      }

      <div className='text-white w-full text-xl pb-2 text-center bg-black/50'>{name}</div>

    </div>
  )
}

export default Moviescard