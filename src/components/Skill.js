import { wildersService } from "../service/wildersService/wildersService"

const Skills = (props) => {
  return (
    <li>
      { props.name }
      <span 
        className="votes"
        onClick={async () => {
            await wildersService.removeWilderSkill(props.wilderId, props.id)
            props.fetchData()
        }}
      >x</span>
    </li>
  )
}

export default Skills