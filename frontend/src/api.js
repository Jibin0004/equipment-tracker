import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

export const equipmentAPI = {
  // GET all equipment
  getAll: async () => {
    const res = await axios.get(`${API_BASE_URL}/equipment`);
    return res.data; 
    // returns: { success: true, data: [...] }
  },

  // GET single equipment by id
  getById: async (id) => {
    const res = await axios.get(`${API_BASE_URL}/equipment/${id}`);
    return res.data;
    // returns: { success: true, data: {...} }
  },

  // ADD equipment (POST)
  create: async (equipment) => {
    const res = await axios.post(`${API_BASE_URL}/equipment`, equipment);
    return res.data;
    // returns: { success: true, data: {...new item...} }
  },

  // EDIT equipment (PUT)
  update: async (id, equipment) => {
    const res = await axios.put(`${API_BASE_URL}/equipment/${id}`, equipment);
    return res.data;
    // returns: { success: true, data: {...updated item...} }
  },

  // DELETE equipment
  remove: async (id) => {
    const res = await axios.delete(`${API_BASE_URL}/equipment/${id}`);
    return res.data;
    // returns: { success: true }
  }
};
