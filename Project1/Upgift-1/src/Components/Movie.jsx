import React from 'react'

const Movie = ({movie}) => {
  return (
    <div className='datas-konteiner'>

        <div className='item'>

            <h2>{movie.Title} </h2>
            <p>{movie.Type} {movie.Year} </p>
            <img src={movie.Poster} alt="movie" ></img> 
            
        </div>


    </div>
  )
}

export default Movie
