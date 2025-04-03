import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from "./components/table.jsx";
import axios from "axios";

function App() {
  const [table, setTable] = useState([])
  const [isSubmitted, setisSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(true);


  // Fetch data on page load
  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
        .then(res => {
          setTable(res.data.results);
          setIsLoading(false);
        })
        .catch(err => {
          setIsLoading(false);
        });
  }, []);


  function handleSubmit () {
    setisSubmitted(true)
  }

  function handleReset () {
    setisSubmitted(false)
  }

  return (
    <>
    <h1>SWAPI</h1>
      <h1> The Star Wars API</h1>
      {!isLoading && isSubmitted &&(
      <table className="display" >
        <tbody>
        <tr>
          <th>Name</th>
          <th>Height</th>
          <th>Hair Color</th>
          <th>Eye Color</th>
          <th>Gender</th>
          <th>Skin Color</th>
        </tr>
        </tbody>
        {table.map((person, i) => (
            <Table data={person} key={i} />
        ))}
      </table>)
      }

      <button className="submit" onClick={handleSubmit}>Submit</button>
      <button className="Reset" onClick={handleReset}>Reset</button>
    </>
  )
}

export default App
