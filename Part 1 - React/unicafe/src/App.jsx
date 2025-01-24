import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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
      <Button param={'good'} text={good} onClick={handleGoodClick} /> &nbsp;
      <Button param={'neutral'} text={neutral} onClick={handleNeutralClick} /> &nbsp;
      <Button param={'bad'} text={bad} onClick={handleBadClick} />
    </div>
  )
}

const Button = ({ onClick, param, text }) => {
  // console.log(text)
  return (
    <>
      <button onClick={onClick}>{param}: {text}</button>
    </>
  )
}

export default App