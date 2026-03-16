
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { stripeSuccess } from "~/services/orderService";

export default function PaymentSuccess() {

    const navigate = useNavigate();
    const [params] = useSearchParams();

    useEffect(() => {
        const sessionId = params.get("session_id");

        if (sessionId) {
            stripeSuccess(sessionId)
                .then(() => {
                    console.log("Order created");
                })
                .catch(console.error);
        }
    }, []);

    const handleReturn = () => {
        const productId = localStorage.getItem("lastProductId");

        // if (productId) {
        //     navigate(`/product/${productId}`);
        // } else {
        //     navigate("/");
        // }
        navigate('/')
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">

            <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full text-center">

                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-green-100">
                        <svg
                            className="w-10 h-10 text-green-600"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </div>

                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    Thanh toán thành công 🎉
                </h1>

                <p className="text-gray-500 mb-6">
                    Cảm ơn bạn đã mua hàng. Đơn hàng của bạn đã được xác nhận.
                </p>

                <button
                    onClick={handleReturn}
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-200"
                >
                    Quay lại sản phẩm
                </button>

            </div>

        </div>
    );
}