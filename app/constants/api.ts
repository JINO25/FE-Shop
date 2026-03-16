const API_BASE_URL = import.meta.env.VITE_BACKEND_API_URL;

export const API = {
    AUTH: {
        LOGIN: `${API_BASE_URL}/auth/login`,
        REGISTER: `${API_BASE_URL}/auth/register`,
        ME: `${API_BASE_URL}/auth/me`,
        LOGOUT: `${API_BASE_URL}/auth/logout`,
    },

    USER: {
        PROFILE: `${API_BASE_URL}/users/profile`,
    },

    PRODUCT: {
        GET_ALL: `${API_BASE_URL}/products`,
        GET_BY_ID: (id: number) => `${API_BASE_URL}/products/${id}`,
        CREATE: `${API_BASE_URL}/products`,
        UPDATE: (id: number) => `${API_BASE_URL}/products/${id}`,
        DELETE: (id: number) => `${API_BASE_URL}/products/${id}`,
        CATEGORY: (name: string) => `${API_BASE_URL}/products/category/${name}`,
    },

    ADDRESS: {
        CREATE: `${API_BASE_URL}/addresses`,
        GET_BY_USER: `${API_BASE_URL}/addresses`,
        UPDATE: (id: number) => `${API_BASE_URL}/addresses/update?addressId=${id}`,
        DELETE: (id: number) => `${API_BASE_URL}/addresses/delete?addressId=${id}`,
    },

    BILL: {
        GET_ALL: `${API_BASE_URL}/bills`,
        GET_BY_ID: (id: number) => `${API_BASE_URL}/bills/${id}`,
        GET_USER_BILLS: `${API_BASE_URL}/bills/user`,
        GET_SELLER_BILLS: `${API_BASE_URL}/bills/seller`,
        UPDATE_STATUS: `${API_BASE_URL}/bills/update`,
    },

    CART: {
        GET_USER_CART: `${API_BASE_URL}/cart/user`,
        ADD_ITEM: `${API_BASE_URL}/cart/add`,
        UPDATE_ITEM: (cartItemId: number, quantity: number) =>
            `${API_BASE_URL}/cart/item/${cartItemId}?quantity=${quantity}`,
        REMOVE_ITEM: (cartItemId: number) =>
            `${API_BASE_URL}/cart/item/${cartItemId}`,
        CLEAR_CART: `${API_BASE_URL}/cart/clean`,
    },

    CATEGORY: {
        GET_ALL: `${API_BASE_URL}/categories`,
        GET_BY_ID: (id: number) => `${API_BASE_URL}/categories/${id}`,
        CREATE: `${API_BASE_URL}/categories`,
        UPDATE: (id: number) => `${API_BASE_URL}/categories/update/${id}`,
        DELETE: (id: number) => `${API_BASE_URL}/categories/delete/${id}`,
    },

    ORDER: {
        CREATE: `${API_BASE_URL}/order`,
        CREATE_FROM_CART: `${API_BASE_URL}/order/checkout`,

        GET_ALL: `${API_BASE_URL}/order`,
        GET_MY_ORDERS: `${API_BASE_URL}/order/my`,
        GET_SELLER_ORDERS: `${API_BASE_URL}/order/seller`,
        GET_BY_ID: (id: number) => `${API_BASE_URL}/order/${id}`,

        UPDATE_STATUS: (id: number, status: string) =>
            `${API_BASE_URL}/order/${id}/status?status=${status}`,

        DELETE: (id: number) => `${API_BASE_URL}/order/delete/${id}`,
        CANCEL: (id: number) => `${API_BASE_URL}/order/${id}/cancel`,

        STRIPE_CHECKOUT: `${API_BASE_URL}/order/create-checkout-session`,

        STRIPE_SUCCESS: `${API_BASE_URL}/order/payment-success`,
    },
};

export default API;