import { Link } from "react-router";

export const Product_Item = ({ product }: { product: any }) => {
    return (
        <div className="product__item hover:opacity-75 transition-opacity">
            <Link to={"/product/" + product.id} className="!no-underline block">
                <div
                    className="product__item__pic"
                    style={{
                        backgroundImage: `url(${product.thumbnail || ""})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />

                <div className="product__item__text flex justify-around">
                    <div>
                        <h6>{product.name}</h6>
                        <h5>{product.minPrice} $</h5>
                    </div>
                </div>
            </Link>
        </div>
    );
};
