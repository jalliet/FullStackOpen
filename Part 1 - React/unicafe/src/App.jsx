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

  const stats = {
    'good': {
      'value': good, 
      'func': handleGoodClick
    },
    'neutral': {
      'value': neutral, 
      'func': handleNeutralClick
    },
    'bad': {
      'value': bad, 
      'func': handleBadClick
    },
  }

  return (
    <>
      {Object.entries(stats).map(([name, data]) => (
        <Button 
          key={name}
          text={name} 
          onClick={data.func}
        />
      ))}
      <Stats statsData={stats} />
    </>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}

const Stats = ({ statsData }) => {
  const [g, n, b] = Object.values(statsData).map((elem) => (
    elem.value
  ))
  const total = g + n + b
  if (total === 0) {
    return <p>No feedback given yet</p>
  }
  const avg = (g - b) / total
  const positive = (g / total) * 100
  
  let statsDetails = {
    'good': g,
    'neutral': n,
    'bad': b,
    'total': total,
    'average': avg.toPrecision(2),
    'positive': positive.toPrecision(4) + ' %'
  }

  return (
    <>
      <h2>Statistics</h2>
      {Object.entries(statsDetails).map(([text, value]) => (
        <StatLine key={text} text={text} value={value} />
      ))}
      
    </>
  )

}

const StatLine = ({ text, value }) => {

  const capitalise = (word) => {
    return word[0].toUpperCase() + word.slice(1)
  }

  return (
    <>
      <p>{capitalise(text)}: {value}</p>
    </>
  )

}

export default App