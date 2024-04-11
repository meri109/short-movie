import React from 'react'
import MovieItem from '../components/MovieItem'
import AddMovieModal from './AddMovieModal'

function MovieList() {
  return (
    <>
        <div className='movie-list-container'>
            <div className="movie-list">
              <MovieItem />
              <MovieItem />
              <MovieItem />
              <MovieItem />
              <MovieItem />
            </div>
            <div className="button-wrapper">
              <div className="create-movie-button">Create Movie</div>
            </div>
        </div>
        <AddMovieModal/>
    </>
  )
}

export default MovieList