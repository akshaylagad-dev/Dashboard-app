
const API_URL=import.meta.env.VITE_API_URL // VITE_API_URL=https://jsonplaceholder.typicode.com coming from .env file 
const ENDPOINTS = {
    TODOS: `${API_URL}/todos`,
  };
  
  export default ENDPOINTS;