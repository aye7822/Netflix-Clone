import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../constants/Constants.jsx'
import './Banner.css'
import Axios from '../../Axios.jsx'

function Banner() {

  const [movie, setMovie] = useState()

  useEffect(() => {
    Axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      const randomNumber = Math.floor(Math.random() * 20);
      console.log(response.data.results[randomNumber]);
      setMovie(response.data.results[randomNumber])
    })
  }, [])

  return (
    <div style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path:""})`}} className='banner'>
      <div className='content'>
        <h1 className='title'> {movie ? movie.title || movie.name : ""} </h1>
        <div className='banner-buttons'>
            <button className='button' >Play</button>
            <button className='button'> My List</button>
        </div>
        <h1 className='description'> {movie ? movie.overview : ""} </h1>
      </div>
      <div className="fade-bottom"></div>
    </div>
  )
}

export default Banner