import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1 }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log(`Button clicked and created event: ${event.target}`)
    if ( newName ) {
      let latestName = {
        'name': newName,
        'id': persons.length + 1
      }
      setPersons(persons.concat(latestName))
      setNewName('')
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

const Numbers = ({ persons }) => {
  return (
    <>
      {persons.map((person) => (
        <Person key={person.id} person={person}/>
      ))}
    </>
  )
}

const Person = ({ person }) => {
  return (
    <p>
      Person {person.id}: {person.name}
    </p>
  )
}

export default App