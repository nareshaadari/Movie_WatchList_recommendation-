import React, { useEffect, useState } from 'react'
import Moviescard from './Moviescard'
import axios from 'axios';
import Pagination from './Pagination';


function Movies({handletoaddWatchlist,handletoremoveWatchlist,watchList}) {

  const [movies,setmovies]=useState([]);

  const [pageNo,setpage]=useState(1);

  function handleNext(){
    setpage(pageNo+1)
  }

  function handlePrev(){
    if(pageNo==1){
      setpage(pageNo)
    }
    else{
      setpage(pageNo-1);
    }
  }

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b132e2b86d20dd2b999715f31992746a&language=en-US&page=${pageNo}`).then(function(res){
      setmovies(res.data.results);
      console.log(res.data);
     
    },)


  },[pageNo])



  return (
    <>
    <div className='p-4'>
    <div className=' text-2xl text-center font-bold  m-5' >Trending Movies</div>

    <div className='flex flex-row  flex-wrap justify-around gap-10'>
       { movies.map((movieObj)=>{
          return <Moviescard key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} name={movieObj.original_title}  handletoaddWatchlist={handletoaddWatchlist} handletoremoveWatchlist={handletoremoveWatchlist} watchList={watchList}/>
        })
      }
    </div>

     <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}/> 
   

    </div>

    </>
  )
}

export default Movies