import axios from 'axios';
import ENDPOINTS from '../endpoints';
const getApiData = async()=>{
    try {
        const response = await axios.get(ENDPOINTS.TODOS);
        console.log(ENDPOINTS.TODOS);
        
        return response.data;
      } catch (error) {
        console.error("Error fetching tasks:", error);
        throw error;
      }
}

const createTask = async(task)=>{
    try {
        const response = await axios.post(ENDPOINTS.TODOS, {
          title: task.title,
          completed: task.status === "Done", // Assuming status maps to 'completed'
        });
        return response.data;
      } catch (error) {
        console.error("Error creating task:", error);
        throw error;
      }
}
export {getApiData, createTask};