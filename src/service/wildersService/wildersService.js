import axios from 'axios';

export const wildersService = {
  getWilders: async () => {
    const wilders = await axios.get("http://localhost:5000/api/wilder");
  
    return wilders
  },
  createWilder: async (name, email, city) => {
    await axios.post("http://localhost:5000/api/wilder", { name, email, city});
  },
  removeWilder: async (id) => {
    await axios.delete(`http://localhost:5000/api/wilder/${id}`);
  },
  removeWilderSkill: async (wilderId, skillId) => {
    await axios.delete(`http://localhost:5000/api/wilder/${wilderId}/skills/${skillId}/delete`)
  },
  addSkill: async (wilderId, skillId) => {
    await axios.post(`http://localhost:5000/api/wilder/${wilderId}/skills/${skillId}/add`);
  },
} 