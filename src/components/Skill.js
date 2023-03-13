
import { useContext, useState, useEffect } from "react"
import { wildersContext } from "../contexts/WildersContext"
import { wildersService } from "../service/wildersService/wildersService"
import { rateService } from '../service/rateService/rateService';

const Skills = (props) => {
  const {fetchData} = useContext(wildersContext)
  const [rate, setRate] = useState("")
  const fetchRate = async () => {
    const rate = await rateService.getRate(props.wilderId, props.id)
    setRate(rate.data)
  }
  useEffect(() => {      
    
    fetchRate()
  });
  return (
    <li>
      { props.name }
      <span className="votes">{rate}</span>
      <span 
        className="closeButton"
        onClick={async () => {
            await wildersService.removeWilderSkill(props.wilderId, props.id)
            fetchData()
        }}
      >X</span>

    </li>
  )
}

export default Skills