import axios from "axios";

export const api = axios.create({
  baseURL: "https://acca-179-108-104-153.sa.ngrok.io",
});

  export const createSession = async (username, password) => {
    return api.post("/oauth/token",
    {
      username, 
      password, 
      client_id: "1", 
      client_secret: "jiurhlGUNrjqALI6o9e1WBtSwb1pIg2FrZSKJUCZ", 
      grant_type: "password"
},);}

// export const getUsers = async () => {
//     return api.get("/api/users")
//   }