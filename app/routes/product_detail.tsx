import { Product_Item } from "~/components/product-item";
import type { Route } from "./+types/home";
import { ProductDetail } from "~/pages/productDetail";
import { useParams } from "react-router";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Product" },
    ];
}

export default function Product_Detail() {
    return <ProductDetail />;
}
