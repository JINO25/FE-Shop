import React, { useEffect, useState } from "react";
import { Product_Item } from "~/components/product-item";
import { Sidebar } from "~/components/sidebar";
// import "../style.css"

export function HomeShop() {
    const [products, setProducts] = useState(["1", "2", "3"]);

    // useEffect(() => {
    //     // ví dụ fetch từ API giả
    //     fetch("https://fakestoreapi.com/products")
    //         .then((res) => res.json())
    //         .then((data) => setProducts(data)) // data có thể là 50 sản phẩm
    //         .catch((err) => console.error(err));
    // }, []);

    return (
        <><section className="hero hero-normal">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                    </div>
                    <div className="col-lg-9">
                        <div className="hero__search">
                            <div className="hero__search__form">
                                <form action="#">
                                    <input type="text" placeholder="What do yo u need?" />
                                    <button type="submit" className="site-btn">SEARCH</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section><div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-5">
                        <Sidebar />
                    </div>
                    <div className="col-lg-9 col-md-7">
                        <div className="filter__item">
                            <div className="row">
                                <div className="col-lg-4 col-md-5">
                                    <div className="filter__sort">
                                        <span>Sort By</span>
                                        <select>
                                            <option value="0">Default</option>
                                            <option value="0">Default</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="filter__found">
                                        <h6><span>16</span> Products found</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">

                            {products.map((item, index) => (
                                <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                                    <Product_Item />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div></>

    );
}
