import axios from "axios";


export const api = axios.create({
  baseURL: "https://51e9-179-108-104-153.sa.ngrok.io",
  headers: {
    Accept: "application/json", 
    "ngrok-skip-browser-warning": null,
  }
});

  export const createSession = async (username, password) => {
    return api.post("/oauth/token",
    {
      username, 
      password, 
      client_id: "1", 
      client_secret: "0S2pNlzwfOrSHo7Pzqe7Vkwsbk8iRl78t8vGOiff", 
      grant_type: "password"
},);}




// api.interceptors.request.use((config) => {
//   const token = getToken()
//   if(!token) {
//     return config
//   }
//   if(config.headers) {
//     config.headers.Authorization = `Bearer ${token}`
//     return config
//   }
// }, (error) => {
//   return Promise.reject(error)
// })






// export const getUser = async(account, user) => {
//   return api.get('/api/users', {
//     account,
//     user, 
// },);}
