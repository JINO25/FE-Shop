import { createContext, useContext, useEffect, useState } from "react";
import API from "~/constants/api";

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    avatar: string;
}

interface AuthContextType {
    user: User | null;
    setUser: (user: User | null) => void;
    loading: boolean;
    refreshAuth: () => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [isLogOut, setIsLogOut] = useState(false);

    const refreshAuth = async () => {
        if (isLogOut) return;
        try {
            const response = await fetch(API.AUTH.ME, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    // "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                credentials: "include"
            });

            if (!response.ok) {
                setUser(null);
                return;
            }

            const data = await response.json();
            setUser(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    const logout = async () => {
        setIsLogOut(true);
        try {
            await fetch(API.AUTH.LOGOUT, {
                method: "GET",
                credentials: "include",
            });
        } finally {
            setUser(null);
            setIsLogOut(false);
        }
    };

    useEffect(() => {
        refreshAuth();
    }, [])

    return (
        <AuthContext.Provider value={{ user, setUser, loading, refreshAuth, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
    return ctx;
};
