import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import MovieAPI from './Components/MovieAPI'
import Footer from './Components/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <MovieAPI />
      <Footer />
    </div>
  )
}

export default App
