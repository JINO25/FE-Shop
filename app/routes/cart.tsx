import { Cart } from "~/pages/cart";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Cart" },
  ];
}

export default function Home() {
  return <Cart />;
}
