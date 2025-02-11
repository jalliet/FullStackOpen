import { InputField } from "../InputField/InputField"

const PersonFilter = ({ value, onChange, label }) => {
    return (
        <InputField value={value} onChange={onChange} key={label} />
    )
}

export { PersonFilter }