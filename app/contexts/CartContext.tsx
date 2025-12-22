import { createContext, useContext, useState } from "react";

export type CartItem = {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
};

type CartContextType = {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([
        { id: 1, name: "Product 1", image: "/images/product.jpg", price: 190, quantity: 2 },
        { id: 2, name: "Product 2", image: "/images/product.jpg", price: 120, quantity: 1 },
        { id: 3, name: "Product 3", image: "/images/product.jpg", price: 90, quantity: 3 },
    ]);

    const addToCart = (item: CartItem) => {
        setCartItems((prev) => {
            const existed = prev.find((i) => i.id === item.id);
            if (existed) {
                return prev.map((i) =>
                    i.id === item.id
                        ? { ...i, quantity: i.quantity + item.quantity }
                        : i
                );
            }
            return [...prev, item];
        });
    };

    const removeFromCart = (id: number) => {
        setCartItems((prev) => prev.filter((i) => i.id !== id));
    };

    const updateQuantity = (id: number, quantity: number) => {
        setCartItems((prev) =>
            prev.map((i) =>
                i.id === id ? { ...i, quantity } : i
            )
        );
    };

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
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
