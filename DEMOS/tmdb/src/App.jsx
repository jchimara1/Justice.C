import { useState } from 'react'
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "../components/home.jsx";
import MovieCard from "../components/MovieCard.jsx";
import Contact from "../components/contact.jsx";
import About from "../components/about.jsx";
import axios, {Axios} from "axios";

const App =() => {

  const [movies, setMovies] = useState("")


  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.VITE_TMDB_API_TOKEN}`
    }
  };


  const handleClick = () => {
    //endpoint
    //xml or json
    // how much data
    // what does data look like

    axios(options)
        .then(res => { console.log(res.data.results)
    let MovieArray = res.data.results.map((movie , i)=> {
      console.log(i)
      return <MovieCard data={movie} key={movie.id} />


    })
          setMovies(MovieArray)
        })

        .catch(err => console.error(err));
  }

    return (
        <>
          <h1>App Comp</h1>
          <Router>
            <div className="App">
              <ul>
                {/*this is where we would normally put an anchor tag*/}
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
              <hr/>
              <Routes>
                <Route
                    path={"/home"}
                    element={<Home/>}/>
                <Route
                    path={"/contact"}
                    element={<Contact/>}></Route>
                <Route
                    path={"/about"}
                    element={<About/>}></Route>
              </Routes>
            </div>
          </Router>
          <button onClick={handleClick}> Now Playing</button>
          {movies}
        </>
    )
  }


export default App
