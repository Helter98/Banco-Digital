import axios from "axios";

export const Api = axios.create({
    baseURL: "https://390a-179-108-104-153.sa.ngrok.io/oauth/token"
});

export const createSession = async (username, password) => {
    return Api.post(``, { username, password });
};


// client_id: "2",
//       client_secret: "oWYeZUBNkxViZSyKrvydfZWa3YgkUTq78lKt3WTe",
//       username: username,
//       password: password,
//       grant_type: "password",