import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

export const signUP = async (user) => {
  

    const response = await axios.post(
        `${API_BASE_URL}/signup`, 
        {user}
    ); 
    return response.data
}




export const login = async (user) => {
    const response = await axios.post(
        `${API_BASE_URL}/auth_login`,
        {user}
        
    )
    return response.data
}

