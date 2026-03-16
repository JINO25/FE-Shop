import { createContext, useContext, useEffect, useState } from "react";
import { addItemToCart, clearCart, getUserCart, removeCartItem, updateCartItem } from "~/services/cartService";

export type CartItem = {
    id: number;
    name: string;
    price: number;
    variant: number;
    type: string;
    image: string;
    quantity: number;
};

type AddCartPayload = {
    productVariantId: number;
    quantity: number;
};

type CartContextType = {
    totalItems: number;
    totalPrice: number;
    cartItems: CartItem[];
    addToCart: (item: AddCartPayload) => Promise<void>;
    removeFromCart: (id: number) => Promise<void>;
    updateQuantity: (id: number, quantity: number) => Promise<void>;
    clearAllItemCart: () => Promise<void>
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const fetchCart = async () => {
        try {
            const data = await getUserCart();

            const items = data[0]?.cartItems?.map((item: any) => ({
                id: item.id,
                name: item.productVariantCartDTO.productName,
                variant: item.productVariantCartDTO.id,
                price: item.productVariantCartDTO.price,
                type: item.productVariantCartDTO.option + " " + item.productVariantCartDTO.color,
                image: item.image ?? "",
                quantity: item.quantity
            })) ?? [];

            setCartItems(items);

        } catch (error) {
            console.error("fetch cart error", error);
        }
    };

    useEffect(() => {


        fetchCart();
    }, []);

    const addToCart = async (data: AddCartPayload) => {
        try {
            await addItemToCart(data);

            const cart = await getUserCart();
            setCartItems(cart.items);
            await fetchCart();
        } catch (error) {
            console.error("add cart error", error);
        }
    };

    const removeFromCart = async (id: number) => {
        try {
            await removeCartItem(id);

            setCartItems((prev) => prev.filter((i) => i.id !== id));
        } catch (error) {
            console.error("remove cart error", error);
        }
    };

    const updateQuantity = async (id: number, quantity: number) => {
        try {
            await updateCartItem(id, quantity);

            setCartItems((prev) =>
                prev.map((i) =>
                    i.id === id ? { ...i, quantity } : i
                )
            );
        } catch (error) {
            console.error("update cart error", error);
        }
    };

    const clearAllItemCart = async () => {
        try {
            await clearCart();
            setCartItems([]);
        } catch (error) {
            console.error("clear cart error", error);
        }
    };

    const totalItems = (cartItems ?? []).reduce(
        (t, i) => t + 1,
        0
    );

    const totalPrice = (cartItems ?? []).reduce(
        (t, i) => t + i.price * i.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearAllItemCart,
                totalItems,
                totalPrice
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

// custom hook cho gọn
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used inside CartProvider");
    }
    return context;
};
