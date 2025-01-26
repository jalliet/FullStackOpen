export const Course = ({ course }) => {
    return (
      <>
        <Header course={course} />
        <Content parts={course.parts} />
      </>
    )
}

const Header = ({ course }) => {
  return (
    <h2>{course.name}</h2>
  )
}

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part, idx) => (
        <Part key={idx} part={part} />
      ))}
      <Total parts={parts} />
    </>
  )
}

const Part = ({ part }) => {
  return (
    <p>{part.name}: {part.exercises}</p>
  )
}

const Total = ({ parts }) => {
  let total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <p>
      <strong>Total of {total} exercises</strong>
    </p>
  )
}

export default Course

