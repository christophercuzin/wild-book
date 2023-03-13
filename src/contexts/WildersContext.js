import { createContext, useState, useEffect } from "react";
import { wildersService } from '../service/wildersService/wildersService';
import { skillService } from '../service/skillService/skillService';

// on défini un nouveau context
export const wildersContext = createContext({
  wilders: [],
  fetchData: () => {},
})

export const WildersProvider = ({children}) => {
  const [wilders, setWilders] = useState([]);
  const [skills, setSkills] = useState([]);


  const handleOpenModal = (e) => {
    document.getElementById(`${e.target.id}modal`).classList.remove("modalHidden")
    document.getElementById(`${e.target.id}modal`).classList.add("modalShow")
  }

  const handleCloseModal = (e) => {
    document.querySelector(".modalShow").classList.add("modalHidden")
    document.querySelector(".modalShow").classList.remove("modalShow")
  }
  
  const fetchData = async () => {
    const wilders = await wildersService.getWilders()
    const skills = await skillService.getSkills()
    setWilders(wilders.data)
    setSkills(skills.data)
  }
  useEffect(() => {      
    
    fetchData()
  }, []);

  return (
    <wildersContext.Provider value={{wilders, skills, fetchData, handleOpenModal, handleCloseModal}}>
      {children}
    </wildersContext.Provider>
  )
}