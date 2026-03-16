import { useNavigate } from "react-router";

export default function PaymentFailure() {

    const handleReturn = () => {
        const productId = localStorage.getItem("lastProductId");

        if (productId) {
            window.location.href = `/product/${productId}`;
        } else {
            window.location.href = "/";
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">

            <div className="bg-white shadow-xl rounded-2xl p-10 max-w-md w-full text-center">

                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-red-100">
                        <svg
                            className="w-10 h-10 text-red-600"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>

                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                    Thanh toán thất bại ❌
                </h1>

                <p className="text-gray-500 mb-6">
                    Thanh toán đã bị hủy hoặc xảy ra lỗi. Vui lòng thử lại.
                </p>

                <button
                    onClick={handleReturn}
                    className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-200"
                >
                    Quay lại sản phẩm
                </button>

            </div>

        </div>
    );
}