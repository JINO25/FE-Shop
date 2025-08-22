import CheckOutProduct from "~/pages/check_out";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Payment" },
    ];
}

export default function CheckOut() {
    return <CheckOutProduct />;
}
