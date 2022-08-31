import axios from 'axios';

const api = axios.create({
    baseURL: "https://8ea5-179-108-104-153.sa.ngrok.io/api/users",
  });
  
export default api;

