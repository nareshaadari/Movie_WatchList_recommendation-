
import { useEffect, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Movies from './components/Movies'
import Navbar from './components/Navbar'
import WatchList from './components/WatchList'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  const [watchList,setwatchlist]=useState([]);

  function handletoaddWatchlist(movieObj){
    let newwatchlist=[...watchList,movieObj]
    localStorage.setItem('MovieApp',JSON.stringify(newwatchlist))
    setwatchlist(newwatchlist);
    console.log(newwatchlist)
  }

  let handletoremoveWatchlist=(movieObj)=>{
      let filteredwatchlist=watchList.filter((movie)=>{
        return movie.id!=movieObj.id;
      })
       localStorage.setItem('MovieApp',JSON.stringify(filteredwatchlist))
      setwatchlist(filteredwatchlist)
      
      console.log(filteredwatchlist)
      
  }

  useEffect(()=>{
    let movieinlocalstorage=localStorage.getItem('MovieApp')
    if(!movieinlocalstorage){
      return
    }
    setwatchlist(JSON.parse(movieinlocalstorage))
  },[])


  return (
    <>
     
        <BrowserRouter>
       
          <Navbar />

          <Routes>
            <Route path="/" element={<> <Banner /><Movies handletoaddWatchlist={handletoaddWatchlist} handletoremoveWatchlist={handletoremoveWatchlist} watchList={watchList}/> </>} />
            <Route path="/watchlist" element={<WatchList  watchList={watchList} setwatchlist={setwatchlist} handletoremoveWatchlist={handletoremoveWatchlist}/>} />

          </Routes>


        
        </BrowserRouter>
      
    </>
  )
}

export default App
