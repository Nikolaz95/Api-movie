import React from 'react'
import Movie from './Movie'

const MovieList = (props) => {
  return (

    <>

      {props.movie.Response != 'False' ? props.movie.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      )) : <p>No result found</p>}


    </>
  );
};

export default MovieList
