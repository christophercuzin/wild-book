
import React, {useState, useEffect } from 'react';
import '../App.css';
import WilderCard from "../components/WilderCard"
import { wildersService } from '../service/wildersService/wildersService';
import { skillService } from '../service/skillService/skillService';

const Home = () => {
  const [wilders, setWilders] = useState([]);
  const [skills, setSkills] = useState([]);
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
    <main className="container">
      <h2>Wilders</h2>
      <section className="card-row">
        {
          wilders.map((wilder) => {
            return <WilderCard
                      key={wilder.id}
                      id={wilder.id}
                      name={ wilder.name }
                      city={ wilder.city }
                      skills={ wilder.skills}
                      fetchData={fetchData}
                      skillsList={skills}
                    />
          })
        }
      </section>
    </main>
  );
}

export default Home;