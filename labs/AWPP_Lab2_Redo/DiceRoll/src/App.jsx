import { useState } from 'react'

import './App.css'
import {Dice} from "./Components/Dice.jsx";

import {getRandomInt} from "./Util/Helper.jsx";

function App() {


  const [count, setCount] = useState({d1: 0, d2: 0})


    const rollDice = () => {
        const d1 = getRandomInt();
        const d2 = getRandomInt();
        setCount({ d1, d2 });
    };
    const sum = count.d1 + count.d2;

    return (
    <>
   <h1>
          <Dice num={count.d1}></Dice>
          <Dice num={count.d2}></Dice>
   </h1>
      <div>
          <button onClick={() => {rollDice()}}>
              Roll The Dice
          </button>
          <p>The total of the dice is {sum} </p>


      </div>

    </>
  );
}

export default App
