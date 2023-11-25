

import './App.css'

import { useState } from 'react'

//input contrôlé par REACT, car l'input appelle la fonction handleChange à chaque entrée saisie dans l'input
function App() {
  const [firstName, setFirstName] = useState("Jhon")
  const handleChange = (e) => {
    setFirstName(e.currentTarget.value)
  }

  return (
    <div>
      <form>
        <input type="text" name="firstName" onChange={handleChange} />{firstName}

      </form>

    </div >
  );
}

export default App;
