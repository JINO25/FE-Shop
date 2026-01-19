import React, { useState } from "react";
import { useNavigate } from "react-router";
import API from "~/constants/api";
import { useAuth } from "~/contexts/AutheContext";

export const Login = () => {
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const [signupName, setSignupName] = useState("");
    const [signupEmail, setSignupEmail] = useState("");
    const [signupPassword, setSignupPassword] = useState("");

    const [signupError, setSignupError] = useState("");
    const [signupSuccess, setSignupSuccess] = useState("");


    const navigate = useNavigate();
    const { refreshAuth } = useAuth();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        try {
            const res = await fetch(API.AUTH.LOGIN, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({ email, password }),
            });

            if (!res.ok) {
                const msg = await res.text();
                throw new Error("Email hoặc mật khẩu không đúng");
            }

            await refreshAuth();

            navigate("/");
        } catch (err: any) {
            setError(err.message || "Login failed");
        }
    };

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setSignupError("");
        setSignupSuccess("");

        try {
            const res = await fetch(API.AUTH.REGISTER, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: signupName,
                    email: signupEmail,
                    password: signupPassword,
                }),
            });

            if (!res.ok) {
                const msg = await res.text();
                throw new Error(msg || "Email đã tồn tại");
            }

            setSignupSuccess("Đăng ký thành công! Vui lòng đăng nhập.");
            setSignupName("");
            setSignupEmail("");
            setSignupPassword("");

            setTimeout(() => {
                setIsRightPanelActive(false);
            }, 1000);
        } catch (err: any) {
            setSignupError(err.message);
        }
    };


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#f6f5f7] font-[Montserrat,sans-serif]">
            <div
                className={`relative bg-white rounded-xl shadow-[0_14px_28px_rgba(0,0,0,0.25),0_10px_10px_rgba(0,0,0,0.22)] overflow-hidden w-[768px] max-w-full min-h-[600px] transition-all duration-500`}
                id="container"
            >
                {/* Sign Up Form */}
                <div
                    className={`absolute top-0 left-0 h-full w-1/2 transition-all duration-500 ${isRightPanelActive
                        ? "translate-x-full opacity-100 z-10"
                        : "opacity-0 z-0"
                        }`}
                >
                    <form onSubmit={handleSignup} className="bg-white flex flex-col items-center justify-center px-12 h-full text-center">
                        <h1 className="font-bold text-l">Create Account</h1>
                        <div className="flex justify-center">
                            <a
                                href="#"
                                className="border border-gray-300 rounded-full flex items-center justify-center w-10 h-10 mx-1"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                href="#"
                                className="border border-gray-300 rounded-full flex items-center justify-center w-10 h-10 mx-1"
                            >
                                <i className="fab fa-google-plus-g"></i>
                            </a>
                            <a
                                href="#"
                                className="border border-gray-300 rounded-full flex items-center justify-center w-10 h-10 mx-1"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                        <span className="text-xs">
                            or use your email for registration
                        </span>
                        <input
                            type="text"
                            placeholder="Name"
                            value={signupName}
                            onChange={(e) => setSignupName(e.target.value)}
                            className="bg-gray-200 p-3 my-2 w-full"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={signupEmail}
                            onChange={(e) => setSignupEmail(e.target.value)}
                            className="bg-gray-200 p-3 my-2 w-full"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={signupPassword}
                            onChange={(e) => setSignupPassword(e.target.value)}
                            className="bg-gray-200 p-3 my-2 w-full"
                        />
                        <button className="rounded-full border border-[#FF4B2B] bg-[#FF4B2B] text-white text-xs font-bold px-12 py-3 uppercase tracking-wider mt-4 hover:scale-95 transition-transform">
                            Sign Up
                        </button>
                    </form>
                </div>

                {/* Sign In Form */}
                <div
                    className={`absolute top-0 left-0 h-full w-1/2 transition-all duration-500 ${isRightPanelActive
                        ? "translate-x-full opacity-0 z-0"
                        : "opacity-100 z-10"
                        }`}
                >
                    <form
                        onSubmit={handleLogin}
                        className="bg-white flex flex-col items-center justify-center px-12 h-full text-center">
                        <h1 className="font-bold text-xl">Sign in</h1>
                        <div className="flex justify-center my-5">
                            <a
                                href="#"
                                className="border border-gray-300 rounded-full flex items-center justify-center w-10 h-10 mx-1"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                href="#"
                                className="border border-gray-300 rounded-full flex items-center justify-center w-10 h-10 mx-1"
                            >
                                <i className="fab fa-google-plus-g"></i>
                            </a>
                            <a
                                href="#"
                                className="border border-gray-300 rounded-full flex items-center justify-center w-10 h-10 mx-1"
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                        <span className="text-xs">or use your account</span>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-gray-200 p-3 my-2 w-full"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-gray-200 p-3 my-2 w-full"
                        />
                        <a href="#" className="text-sm text-gray-600 my-2">
                            Forgot your password?
                        </a>
                        <button
                            type="submit"
                            className="rounded-full border border-[#FF4B2B] bg-[#FF4B2B] text-white text-xs font-bold px-12 py-3 uppercase tracking-wider mt-4 hover:scale-95 transition-transform">
                            Sign In
                        </button>
                        {error && (
                            <p className="text-red-500 text-sm mt-2">{error}</p>
                        )}

                    </form>
                </div>

                {/* Overlay */}
                <div
                    className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-500 z-20 ${isRightPanelActive ? "-translate-x-full" : ""
                        }`}
                >
                    <div
                        className={`bg-gradient-to-r from-[#FF4B2B] to-[#FF416C] text-white relative -left-full h-full w-[200%] transition-transform duration-500 ${isRightPanelActive ? "translate-x-1/2" : ""
                            }`}
                    >
                        {/* Overlay Left */}
                        <div className="absolute flex flex-col items-center justify-center px-10 text-center top-0 h-full w-1/2">
                            <h1 className="font-bold text-2xl">Welcome Back!</h1>
                            <p className="text-sm my-5">
                                To keep connected with us please login with your personal info
                            </p>
                            <button
                                onClick={() => setIsRightPanelActive(false)}
                                className="rounded-full border border-white bg-transparent text-white text-xs font-bold px-12 py-3 uppercase tracking-wider hover:scale-95 transition-transform"
                            >
                                Sign In
                            </button>
                        </div>
                        {/* Overlay Right */}
                        <div className="absolute right-0 flex flex-col items-center justify-center px-10 text-center top-0 h-full w-1/2">
                            <h1 className="font-bold text-2xl">Hello, Friend!</h1>
                            <p className="text-sm my-5">
                                Enter your personal details and start your journey with us
                            </p>
                            <button
                                onClick={() => setIsRightPanelActive(true)}
                                className="rounded-full border border-white bg-transparent text-white text-xs font-bold px-12 py-3 uppercase tracking-wider hover:scale-95 transition-transform"
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
