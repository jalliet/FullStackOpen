const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      <h1>Web Development Curriculum</h1>
      {courses.map((course) => (
       <Course course={course} />
      ))}
    </>
  )
}


const Course = ({ course }) => {
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

export default App