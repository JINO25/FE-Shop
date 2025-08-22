
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Product_Item } from '~/components/product-item';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { DropDown } from '~/components/drop-down';
import ReviewSection from '~/components/review';

export const ProductDetail = () => {
    const { id } = useParams();
    const descr = 'description';
    const review = 'review';
    const [activeTab, setActiveTab] = useState("description");
    const [selectedVariant, setSelectedVariant] = useState<any>(null);

    const variants = [
        { id: 1, option: 'M', stock: 0 },
        { id: 2, option: 'L', stock: 10 },
        { id: 3, option: 'XL', stock: 5 },
    ];

    const reviews = [
        {
            id: 1,
            user: "Nguyễn Văn A",
            avatar: "/images/product.jpg",
            date: "2025-08-10 14:30",
            variant: "Áo xám",
            size: "M",
            rating: 3.5,
            comment: "Sản phẩm rất đẹp, chất lượng vải tốt, giao hàng nhanh!"
        },
        {
            id: 2,
            user: "Trần Thị B",
            avatar: "/images/product.jpg",
            date: "2025-08-11 09:20",
            variant: "Áo đen",
            size: "L",
            rating: 4,
            comment: "Áo mặc thoải mái, nhưng form hơi rộng so với mình."
        },
        {
            id: 3,
            user: "Lê Văn C",
            avatar: "/images/product.jpg",
            date: "2025-08-12 18:45",
            variant: "Áo trắng",
            size: "S",
            rating: 3,
            comment: "Chất lượng ổn, nhưng giao hàng hơi chậm."
        },
        {
            id: 4,
            user: "Phạm Thị D",
            avatar: "/images/product.jpg",
            date: "2025-08-13 11:10",
            variant: "Áo xanh",
            size: "XL",
            rating: 5,
            comment: "Rất hài lòng, chắc chắn sẽ mua lại lần sau!"
        }
    ];

    const [avgTotalStarsOfReviews, setAvgTotalStarsOfReviews] = useState(0);

    useEffect(() => {
        if (reviews.length > 0) {
            const total = reviews.reduce((sum, s) => sum + s.rating, 0);
            setAvgTotalStarsOfReviews(total / reviews.length);
        }
    }, [reviews]);

    const renderStars = (avgStars: number) => {
        const stars = [];
        const fullStars = Math.floor(avgStars);
        const halfStars = avgStars - fullStars >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<i key={`star-full-${i}`} className="fa fa-star text-yellow-400" />);
        }

        if (halfStars) {
            stars.push(<i key="star-half" className="fa fa-star-half text-yellow-400" />);
        }

        return stars;
    }

    const [quantity, setQuantity] = useState(1);
    const [productsRelative, setProductsRelative] = useState(["1", "2", "3"]);
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
                                {renderStars(avgTotalStarsOfReviews)}
                                <span>({avgTotalStarsOfReviews} {reviews.length} reviews)</span>
                            </div>
                            <div className="product__details__price">$50.00</div>
                            <div className="product__details__options">
                                <DropDown
                                    variants={variants}
                                    onSelect={(v) => setSelectedVariant(v)}
                                />
                            </div>

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
                                <li><b>Availability</b> <span>
                                    {selectedVariant
                                        ? selectedVariant.stock > 0
                                            ? `In Stock (${selectedVariant.stock})`
                                            : "Out of Stock"
                                        : "Select option"}
                                </span></li>
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
                                        Review <span>({reviews.length})</span>
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
                                            <h6 className="text-lg font-semibold mb-4">Product Reviews</h6>

                                            <ReviewSection
                                                reviews={reviews}
                                            />
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
                        {productsRelative.map((item, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <Product_Item />
                            </div>
                        ))}
                    </div>
                </div>
            </section></>
    )
}
