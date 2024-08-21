import React, { useState } from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import { useEffect } from 'react'
import Axios from '../../Axios.jsx'
import { imageUrl ,API_KEY} from '../../constants/Constants.jsx'


function RowPost(props) {

  const [movies, setMovies] = useState([])

  const [urlId, setUrlId] = useState('')

  useEffect(() => {
    Axios.get(props.url).then(response => {
      console.log(response.data.results);
      setMovies(response.data.results)
    }).catch(err => {
      alert(err)
    })
  }, [])

  const opts = {
    height: '390',
      width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const handleMovieClick = (id) =>{
    console.log(id);
    Axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0]) 
      }else{
        alert('Trailer not available!')
      }
    })
  }


  return (
    <div className='row'>
      <h2 style={{marginTop:'25px'}} >{props.title}</h2>
      <div className="posters">
        {movies.map((obj,index) =>
          <div key={index} onClick={()=>handleMovieClick(obj.id)} className='img-div' >
            <img style={{borderRadius:'5px'}} className={props.isSmall ? 'smallPoster' : 'poster'} alt="Posters" src={`${imageUrl + obj.backdrop_path}`} />
            <h4> {obj.title || obj.name} </h4>
          </div>)}
      </div>
      { urlId && <div className='youtube'><YouTube className='youtube-display'  videoId={urlId.key} opts={opts}/> </div> }
    </div>
  )
}

export default RowPost