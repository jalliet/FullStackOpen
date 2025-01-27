import { useState } from 'react'
import { Numbers } from './Numbers/Numbers'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1 }
  ]) 
  const [newName, setNewName] = useState('')

  const personFound = () => {
    const found = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
    return found ? found.name : null
  }

  const validateNewName = () => {
    // Checks if newName exists (not '') and is unique
    return newName && !personFound()
  }

  const addName = (event) => {
    event.preventDefault()
    console.log(`Button clicked and created event: ${event.target}`)
    if ( validateNewName() ) {
      let latestName = {
        'name': newName,
        'id': persons.length + 1
      }
      setPersons(persons.concat(latestName))
      setNewName('')
    } else if (!newName) {
      alert(`Name input cannot be empty`)
    } else {
      alert(`Name ${newName} is already in persons (#${persons.indexOf(personFound()) + 1})`)
    }
  }

  const handleNameChange = (event) => {
    console.log(`Change to name input: ${event.target.value}`)
    setNewName(event.target.value)
  }

  return (
    <div>

      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <Numbers persons={persons}/>

    </div>
  )
}

export default App