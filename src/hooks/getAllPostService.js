import { BASE_URL, getHeaders } from "../apis/services";

export const fetchPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/post/list/`, {
      method: "GET",
      headers: getHeaders(),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data = await response.json();
    return data.posts; // Return the posts array
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
