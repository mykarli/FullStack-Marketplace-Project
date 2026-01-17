import axios from 'axios';

const api = axios.create({
  // Backend'inin çalıştığı adresi (C# tarafı) buraya yaz
  baseURL: 'https://localhost:7000/api', 
});

// Her istekte varsa Token'ı Header'a ekler [cite: 10, 43]
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;