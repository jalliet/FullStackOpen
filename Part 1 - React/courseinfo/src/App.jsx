const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const ex1 = 10
  const part2 = 'Using props to pass data'
  const ex2 = 7
  const part3 = 'State of a component'
  const ex3 = 14

  const courseParts = [
    { part: part1, exercise: ex1 },
    { part: part2, exercise: ex2 },
    { part: part3, exercise: ex3 }
  ]

  return (
    <div>
      <Header course={course} />
      {/*
      <Content part={part1} exercise={ex1} />
      <Content part={part2} exercise={ex2} />
      <Content part={part3} exercise={ex3} />
      */}
      <RefactoredContent parts={courseParts} />
      <Total exsTotal={ex1 + ex2 + ex3} />
    </div>
  )
}

const Header = (props) => {
  console.log("Header component log:")
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )

}

const Content = (props) => {
  console.log("Content component log:")
  console.log(props)
  return (
    <>
      <p>
        {props.part} {props.exercise}
      </p>
    </>
  )
}

const RefactoredContent = ({ parts }) => {
  console.log("RefactoredContent component log:")
  console.log(parts)
  return (
    <>
      {parts.map(element => (
        <Part key={element.part} part={element.part} exercise={element.exercise} />
      ))}
      {/*
      parts.map(element => (
        <p key={element.part}>{element.part} {element.exercise}</p>
      ))*/}
      {/*
      <Part part={parts[0].part} exercise={parts[0].exercise} />
      <Part part={parts[1].part} exercise={parts[1].exercise} />
      <Part part={parts[2].part} exercise={parts[2].exercise} />
      */}
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.exercise}</p>
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