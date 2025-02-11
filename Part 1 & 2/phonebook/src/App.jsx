import { useState } from 'react'
import { Numbers } from './Numbers/Numbers'
import { PersonForm } from './PersonForm/PersonForm'
import { PersonFilter } from './PersonFilter/PersonFilter'

const App = () => {
  const [people, setPeople] = useState([
    { id: 1, name: 'Arto Hellas', number: 123456879 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [query, setQuery] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleQueryChange = (event) => {
    // Event handler
    // Log shows evolution of state as input typed out
    console.log(`Change query input: ${event.target.value}`)
    setQuery(event.target.value)
  }

  const nameFound = () => {
    // Attempts to find nweName in people
    const found = people.find(person => person.name.toLowerCase() === newName.toLowerCase())
    return found ? found.name : null
  }

  const handleNameChange = (event) => {
    // Event handler
    // Log shows evolution of state as input typed out
    console.log(`Change to name input: ${event.target.value}`)
    setNewName(event.target.value)
  }

  const numberFound = () => {
    // Attempts to find nweName in people
    const found = people.find(person => person.number === newNumber)
    return found ? found.number : null
  }
  
  const handleNumberChange = (event) => {
    // Event handler
    // Log shows evolution of state as input typed out
    console.log(`Change to phone number input: ${event.target.value}`)
    setNewNumber(event.target.value)
  }

  const validatePerson = () => {
    // Check for valid name and valid number before adding to people
    const nameValid = newName && !nameFound()
    const isNumeric = (string) => string == Number.parseInt(string)
    const numberValid = newNumber && isNumeric(newNumber)
    const numberIsUnique = !numberFound(newNumber)
    return { nameValid, numberValid, numberIsUnique  }
  }

  const capitalise = (string) => string.charAt(0).toUpperCase() + string.slice(1)

  const addPerson = (event) => {

    event.preventDefault()
    console.log(`Button clicked and created event: ${event.target}`)

    // Validating person
    const { nameValid, numberValid, numberIsUnique } = validatePerson()
    if ( !(nameValid && numberValid && numberIsUnique) ) {
      const alertMessage = !nameValid 
        ? (!newName ? 'Name input cannot be empty' : `Name '${newName}' already exists`)
        : (!numberValid ? 'Number must be valid' : `Number ${newNumber} is already in use`)
      alert(alertMessage)
      return
    }

    // Adding new person object
    const latestPerson = {
      name: newName.split(' ').map(capitalise).join(' '),
      number: newNumber,
      id: people.length + 1
    }

    setPeople(people.concat(latestPerson))
    setNewName('')
    setNewNumber('')

  }

  const personFormHandlers = [ addPerson, handleNameChange, handleNumberChange ]
  const personFormValues = [ newName, newNumber ]

  const filteredPeople = () => {
    if (!query) return people
    return people.filter(person => 
      person.name.toLowerCase().includes(query.toLowerCase())
    )
  }

  const showNoContacts = () => {
    return query !== '' && filteredPeople().length === 0
  }

  return (
    <>
      <h2>Phonebook</h2>

      <div>
        <h3>Search by name:</h3>
        <PersonFilter value={query} onChange={handleQueryChange} key={`query`} />
      </div>

      <h3>Add a new contact</h3>
      <PersonForm handlers={personFormHandlers} values={personFormValues} />

      <h2>Numbers</h2>
      {showNoContacts() ? (
        <p>Query '{capitalise(query)}' not found in phonebook</p>
      ) : (
        <Numbers people={filteredPeople()} />
      )}
    </>
  )

}

export default App