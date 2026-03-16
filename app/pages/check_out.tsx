
import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router';
import AddressSelector from '~/components/address';
import CheckoutPayment from '~/components/check-out-payment';
import VoucherSelector from '~/components/vourcher-item'
import { getUserAddresses } from '~/services/addressService';
import { createOrder, createStripeCheckout } from '~/services/orderService';

const CheckOutProduct = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(window.location.search);
    // items có thể từ Buy Now hoặc Cart
    const items = location.state?.items || [];

    const [selectedVoucher, setSelectedVoucher] = useState<any | null>(null);
    const [loading, setLoading] = useState(false);

    const [addresses, setAddresses] = useState<any[]>([]);
    const [selectedAddress, setSelectedAddress] = useState<any | null>(null);

    const discount = selectedVoucher ? selectedVoucher.discount : 0;

    // tính tổng tiền sản phẩm
    const productTotal = items.reduce(
        (sum: number, item: any) => sum + item.variant.price * item.quantity,
        0
    );

    const total = productTotal - discount;

    const vouchers = [
        {
            id: 1,
            title: "FREE SHIP",
            desc: "Giảm tối đa ₫20k Đơn tối thiểu ₫30k",
            discount: 30,
            expiry: "HSD: 31.08.2025",
        },
        {
            id: 2,
            title: "FREE SHIP",
            desc: "Giảm tối đa ₫30k Đơn tối thiểu ₫45k",
            expiry: "HSD: 31.08.2025",
            discount: 30,
            disabled: true,
        },
    ];

    const handleCheckout = async (paymentMethod: string) => {

        if (!selectedAddress) {
            alert("Vui lòng chọn địa chỉ");
            return;
        }

        try {

            setLoading(true);

            const payload = items.map((item: any) => ({
                addressId: selectedAddress.id,
                productVariantId: item.variant.id,
                quantity: item.quantity
            }));

            if (paymentMethod === "COD") {

                await createOrder(payload);

                alert("Đặt hàng thành công!");
                navigate("/");

            }

            if (paymentMethod === "STRIPE") {

                const res = await createStripeCheckout(payload);

                const checkoutUrl = res.checkoutUrl;

                if (checkoutUrl) {
                    window.location.href = checkoutUrl; // chuyển sang Stripe                    
                }
            }
        } catch (err) {

            console.error(err);
            alert("Có lỗi khi đặt hàng");

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {

        getUserAddresses()
            .then((data) => {

                setAddresses(data);

                if (data.length > 0) {
                    setSelectedAddress(data[0]);
                }

            })
            .catch((err) => console.error(err));

    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-40">
                <div className="animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
            </div>
        );
    }

    return (

        <div className='container'>

            <AddressSelector
                addresses={addresses}
                onSelectAddress={setSelectedAddress}
            />

            {/* Product List */}

            <div className="m-5 bg-[#F3F6FA] rounded-2xl shadow-sm">

                <div className="p-4">

                    <div className="grid grid-cols-5 items-center text-[rgba(0,0,0,0.54)] text-sm mb-10">
                        <div className="font-bold text-xl text-black">Sản Phẩm</div>
                        <div>Loại</div>
                        <div>Đơn giá</div>
                        <div>Số lượng</div>
                        <div>Thành tiền</div>
                    </div>

                    {items.map((item: any, index: number) => (

                        <div
                            key={index}
                            className="grid grid-cols-5 items-center text-sm mb-4"
                        >

                            <div className="flex items-center gap-2">
                                <img
                                    src={item.product?.images?.[0] ?? item.product?.image}
                                    width={50}
                                />
                                <span>{item.product?.name}</span>
                            </div>

                            <div>
                                {item.variant?.option
                                    ? `${item.variant.option} ${item.variant.color ?? ""}`
                                    : item.variant?.type}
                            </div>

                            <div>
                                {item.variant?.price.toLocaleString("vi-VN")} đ
                            </div>

                            <div>{item.quantity}</div>

                            <div>
                                {(item.variant.price * item.quantity)
                                    .toLocaleString("vi-VN")} đ
                            </div>

                        </div>

                    ))}

                </div>

                <div className='p-4 flex justify-end border-dashed border-gray-400 border-t-[1px] mt-4 bg-[#d3d3d3]'>

                    <div>

                        <span className='text-[rgba(0,0,0,0.54)]'>
                            Tổng tiền ({items.length} sản phẩm):
                        </span>

                        <span className='px-3 text-[#ee4d2d] font-bold'>
                            {productTotal.toLocaleString("vi-VN")} đ
                        </span>

                    </div>

                </div>

            </div>

            {/* Voucher */}

            <VoucherSelector
                vouchers={vouchers}
                onSelectVoucher={setSelectedVoucher}
            />

            {/* Payment */}

            <CheckoutPayment
                selectedVoucher={selectedVoucher}
                discount={discount}
                total={total}
                handleCheckOut={handleCheckout}
            />

        </div>

    );
};

export default CheckOutProduct;