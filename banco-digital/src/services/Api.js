// import axios from "axios";

// export const api = axios.create({
//     baseURL: "https://7c71-179-108-104-153.sa.ngrok.io"
// });

// export const createSession = async (username, password) => {
//     return api.post("oauth/token", { username, password });
// };



// client_id: "2",
//       client_secret: "oWYeZUBNkxViZSyKrvydfZWa3YgkUTq78lKt3WTe",
//       username: username,
//       password: password,
//       grant_type: "password",


import axios from "axios";


export const api = axios.create({
  baseURL: "https://0630-179-108-104-153.sa.ngrok.io",
});

  export const createSession = async (username, password) => {
    return api.post("/oauth/token",
    {
      username, 
      password, 
      client_id: "1", 
      client_secret: "bDjHxYH4OHLEWLunvPWhHhpKBtqZ8xIPb954BOHX", 
      grant_type: "password"
    },);}

export const userAccount = async () => {
    return api.get("/api/users")
  }