
import { useState } from 'react'
import axios from 'axios'
const App = () =>{
  
  const  [movieState, setMovieState] = useState({
  title: '',
  movie: {}
  })

  const handleInputChange = event =>{
  //  event.preventDefault()
  setMovieState ({...movieState, [event.target.name]: event.target.value})
   
   
  }

  const handleSearchMovie =event =>{
    event.preventDefault()
    axios.get(`http://www.omdbapi.com/?apikey=trilogy&t=${movieState.title}`)
    .then(({ data: movie })=> {
    // console.log(movie)
    setMovieState ({...movieState, movie, title: '' })

    // const movies = [movieState.movies]

    })
    .catch(err => console.err(err))
     console.log('hiiii')

  }
  return (
    <>
    {/* <div className="App"> */}
      <form>
      <h1>App Page</h1>
      <p>
      <label htmlFor="title">Title:</label>
      <input 
      type="text" 
      name="title" 
      value={movieState.title}
      onchange={handleInputChange}
      />
      </p>
      
      <button onClick={handleSearchMovie}>Search Movie</button>
      </form>
    {/* </div> */}
    <div>
     <h1>Title: {movieState.movie.title}</h1>
     <h2>Plot: {movieState.movie.Plot}</h2>

    </div>
    </>
  );
}

export default App;
