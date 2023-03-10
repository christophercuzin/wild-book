import blank_profile from '../assets/blank_profile.png';
import Skill from "../components/Skill"
import Select from "../components/Select"
import { wildersService } from '../service/wildersService/wildersService';



const WilderCard = (props) => {
  const handelDeleteClick = async () => {
    await wildersService.removeWilder(props.id)
    props.fetchData()
  }
  return (
  <article className="card">
    <img src={blank_profile} alt="Jane Doe Profile" />
    <h3>{ props.name }</h3>
    <p>
      Bonjour, je m'appelle { props.name}, j'habite a { props.city}.
    </p>
    <h4>Wild Skills</h4>
    <ul className="skills">
      {
        props.skills.map((skill) => {
          return <Skill 
                    key={skill.name} 
                    wilderId={props.id} 
                    id={skill.id} 
                    name={skill.name} 
                    votes={ skill.votes} 
                    fetchData={props.fetchData} 
                  />
        })
      }
    </ul>
      <button
        type="button"
        onClick={handelDeleteClick}
      >
        remove
      </button>
      <Select
        skillsList={props.skillsList}
        fetchData={props.fetchData}
        wilderId={props.id}
      />
  </article>
  )
}

export default WilderCard

