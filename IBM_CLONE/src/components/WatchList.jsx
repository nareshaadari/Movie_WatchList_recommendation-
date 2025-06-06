import React, { useEffect, useState } from 'react'

import genreid from '../Utility/genre';


function WatchList({watchList,setwatchlist,handletoremoveWatchlist}) {
  const [search,setSearch]=useState('');

  const [genree,setgenreList]=useState(['All Genres'])

  const [curgenre,setcurgenre]=useState('All Genres')

  function handlesearch(e){

    setSearch(e.target.value)

  }

  let handlegenre=((genre)=>{
    setcurgenre(genre);
  })

  function orderincrease(){
    let sortedincrease=watchList.sort((movieA,movieB)=>{
      return movieA.vote_average - movieB.vote_average;
    })

    setwatchlist([...sortedincrease]);

  }

  function orderdecrease(){
    let sortedDecrease=watchList.sort((movieA,movieB)=>{
      return movieB.vote_average-movieA.vote_average;
    })

    setwatchlist([...sortedDecrease]);


  }

  useEffect(()=>{
    let temp=watchList.map((movieObj)=>{
      return genreid[movieObj.genre_ids[0]]
    })

    temp=new Set(temp);

    setgenreList(['All Genres',...temp])

    console.log(temp)

  },[watchList])
    


  return (
    <>

      <div className='flex justify-center m-4'>
        
        {genree.map((genrename)=>{
          return  <div onClick={()=>handlegenre(genrename)} className={curgenre==genrename?' rounded-xl  text-white font-bold flex justify-center items-center border border-2  h-[2.5rem] w-[8rem] bg-blue-400     mx-4':'rounded-xl  text-white font-bold flex justify-center items-center border border-2  h-[2.5rem] w-[8rem] bg-gray-400/50  mx-4'}>
            {genrename}</div>
        })}


        

      </div>

      <div className='flex justify-center my-4'>
        <input onChange={handlesearch} value={search} type="text" placeholder="search movies" className='px-4 font-bold rounded-lg h-[3rem] w-[15rem] outline-none  bg-gray-200' />
      </div>

      <div className='overflow-hidden rounded-lg border border-gray-400 m-8'>

        <table className='w-full text-gray-500 text-center'>

          <thead className='border-b-2 border-gray-400'>

            <tr>
              <th>Name</th>
              <th className='flex justify-center'>
               
                  <div onClick={orderincrease} className='p-2'><i class="fa-solid fa-arrow-up"></i></div>
                  <div className='p-2'>Rating</div>
                  <div onClick={orderdecrease} className='p-2'><i class="fa-solid fa-arrow-down"></i></div>
                
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>

          </thead>

          <tbody>

            {watchList.filter((movieObj)=>{

              if(curgenre=='All Genres'){
                return true
              }
              return genreid[movieObj.genre_ids[0]]==curgenre;

            }).filter((movieObj)=>{

              return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase());



            }).map((movieObj)=>{

              return <>
              <tr className='border-b-2'>
                <td className='flex items-center py-4  px-6'>
                  <img src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} className='h-[5rem] w-[6rem] ' />
                  <div className='mx-10'>{movieObj.title}</div>
                </td>

                <td>{movieObj.vote_average}</td>

                <td>{movieObj.popularity}</td>
                <td>{genreid[movieObj.genre_ids[0]]}</td>

                <td className="text-center">
                  <button
                    onClick={() => handletoremoveWatchlist(movieObj)}
                    className="bg-red-100 text-red-600 border border-red-400 px-3 py-1 rounded-lg 
                              hover:bg-red-200 hover:text-black
                              active:scale-55 active:shadow-inner 
                              transition-transform duration-100 ease-in-out 
                              cursor-pointer shadow-sm"
                  >
                    Delete
                  </button>
                </td>


            </tr>
            </>
            

            })}



            

          </tbody>



        </table>

      </div>

    </>
  )
}

export default WatchList