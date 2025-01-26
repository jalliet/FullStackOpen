const Hello = (props) => {

	console.log(props)
	return (
		<div>
			<p>Hello {props.name}, you are {props.age} years old</p>
		</div>
	)

}

const Friends = () => {
	const friends = [
		{name: 'Big', age: 19},
		{name: 'Small', age: 19}
	]
	
	{/* Note the use of the unique key for React to track changes 
		Could've been an ID instead. 
		Just needs a unique identifier for components 
	*/}
	return (
		<>
			{friends.map(friend => (
				<p key={friend.name}>My friend {friend.name} is {friend.age} years old</p>	
			))}
		</>
	)
}

const Footer = () => {
	return (
		<div>
			greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
		</div>
	)
}

const App = () => {

	const name = 'jalliet'
	const age = 'x'

	return (
		<div>
			<h1>Greetings</h1>
			<Hello name="John" age={41} />
			<Hello name={name} age={age}/>
			<Friends />
			<Footer />
		</div>
	)

}

export default App