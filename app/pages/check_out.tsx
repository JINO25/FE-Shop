
import React, { useEffect, useState } from 'react'
import AddressSelector from '~/components/address';
import CheckoutPayment from '~/components/check-out-payment';
import VoucherSelector from '~/components/vourcher-item'


type Voucher = {
    id: number;
    title: string;
    desc: string;
    expiry: string;
    discount: number;
    disabled?: boolean;
};

type Address = {
    id: number;
    name: string;
    phone: string;
    street: string;
    district: string;
    city: string;
};

const CheckOutProduct = () => {
    const [selectedVoucher, setSelectedVoucher] = useState<Voucher | null>(null);
    const [loading, setLoading] = useState(false);
    const productPrice = 3000000;
    const discount = selectedVoucher ? selectedVoucher.discount : 0;
    const total = productPrice - discount;

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

    const addresses = [
        {
            id: 1,
            name: "Cao Tien Dat",
            phone: "0834023573",
            street: "Khóm 5 huyện Trà Cú",
            district: "Thị trấn Trà Cú",
            city: "Tỉnh Trà Vinh"
        }, {
            id: 2,
            name: "Cao Dat",
            phone: "0834023573",
            street: "Nguyễn Văn Cừ",
            district: "Ninh Kiều",
            city: "Cần Thơ",
        }]

    const [address, setAddresses] = useState<Address | null>(null);

    const handleCheckout = async (paymentMethod: string) => {
        try {
            setLoading(true); // hiệu ứng loading khi fetch API
            // const res = await fetch("/api/orders", {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify({
            //         address: addresses,
            //         voucher: selectedVoucher,
            //         paymentMethod,
            //         total,
            //     }),
            // });
            // const data = await res.json();
            console.log(address, selectedVoucher, total, paymentMethod);

            alert("Đặt hàng thành công!");
        } catch (err) {
            alert("Có lỗi khi đặt hàng");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-40">
                <div className="animate-spin rounded-full h-8 w-8 border-4 border-blue-500 border-t-transparent"></div>
            </div>
        );
    }

    return (
        <div className='container'>
            <AddressSelector addresses={addresses} onSelectAddress={setAddresses} />

            <div className="m-5 bg-[#F3F6FA] rounded-2xl shadow-sm">
                <div className="p-4">
                    <div className="grid grid-cols-5 items-center text-[rgba(0,0,0,0.54)] text-sm mb-10">
                        <div className="font-bold text-xl text-black">Sản Phẩm</div>
                        <div></div>
                        <div>Đơn giá</div>
                        <div>Số lượng</div>
                        <div>Thành tiền</div>
                    </div>

                    <div className="grid grid-cols-5 items-center text-sm">
                        <div className="flex items-center gap-2">
                            <img src={"/images/product.jpg"} width={50} />
                            <span>Giày Nike</span>
                        </div>
                        <div>Màu tùm lum</div>
                        <div>{(3000000).toLocaleString("vi-VN")} đ</div>
                        <div>1</div>
                        <div>{(3000000).toLocaleString("vi-VN")} đ</div>
                    </div>
                </div>
                <div className='p-4 flex justify-end border-dashed border-gray-400 border-t-[1px] mt-4 bg-[#d3d3d3]'>
                    <div>
                        <span className='text-[rgba(0,0,0,0.54)]'>Tổng tiền (1 sản phẩm):</span>
                        <span className='px-3 text-[#ee4d2d] font-bold'>{(3000000).toLocaleString("vi-VN")} đ</span>
                    </div>
                </div>
            </div>

            <VoucherSelector vouchers={vouchers} onSelectVoucher={setSelectedVoucher} />


            <CheckoutPayment selectedVoucher={selectedVoucher} discount={discount} total={total} handleCheckOut={handleCheckout} />
        </div>
    )
}

export default CheckOutProduct