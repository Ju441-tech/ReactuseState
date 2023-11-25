
import Collapse from './components/collapse'
import './App.css'
import phare from './petr-slovacek-cW-FksiyWuo-unsplash.jpg'
import { useState } from 'react'


function App() {


  //useState sur un objet :
  const [person, setPerson] = useState({
    firstName: "Jhon",
    lastName: "Doe",
    age: 18
  })

  const incrementerPerson = () => {
    setPerson({ ...person, age: person.age + 1 })
  }
  //useState sur un tableau :
  const [fruit, setFruit] = useState(["Banane", "Pomme", "Poire"])
  const incrementerFruit = () => {
    setFruit([...fruit, "Apple"])
    console.log(fruit)
  }
  //useState simple changement de valeur unique d'une variable :
  const [count, setCount] = useState(0)
  const incrementerCounter = () => {
    setCount(count + 1)
  }
  return (
    <div>

      <h1>Age de {person.firstName} : {person.age} Fruit : {fruit} counter : {count}</h1>
      <button onClick={incrementerPerson}>Incrémenter age</button>
      <button onClick={incrementerFruit}>Incrémenter fruit</button>
      <button onClick={incrementerCounter}>Incrémenter counter</button>

    </div >
  );
}

export default App;
