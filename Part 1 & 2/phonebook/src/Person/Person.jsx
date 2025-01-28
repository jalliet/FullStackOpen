const Person = ({ person }) => {
  return (
    <>
      <p>Person {person.id}: {person.name} | reachable @<strong>{person.number}</strong></p>
    </>
  )
}

export { Person }