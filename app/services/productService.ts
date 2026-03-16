import API from "~/constants/api";
import axios from "axios";

export const getAllProducts = async () => {
    const response = await axios.get(API.PRODUCT.GET_ALL);

    return response.data;
}

export const getProductById = async (id: number) => {
    const response = await axios.get(API.PRODUCT.GET_BY_ID(id));

    return response.data;
}

export const getProductByCategory = async (category: string) => {
    const response = await axios.get(API.PRODUCT.CATEGORY(category));

    return response.data;
}