import API from "~/constants/api";
import axiosClient from "~/utils/axiosClient";

export const getUserCart = async () => {
    const response = await axiosClient.get(API.CART.GET_USER_CART);
    return response.data;
};

export const addItemToCart = async (data: any) => {
    const response = await axiosClient.post(API.CART.ADD_ITEM, data);
    return response.data;
};

export const updateCartItem = async (cartItemId: number, quantity: number) => {
    const response = await axiosClient.put(
        API.CART.UPDATE_ITEM(cartItemId, quantity)
    );
    return response.data;
};

export const removeCartItem = async (cartItemId: number) => {
    const response = await axiosClient.delete(
        API.CART.REMOVE_ITEM(cartItemId)
    );
    return response.data;
};

export const clearCart = async () => {
    const response = await axiosClient.delete(API.CART.CLEAR_CART);
    return response.data;
};