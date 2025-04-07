const API_URL = "http://127.0.0.1:8000/post/create/";

export const createPost = async (title, description, imageFile) => {
  const token = localStorage.getItem("userToken");

  if (!token) {
    throw new Error("User is not authenticated");
  }

  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("image", imageFile);

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Token ${token}`,
      },
      body: formData, // FormData is used for file uploads
    });

    if (!response.ok) {
      throw new Error("Failed to create post");
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};
