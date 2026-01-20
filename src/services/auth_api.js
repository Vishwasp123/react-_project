import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const signUP = async (user) => {
  const response = await axios.post(
    `${API_BASE_URL}/signup`,
    { user }
  );
  return response.data;
};

export const login = async (user) => {
  const response = await axios.post(
    `${API_BASE_URL}/auth_login`,
    { user }
  );
  return response.data;
};

export const google_login = async(idToken) =>{
    const response = await axios.post(
        `${API_BASE_URL}/google_login`,{
            id_token: idToken,
        }
    );
    return response.data
}
