import React, { useState } from "react";

export const Login = () => {
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);

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
                    <form className="bg-white flex flex-col items-center justify-center px-12 h-full text-center">
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
                            className="bg-gray-200 p-3 my-2 w-full"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="bg-gray-200 p-3 my-2 w-full"
                        />
                        <input
                            type="password"
                            placeholder="Password"
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
                    <form className="bg-white flex flex-col items-center justify-center px-12 h-full text-center">
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
                            className="bg-gray-200 p-3 my-2 w-full"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="bg-gray-200 p-3 my-2 w-full"
                        />
                        <a href="#" className="text-sm text-gray-600 my-2">
                            Forgot your password?
                        </a>
                        <button className="rounded-full border border-[#FF4B2B] bg-[#FF4B2B] text-white text-xs font-bold px-12 py-3 uppercase tracking-wider mt-4 hover:scale-95 transition-transform">
                            Sign In
                        </button>
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
