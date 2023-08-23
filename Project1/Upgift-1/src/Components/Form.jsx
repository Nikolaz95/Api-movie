import React from 'react'

const Form = (props) => {


  const onChange = (e) => {
    props.setSelectedType(e.target.value)
  }

  return (
    <div className='form'>
      <input type="text"
        placeholder='Search OMDB'
        value={props.searchvalue}
        onChange={(event) => props.setSearchValue(event.target.value)} />

      <select onChange={onChange}>
        <option value="all">All</option>
        <option value="movie">Movies</option>
        <option value="series">Series</option>
        <option value="game">Games</option>
      </select>


    </div>
  )
}

export default Form
