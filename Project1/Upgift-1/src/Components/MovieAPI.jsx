import React, { useState, useEffect } from 'react'
import Form from './Form'
import MovieList from './MovieList'

const MovieAPI = () => {


    const [movie, setData] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [selectedType, setSelectedType] = useState('')

    const getDataRequest = async (searchValue, selectedType) => {
        const link = selectedType != 'all' ? `https://www.omdbapi.com/?s=${searchValue}&type=${selectedType}&apikey=ac917768` : `https://www.omdbapi.com/?s=${searchValue}&apikey=ac917768`;

        const response = await fetch(link);
        const Json = await response.json();

        console.log(Json);

        if (Json.Search) {
            setData(Json.Search);
        }
    };

    useEffect(() => {
        getDataRequest(searchValue, selectedType);
    }, [searchValue, selectedType]);

    return (
        <div className="gridContent">
            <Form searchValue={searchValue} setSearchValue={setSearchValue} selectedType={selectedType} setSelectedType={setSelectedType} />
            <MovieList movie={movie} />

        </div>
    )
}

export default MovieAPI
