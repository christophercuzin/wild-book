import { wildersService } from '../service/wildersService/wildersService';
import { useState } from "react"

const Select = (props) => {
  const [skill, setSkill] = useState({})
  return (
    <form
    onSubmit={
      async (e) => {
        e.preventDefault()
        await wildersService.addSkill(props.wilderId, skill)
        props.fetchData()
      }
    }
    >
      <select 
        name="skill" 
        onChange={(e) => {
          setSkill(e.target.value)
        }}
      >
        <option value="">--Please choose an option--</option>
        {
          props.skillsList.map((skill) => {
            return <option value={skill.id} key={skill.name}>{skill.name}</option>
          })
        }
      </select>
      <button type="submit">
        Add skill
      </button>
    </form>
  )
}

export default Select