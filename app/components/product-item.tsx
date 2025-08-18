import React from 'react'
import { Link, NavLink } from 'react-router'

export const Product_Item = () => {
    return (
        <div className="product__item">
            <div
                className="product__item__pic"
                style={{ backgroundImage: "url(/images/product.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
            >
                <ul className="product__item__pic__hover">
                    <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                </ul>
            </div>
            <div className="product__item__text flex justify-around">
                <div>
                    <h6><Link className="!no-underline" to="/product/1">Crab Pool Security</Link></h6>
                    <h5>$30.00</h5>
                </div>
                <div className=''>
                    <button
                        className="!rounded-full bg-green-500 text-white px-4 py-2 shadow-md hover:bg-green-600  transition-colors duration-300 font-medium">
                        Buy
                    </button>

                </div>
            </div>
        </div>
    )
}
