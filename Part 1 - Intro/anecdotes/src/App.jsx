import { use } from 'react'
import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const [anecdoteVotes, setAnecdoteVotes] = useState(
    anecdotes.reduce((accumulator, _, idx) => ({...accumulator, [idx]: 0}), {})
  )
  const [selected, setSelected] = useState(0)
  const [maxUpvotedIdx, setMaxUpvotesIdx] = useState(0)
  

  const handleNextAnecdote = () => {
    let newSelected = selected
    while (newSelected === selected) {
      newSelected = Math.floor(Math.random() * anecdotes.length) % anecdotes.length
    }
    setSelected(newSelected)
  }

  const handleVotes = () => {
    let copy = { ...anecdoteVotes }
    copy[selected] += 1
    let newMaxUpvotedIdx = Object.entries(copy).reduce((oldMaxIdx, [newMaxIdx, votes]) => 
      votes > copy[oldMaxIdx] ? newMaxIdx : oldMaxIdx
    , '0');
    setAnecdoteVotes(copy)
    setMaxUpvotesIdx(newMaxUpvotedIdx)
  }

  return (
    <>
      <h2>Anecdote of the Day</h2>
      <p>{anecdotes[selected]}</p>
      <Votes votes={anecdoteVotes[selected]} />
      <button onClick={handleVotes}>Upvote</button> &nbsp;
      <button onClick={handleNextAnecdote}>Next Anecdote</button> 

      <h2>Most Upvoted Anecdote</h2>
      <p>{anecdotes[maxUpvotedIdx]}</p>
      <Votes votes={anecdoteVotes[maxUpvotedIdx]} />

    </>
  )
}

const Votes = ({ votes }) => {
  return (
    <>
      <p>Votes: {votes}</p>
    </>
  )
}

export default App