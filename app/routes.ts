import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("routes/layout.tsx", [
        index("routes/home.tsx"),
        route("/product/:id", "routes/product_detail.tsx"),
        route("/checkout", "routes/check-out.tsx"),
        route("/cart", "routes/cart.tsx")
    ]),
    route("login", "routes/login.tsx")
] satisfies RouteConfig;
