import axiosWithConfig from "../axiosWithConfig";

export const getProducts = async () => {
  try {
    const response = await axiosWithConfig.get("/products");

    return response.data;
  } catch (error) {
    throw Error("Failed to get products");
  }
};

export const getDetailProducts = async (id_product) => {
  try {
    const response = await axiosWithConfig.get("/products/" + id_product);

    return response.data;
  } catch (error) {
    throw Error("Failed to get a product");
  }
};

export const createProduct = async (data) => {
  try {
    const newData = {
      ...data,
      image:
        "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png",
    };
    const response = await axiosWithConfig.post("/products", newData);

    return response.data;
  } catch (error) {
    throw Error("Failed to create a new product");
  }
};

export const updateProduct = async (data) => {
  const { id } = data;
  try {
    const newData = {
      ...data,
      image:
        "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png",
    };
    const response = await axiosWithConfig.put(`/products/${id}`, newData);

    return response.data;
  } catch (error) {
    throw Error("Failed to update a product");
  }
};

export const deleteProduct = async (id_product) => {
  try {
    const response = await axiosWithConfig.delete("/products/" + id_product);

    return response.data;
  } catch (error) {
    throw Error("Failed to delete a product");
  }
};
