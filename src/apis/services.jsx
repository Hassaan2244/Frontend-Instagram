const BASE_URL = "http://127.0.0.1:8000";

const getAuthToken = () => {
  return localStorage.getItem("userToken");
};

const getHeaders = () => {
  const token = getAuthToken();
  if (!token) {
    throw new Error("User is not authenticated");
  }

  return {
    Authorization: `Token ${token}`,
    "Content-Type": "application/json",
  };
};

export { BASE_URL, getAuthToken, getHeaders };
