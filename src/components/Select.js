import { wildersService } from '../service/wildersService/wildersService';
import { useContext, useState } from "react"
import { wildersContext } from '../contexts/WildersContext';

const Select = (props) => {
  const {skills, fetchData, handleCloseModal} = useContext(wildersContext)
  const [skill, setSkill] = useState({})
  return (
    <form
    onSubmit={
      async (e) => {
        e.preventDefault()
        await wildersService.addSkill(props.wilderId, skill)
        handleCloseModal()
        fetchData()
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
          skills.map((skill) => {
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