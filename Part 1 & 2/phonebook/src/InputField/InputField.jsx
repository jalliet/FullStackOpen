const InputField = ({ value, onChange, label }) => {
  return (
    <input value={value} onChange={onChange} key={`${label}-field`} />
  )
}

export { InputField }