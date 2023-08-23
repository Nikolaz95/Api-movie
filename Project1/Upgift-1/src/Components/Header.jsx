import React from 'react'





const Header = () => {
  return (
    
    <div className='header'>

      <img src='./src/bilder/film.jpg' alt='it should be picture' title='OMDB API' width="" height=""></img>
      <h2>Welcome to OMDB API</h2>

      <nav className='navbar'>

        <ul>
            <li className="nav"> <a href="#">Home </a></li>
            <li className="nav"> <a href="#">About Us</a></li>
            <li className="nav"> <a href="#">Contat Us </a> </li>
        </ul>
    </nav>


      <hr />

    </div>
  )
}

export default Header
