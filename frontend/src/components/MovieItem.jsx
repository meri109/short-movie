import React from 'react'
import MovieBanner from '../assets/images/movie-photo.jpg'


function MovieItem() {
  return (
    <div className='movie-item'>

        <div className="image-wrapper">
          <img src={MovieBanner} alt="movie" />
        </div>

        <div className="info">
            <div className="title">Maze runner</div> 
            <div className="imdb">9.0</div>
            <div className="controls">
              <div className="edit">Edit</div>
              <div className="delete">Delete</div>
            </div>
        </div>

    </div>
  )
}

export default MovieItem