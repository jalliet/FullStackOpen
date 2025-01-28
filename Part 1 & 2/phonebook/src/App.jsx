import { useState } from 'react'
import { Numbers } from './Numbers/Numbers'
import { InputField } from './InputField/InputField'

const App = () => {
  const [people, setPeople] = useState([
    { id: 1, name: 'Arto Hellas', number: 123456879 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const nameFound = () => {
    // Attempts to find nweName in people
    const found = people.find(person => person.name.toLowerCase() === newName.toLowerCase())
    return found ? found.name : null
  }

  const validateNewName = () => {
    // Checks if newName exists (aka not '') and is unique
    return newName && !nameFound()
  }

  const handleNameChange = (event) => {
    // Event handler
    // Log shows evolution of state as input typed out
    console.log(`Change to name input: ${event.target.value}`)
    setNewName(event.target.value)
  }

  /*
  const addName = (event) => {

    // Validates the name input and acts accordingly:
    // Adds to people if name exists and is unique
    // Displays appropriate alert message otherwise
    event.preventDefault()
    console.log(`Button clicked and created event: ${event.target}`)
    if ( validateNewName() ) {
      let latestPerson = {
        'name': newName,
        'id': people.length + 1
      }
      setPeople(people.concat(latestPerson))
    } else {
      const alertMessage = !newName 
      ? "Name input cannot be empty"
      : `Name ${newName} is already in people (#${people.indexOf(nameFound()) + 1})`;
      alert(alertMessage);
    }
    setNewName('')

  }

  const addNumber = (event) => {

    event.preventDefault()
    console.log(`Button clicked and created event: ${event.target}`)
    const isNumeric = (string) => string == Number.parseInt(string)

    const alertMessage = !isNumeric(newNumber) 
    ? "Input must be numeric, and be a valid phone number"
    : ``;
    if ( alertMessage ) {
      alert(alertMessage);
    } else {
      let latestNumber = {
        'number': newNumber,
        'id': people.length + 1
      }
      setPeople(people.concat(latestNumber))
    }
    setNewNumber('')

  }
  */

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
      name: newName,
      number: newNumber,
      id: people.length + 1
    }

    setPeople(people.concat(latestPerson))
    setNewName('')
    setNewNumber('')

  }

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <InputField value={newName} onChange={handleNameChange} label={'name'} />
          <br/>
          Phone number: <InputField value={newNumber} onChange={handleNumberChange} label={'phone-number'} />
        </div>
        <div>
          <button type="submit">Add Person</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <Numbers people={people}/>
    </>
  )
}

export default App