import React from 'react'
import { useParams } from 'react-router-dom'
import MovieBanner from '../assets/images/movie-photo.jpg'

function MovieDetail() {
    const { id } = useParams()


  return (
    <div className="movie-detail-container">
        <div className="image-movie">
            <img src={MovieBanner}  alt="movie" />
        </div>
        <div className="info">
            <input type="text" placeholder='Title'></input>
            <input type="number" placeholder='IMDB'></input>
            <div className="controls">
                <button className="save">Save</button>
                <button className="delete">Delete</button>
                <button className="back">Back</button>
            </div>
        </div>
    </div>
  )
}

export default MovieDetail