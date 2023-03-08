import blank_profile from '../assets/blank_profile.png';
import Skill from "../components/Skill"

const WilderCard = (props) => {
  return (
    
  <article className="card">
    <img src={blank_profile} alt="Jane Doe Profile" />
    <h3>{ props.wilder.name }</h3>
    <p>
      Bonjour, je m'appelle { props.wilder.name}, j'habite a { props.wilder.city}.
    </p>
    <h4>Wild Skills</h4>
    <ul className="skills">
      {
        props.wilder.skills.map((skill) => {
          return <Skill skill={skill.title} votes={ skill.votes} />
        })
      }
    </ul>
  </article>
  )
}

export default WilderCard

