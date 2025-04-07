import { BASE_URL, getHeaders } from '../apis/services'

export const getUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users/`, {
      headers: getHeaders(),
    });
    if (!response.ok) {
      throw new Error("Error fetching users");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API getUsers error:", error);
    throw error;
  }
};
