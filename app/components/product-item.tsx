import React from 'react'
import { Link, NavLink } from 'react-router'

export const Product_Item = () => {
    return (
        <div className="product__item hover:opacity-75 transition-opacity">
            <Link className="!no-underline" to="/product/1">
                <div
                    className="product__item__pic"
                    style={{ backgroundImage: "url(/images/product.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
                >
                    {/* <ul className="product__item__pic__hover">
                        <li><a href="/product/1"><i className="fa fa-shopping-cart"></i></a></li>
                    </ul> */}
                </div>
                <div className="product__item__text flex justify-around">
                    <div>
                        <h6><Link className="!no-underline" to="/product/1">Crab Pool Security</Link></h6>
                        <h5>$30.00</h5>
                    </div>
                </div>
            </Link>
        </div>
    )
}
