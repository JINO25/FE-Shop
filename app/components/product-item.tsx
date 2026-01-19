import { Link } from "react-router";

export const Product_Item = () => {
    return (
        <div className="product__item hover:opacity-75 transition-opacity">
            <Link
                to="/product/1"
                className="!no-underline block"
            >
                <div
                    className="product__item__pic"
                    style={{
                        backgroundImage: "url(/images/product.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />

                <div className="product__item__text flex justify-around">
                    <div>
                        <h6>Crab Pool Security</h6>
                        <h5>$30.00</h5>
                    </div>
                </div>
            </Link>
        </div>
    );
};
