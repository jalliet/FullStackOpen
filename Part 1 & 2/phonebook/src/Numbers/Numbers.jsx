import { Person } from '../Person/Person'

const Numbers = ({ persons }) => {
  return (
    <>
      {persons.map((person) => (
        <Person key={person.id} person={person}/>
      ))}
    </>
  )
}

export { Numbers }