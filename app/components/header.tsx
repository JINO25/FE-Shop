import React from "react";
// import "../style.css"
import { Link, NavLink } from "react-router";
import { useCart } from "../contexts/CartContext";

export const Header = () => {

    const { cartItems, removeFromCart } = useCart();
    // const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const totalProduct = cartItems.length

    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="header__logo">
                            <a href="/">
                                <img src="/images/shop-logo.jpeg" alt="" className="w-[50px]" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <nav className="header__menu">
                            <ul>
                                <li className="active no-underline"><a href="./index.html">Home</a></li>
                                <li><a className="" href="./shop-grid.html">Shop</a></li>
                                <li><a href="#">Pages</a>
                                    <ul className="header__menu__dropdown">
                                        <li><a href="./shop-details.html">Shop Details</a></li>
                                        <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                                        <li><a href="./checkout.html">Check Out</a></li>
                                        <li><a href="./blog-details.html">Blog Details</a></li>
                                    </ul>
                                </li>
                                <li><a href="./blog.html">Blog</a></li>
                                <li><a href="./contact.html">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3">
                        <div className="header__cart flex items-center justify-end">
                            <ul>
                                <li><a href="#"><i className="fa fa-heart"></i> <span>1</span></a></li>
                                <li className="relative group">
                                    <a href="#"><i className="fa fa-shopping-bag"></i>
                                        <span>{totalProduct}</span>
                                    </a>
                                    <div
                                        className="absolute right-0 top-full w-72
                                        bg-white border rounded-md shadow-lg 
                                        hidden group-hover:block z-50"
                                    >
                                        <div className="p-4 space-y-4">
                                            {cartItems.length === 0 && (
                                                <p className="text-sm text-gray-500 text-center">
                                                    Cart is empty
                                                </p>
                                            )}

                                            {cartItems.map((item) => (
                                                <div key={item.id} className="flex gap-3 items-start">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-14 h-14 object-cover border rounded"
                                                    />

                                                    <div className="flex-1 min-w-0">
                                                        <h5 className="text-sm font-medium leading-snug line-clamp-2 truncate">
                                                            {item.name}
                                                        </h5>
                                                        <span className="text-xs text-gray-500">
                                                            {item.quantity} × ${item.price}
                                                        </span>
                                                    </div>

                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="text-xs text-red-500 hover:underline"
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="border-t px-4 py-3">
                                            <div className="flex justify-between text-sm font-medium mb-3">
                                                <span>Total</span>
                                                <span>${totalPrice}</span>
                                            </div>

                                            <div className="flex gap-2">
                                                <a
                                                    href="#"
                                                    className="flex-1 text-center 
                                                    text-sm !no-underline border rounded py-2 
                                                    hover:bg-black hover:text-white transition-colors"
                                                >
                                                    View cart
                                                </a>
                                                <a
                                                    href="#"
                                                    className="flex-1 text-center 
                                                    text-sm !no-underline
                                                    bg-black text-white rounded py-2
                                                    hover:!bg-white hover:!text-black transition-colors"
                                                >
                                                    Checkout
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="header__auth">
                                {/* <NavLink to="/login" className="text-decoration-none">
                                    <i className="fa fa-user"></i> Login</NavLink> */}
                                <div className="flex items-center gap-2 relative group">
                                    <img src="/images/shop-logo.jpeg" alt="user-logo"
                                        className="w-[20px] h-[20px] object-cover" />
                                    <span>Jino</span>
                                    <div className="absolute right-0 top-full bg-white border rounded-md shadow-lg hidden group-hover:block z-50">
                                        <div className="p-4 space-y-4 no-underline">
                                            <div className="flex items-center gap-2">
                                                <i className="fa fa-user"></i>
                                                <Link to="/profile">Profile</Link>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <i className="fa fa-sign-out"></i>
                                                <Link to="/login">Logout</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="humberger__open">
                    <i className="fa fa-bars"></i>
                </div>
            </div>
        </header>
    );
};
