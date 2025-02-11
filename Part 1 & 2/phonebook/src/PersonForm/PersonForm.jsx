import { InputField } from '../InputField/InputField'

const PersonForm = ({ handlers, values }) => {
    const [ addPerson, handleNameChange, handleNumberChange ] = handlers
    const [ newName, newNumber ] = values
    return (
        <>
            <form onSubmit={addPerson}>
                <div>
                    Name: <InputField value={newName} onChange={handleNameChange} label={'name'} />
                    <br />
                    Phone number: <InputField value={newNumber} onChange={handleNumberChange} label={'phone-number'} />
                </div>
                <div>
                    <button type="submit">Add Person</button>
                </div>
            </form>
        </>
    )
}

export { PersonForm }