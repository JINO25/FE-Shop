import { Login } from "~/pages/login";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Login" },
        { name: "description", content: "Login" },
    ];
}

export default function Home() {
    return <Login />;
}
