import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const stats = [ good, neutral, bad ]

  const handleGoodClick = () => {
    let newGood = good + 1
    setGood(newGood)
    return newGood
  }

  const handleNeutralClick = () => {
    let newNeutral = neutral + 1
    setNeutral(newNeutral)
    return newNeutral
  }

  const handleBadClick = () => {
    let newBad = bad + 1
    setBad(newBad)
    return newBad
  }

  return (
    <div>
      <Button text={'good:' + good} onClick={handleGoodClick} /> &nbsp;
      <Button text={'neutral: ' + neutral} onClick={handleNeutralClick} /> &nbsp;
      <Button text={'bad: ' + bad} onClick={handleBadClick} /> 
      <Stats stats={stats} />
    </div>
  )
}

const Button = ({ onClick, text }) => {
  // console.log(text)
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}

const Stats = ({ stats }) => {
  let total = stats.reduce((sum, stat) => sum + stat, 0)
  let [ avg, positive ] = [ total / stats.length, stats[0] / total ]

  if ( isNaN(positive) ) {
    return (
      <>
        <h2>Here are the stats:</h2>
        <p>Total: {total}</p>
        <p>Average: {avg.toPrecision(2)}</p>
      </>
    )
  }
  return (
    <>
      <h2>Here are the stats:</h2>
      <p>Total: {total}</p>
      <p>Average: {avg.toPrecision(2)}</p>
      <p>Positive: {positive.toPrecision(2)} %</p>
    </>
  )
}

export default App