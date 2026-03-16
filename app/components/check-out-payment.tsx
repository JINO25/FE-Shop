import React, { useState } from "react";

type Voucher = {
    id: number;
    title: string;
    desc: string;
    discount: number;
    expiry: string;
    disabled?: boolean;
};

const CheckoutPayment = ({
    selectedVoucher,
    discount,
    total,
    handleCheckOut
}: {
    selectedVoucher: Voucher | null;
    discount: number;
    total: number;
    handleCheckOut: (payment: string) => void
}) => {
    const [paymentMethod, setPaymentMethod] = useState<string>("cod");

    return (
        <div className="m-5 bg-[#F3F6FA] rounded-2xl shadow-sm">
            <div className="border-b px-6 py-4">
                <span className="font-bold text-xl text-black">
                    Phương thức thanh toán
                </span>
            </div>

            <div className="px-6 py-4 space-y-3">
                <label
                    className={`flex items-center justify-between border rounded-xl p-4 mr-4 cursor-pointer ${paymentMethod === "cod" ? "border-[#ee4d2d] bg-white" : "border-gray-300 bg-gray-50"
                        }`}
                >
                    <div className="flex items-center gap-3">
                        <input
                            type="radio"
                            name="payment"
                            value="cod"
                            checked={paymentMethod === "COD"}
                            onChange={() => setPaymentMethod("COD")}
                            className="h-5 w-5 text-[#ee4d2d] focus:ring-[#ee4d2d]"
                        />
                        <span className="font-medium text-gray-800">Thanh toán khi nhận hàng</span>
                    </div>
                </label>

                <label
                    className={`flex items-center justify-between border rounded-xl p-4 cursor-pointer ${paymentMethod === "stripe" ? "border-[#ee4d2d] bg-white" : "border-gray-300 bg-gray-50"
                        }`}
                >
                    <div className="flex items-center gap-3">
                        <input
                            type="radio"
                            name="payment"
                            value="stripe"
                            checked={paymentMethod === "STRIPE"}
                            onChange={() => setPaymentMethod("STRIPE")}
                            className="h-5 w-5 text-[#ee4d2d] focus:ring-[#ee4d2d]"
                        />
                        <span className="font-medium text-gray-800">Thanh toán qua Stripe</span>
                    </div>
                </label>
            </div>

            <div className="border-t px-6 py-4 space-y-2">
                {selectedVoucher && (
                    <div className="text-sm text-green-600">
                        Voucher áp dụng:{" "}
                        <span className="font-bold">{selectedVoucher.title}</span>
                    </div>
                )}
                <div className="text-sm text-red-500">
                    Giảm giá: -{discount.toLocaleString("vi-VN")} đ
                </div>
                <div className="font-bold text-lg text-[#ee4d2d]">
                    Thành tiền: {total.toLocaleString("vi-VN")} đ
                </div>
            </div>
            <div className="px-6 py-4 space-y-2">
                <button
                    className="py-2 px-5 bg-[#ee4d2d] text-white hover:opacity-80"
                    onClick={() => { handleCheckOut(paymentMethod) }}
                >Đặt hàng</button>
            </div>
        </div>
    );
};

export default CheckoutPayment;
