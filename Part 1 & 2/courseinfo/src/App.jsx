const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const sumExs = (parts) => {
    return parts.reduce((sum, part) => sum + part.exercises, 0)
  }

  return (
    <>
      <Header 
        course={course.name} 
      />
      <Content 
        parts={course.parts} 
      />
      <Total 
        exsTotal={sumExs(course.parts)}
      />
    </>
  )
}

const Header = (props) => {
  console.log("Header component log:")
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )

}

const Content = ({ parts }) => {
  console.log("Content component log:")
  console.log(parts)
  return (
    <>
      {parts.map((part) => (
        <Part 
          key={part.name} 
          details={part}
        />
      ))}
    </>
  )
}

const Part = ({ details }) => {
  return (
    <>
      <p>{details.name}: {details.exercises}</p>
    </>
  )
}

const Total = (props) => {
  console.log("Total component log:")
  console.log(props)
  return (
    <>
      <p>Total number of exs: {props.exsTotal}</p>
    </>
  )
}

export default App