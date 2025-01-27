const Person = ({ person }) => {
  return (
    <p>
      Person {person.id}: {person.name}
    </p>
  )
}

export { Person }