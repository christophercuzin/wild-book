import axios from 'axios';

export const rateService = {
  getRate: async (wilderId, skillId) => {
    const rate = await axios.get(`http://localhost:5000/api/wilder/${wilderId}/skill/${skillId}/grade`);
  
    return rate
  },
} 