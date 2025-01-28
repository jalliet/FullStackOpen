import { Person } from '../Person/Person'

const Numbers = ({ people }) => {
  return (
    <>
      {people.map((person) => (
        <Person key={person.id} person={person}/>
      ))}
    </>
  )
}

export { Numbers }