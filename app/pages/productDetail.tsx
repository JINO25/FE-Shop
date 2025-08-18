
import React, { useState } from 'react'
import { useParams } from 'react-router'
import { Product_Item } from '~/components/product-item';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export const ProductDetail = () => {
    const { id } = useParams();
    const descr = 'description';
    const review = 'review';
    const [activeTab, setActiveTab] = useState("description");
    const [quantity, setQuantity] = useState(1);
    const [products, setProducts] = useState(["1", "2", "3"]);
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    const images = [
        "/images/product.jpg",
        "/images/product.jpg",
        "/images/product.jpg",
        "/images/product.jpg",
    ];

    return (
        <><section className="product-details spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="product__details__pic">
                            {/* Ảnh lớn */}
                            <Swiper
                                modules={[Navigation, Thumbs]}
                                navigation
                                thumbs={{ swiper: thumbsSwiper }}
                                className="product__details__pic__item"
                            >
                                {images.map((src, i) => (
                                    <SwiperSlide key={i}>
                                        <img
                                            className="product__details__pic__item--large w-full h-[400px] object-cover rounded-xl"
                                            src={src}
                                            alt={`product-${i}`}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            {/* Slider nhỏ bên dưới */}
                            <Swiper
                                modules={[Thumbs]}
                                onSwiper={setThumbsSwiper}
                                slidesPerView={4}
                                spaceBetween={10}
                                watchSlidesProgress
                                className="product__details__pic__slider mt-4"
                            >
                                {images.map((src, i) => (
                                    <SwiperSlide key={i}>
                                        <img
                                            src={src}
                                            alt={`thumb-${i}`}
                                            className="cursor-pointer w-full h-[80px] object-cover rounded-md border hover:border-red-500"
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="product__details__text">
                            <h3>Vetgetable’s Package</h3>
                            <div className="product__details__rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                                <span>(18 reviews)</span>
                            </div>
                            <div className="product__details__price">$50.00</div>

                            <div className="product__details__quantity">
                                <div className="quantity">
                                    <div className="pro-qty">
                                        <input type="text" placeholder='1' value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
                                    </div>
                                </div>
                            </div>
                            <button className="primary-btn">Buy</button>
                            <div className='w-[50%]'>
                                <button className="w-[85%] bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg shadow">
                                    <i className="fa fa-shopping-cart"></i>
                                </button>
                            </div>
                            <ul>
                                <li><b>Availability</b> <span>In Stock</span></li>
                                <li><b>Shipping</b> <span>01 day shipping. <samp>Free pickup today</samp></span></li>
                                <li><b>Weight</b> <span>0.5 kg</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="product__details__tab">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <button
                                        onClick={() => setActiveTab("description")}
                                        className={`nav-link ${activeTab === descr ? "active" : ""}`}
                                    >
                                        Description
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        onClick={() => setActiveTab("review")}
                                        className={`nav-link ${activeTab === review ? "active" : ""}`}
                                    >
                                        Review <span>(1)</span>
                                    </button>
                                </li>
                            </ul>

                            <div className="tab-content">
                                {activeTab === descr && (
                                    <div className="tab-pane active" role="tabpanel">
                                        <div className="product__details__tab__desc">
                                            <h6>Products Information</h6>
                                            <p>Information.</p>
                                        </div>
                                    </div>
                                )}

                                {activeTab === review && (
                                    <div className="tab-pane active" role="tabpanel">
                                        <div className="product__details__tab__desc">
                                            <h6>Product Reviews</h6>
                                            <p>Review content here.</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
            <section className="related-product">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title related__product__title">
                                <h2>Related Product</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {products.map((item, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <Product_Item />
                            </div>
                        ))}
                    </div>
                </div>
            </section></>
    )
}
