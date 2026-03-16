import API from "~/constants/api";
import axiosClient from "~/utils/axiosClient";

export const getUserAddresses = async () => {
    const response = await axiosClient.get(API.ADDRESS.GET_BY_USER);
    return response.data;
};

export const createAddress = async (data: any) => {
    const response = await axiosClient.post(API.ADDRESS.CREATE, data,);
    return response.data;
};

export const updateAddress = async (addressId: number, data: any) => {
    const response = await axiosClient.put(API.ADDRESS.UPDATE(addressId), data);
    return response.data;
};

export const deleteAddress = async (addressId: number) => {
    const response = await axiosClient.delete(API.ADDRESS.DELETE(addressId));
    return response.data;
};