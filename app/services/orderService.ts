import API from "~/constants/api";
import axios from "axios";

export const createOrder = async (data: any) => {
    const response = await axios.post(API.ORDER.CREATE, data, {
        withCredentials: true
    });

    return response.data;
};

export const getAllOrders = async () => {
    const response = await axios.get(API.ORDER.GET_ALL, {
        withCredentials: true
    });

    return response.data;
};

export const getMyOrders = async () => {
    const response = await axios.get(API.ORDER.GET_MY_ORDERS, {
        withCredentials: true
    });

    return response.data;
};

export const getSellerOrders = async () => {
    const response = await axios.get(API.ORDER.GET_SELLER_ORDERS, {
        withCredentials: true
    });

    return response.data;
};

export const getOrderById = async (id: number) => {
    const response = await axios.get(API.ORDER.GET_BY_ID(id), {
        withCredentials: true
    });

    return response.data;
};

export const updateOrderStatus = async (orderId: number, status: string) => {
    const response = await axios.put(
        API.ORDER.UPDATE_STATUS(orderId, status),
        {},
        { withCredentials: true }
    );

    return response.data;
};

export const deleteOrder = async (orderId: number) => {
    const response = await axios.delete(API.ORDER.DELETE(orderId), {
        withCredentials: true
    });

    return response.data;
};

export const cancelOrder = async (orderId: number) => {
    const response = await axios.delete(API.ORDER.CANCEL(orderId), {
        withCredentials: true
    });

    return response.data;
};

export const createOrderFromCart = async (data: any) => {
    const response = await axios.post(API.ORDER.CREATE_FROM_CART, data, {
        withCredentials: true
    });

    return response.data;
};

export const createStripeCheckout = async (data: any) => {
    const response = await axios.post(API.ORDER.STRIPE_CHECKOUT, data, {
        withCredentials: true
    });

    return response.data;
};

export const stripeSuccess = async (sessionId: string) => {
    const response = await axios.get(
        `${API.ORDER.STRIPE_SUCCESS}?session_id=${sessionId}`,
        { withCredentials: true }
    );

    return response.data;
};