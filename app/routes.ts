import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("routes/layout.tsx", [
        index("routes/home.tsx"),
        route("/product/:id", "routes/product_detail.tsx"),
        route("/checkout", "routes/check-out.tsx"),
        route("/cart", "routes/cart.tsx"),
        route("/profile", "routes/profile.tsx"),
        route("/order", "routes/order.tsx"),
        route("/payment-success", "routes/payment-success.tsx"),
        route("/payment-failure", "routes/payment-failure.tsx")
    ]),
    route("login", "routes/login.tsx"),
    route("/.well-known/*", "routes/empty.tsx"),
] satisfies RouteConfig;
