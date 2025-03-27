
import './App.css'
import Greeting from "./components/Greeting.jsx";
import CardContainer from "./components/CardContainer.jsx";
import {UserCards} from "./UserCards.jsx";
import UserCard from "./components/UserCard.jsx";

function App() {
  // const [count, setCount] = useState(0)

    const UerCards = {UserCards}
    const sortedUsers = UserCards.sort((a, b) => b.age - a.age);




  return (
    <>
      <div>

     <Greeting name={"Justice"}/>
          <CardContainer>
              {sortedUsers.map((user, index) => (
              <UserCard key={index} name={user.name} age={user.age} />))}
          </CardContainer>
      </div>

    </>
  )
}

export default App
