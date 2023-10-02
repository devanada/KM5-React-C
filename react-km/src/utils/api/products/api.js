import axiosWithConfig from "../axiosWithConfig";

export const getProducts = async () => {
  try {
    const response = await axiosWithConfig.get("/products");

    return response.data;
  } catch (error) {
    throw new Error(error.toString());
  }
};

export const getDetailProducts = async (id_product) => {
  try {
    const response = await axiosWithConfig.get("/products/" + id_product);

    return response.data;
  } catch (error) {
    throw new Error(error.toString());
  }
};
