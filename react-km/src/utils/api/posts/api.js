import axiosWithConfig from "../axiosWithConfig";

export const getPosts = async () => {
  try {
    const response = await axiosWithConfig.get("/posts");

    return response.data;
  } catch (error) {
    throw new Error(error.toString());
  }
};

export const createPosts = async (body) => {
  try {
    const response = await axiosWithConfig.post("/posts", body);

    return response.data;
  } catch (error) {
    throw new Error(error.toString());
  }
};
