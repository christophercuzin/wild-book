import blank_profile from '../assets/blank_profile.png';
import Skill from "../components/Skill"
import Modal from "../components/Modal"
import { wildersService } from '../service/wildersService/wildersService';
import { useContext } from 'react';
import { wildersContext } from '../contexts/WildersContext';



const WilderCard = (props) => {
  const {fetchData, handleOpenModal} = useContext(wildersContext)
  
  const handleDeleteClick = async () => {
    await wildersService.removeWilder(props.id)
    fetchData()
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
                  />
        })
      }
    </ul>
      <button
        type="button"
        onClick={handleDeleteClick}
      >
        remove
      </button>
      <button
        id={props.id.toString()}
        type="button"
        onClick={handleOpenModal}
      >
        Add skill
      </button>
      <Modal
        id={props.id}
      />
  </article>
  )
}

export default WilderCard

