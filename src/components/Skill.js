const Skills = (props) => {
  return (
    <li>
      { props.skill }
      <span className="votes">{ props.votes } </span>
    </li>
  )
}

export default Skills