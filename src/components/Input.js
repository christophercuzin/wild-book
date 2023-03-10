
const Input = (props) => {
  return (
    <div className="input-container">
      <label htmlFor={props.inputName}>{props.label}</label>
      <input
        id={props.inputName}
        className="input"
        type={props.type}
        value={props.value}
        onChange={(e) => {
          props.state(e.target.value)
        }}
      />
    </div>
  )
}

export default Input