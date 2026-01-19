import { useState } from "react";

export const Order = () => {
    const [activeTab, setActiveTab] = useState("don-hang");
    const orders = [
        {
            id: 123,
            productName: "Áo thun nam oversize form rộng cotton cao cấp",
            orderDate: "2022-01-01",
            totalPrice: "1.000.000đ",
            quantity: 1,
            status: "Đã giao",
            image: "images/product.jpg",
        },
        {
            id: 124,
            productName: "Giày sneaker trắng basic phong cách Hàn Quốc",
            orderDate: "2022-02-10",
            totalPrice: "2.500.000đ",
            quantity: 2,
            status: "Đang giao",
            image: "images/product.jpg",
        },
        {
            id: 125,
            productName:
                "Tai nghe Bluetooth không dây chống ồn chủ động pin 30 giờ sử dụng liên tục",
            orderDate: "2022-03-22",
            totalPrice: "3.200.000đ",
            quantity: 1,
            status: "Đã hủy",
            image: "images/product.jpg",
        },
    ];


    return (
        <div className="container mx-auto my-6">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/4">
                    <div className="rounded-lg border bg-white p-4">
                        <div className="flex flex-col gap-2">
                            <button
                                onClick={() => setActiveTab("don-hang")}
                                className={`w-full rounded-md px-4 py-2 text-left text-sm font-medium transition
          ${activeTab === "don-hang"
                                        ? "bg-blue-50 text-blue-600"
                                        : "text-gray-700 hover:bg-gray-100"
                                    }`}
                            >
                                Đơn hàng
                            </button>

                            <button
                                onClick={() => setActiveTab("lich-su-don-hang")}
                                className={`w-full rounded-md px-4 py-2 text-left text-sm font-medium transition
          ${activeTab === "lich-su-don-hang"
                                        ? "bg-blue-50 text-blue-600"
                                        : "text-gray-700 hover:bg-gray-100"
                                    }`}
                            >
                                Lịch sử đơn hàng
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-3/4">
                    {activeTab === "don-hang" &&
                        <div>
                            <h2 className="text-xl font-medium mb-4">Đơn hàng</h2>
                            <div className="mb-3 rounded-lg border bg-gray-50 p-3">
                                <div className="flex items-center gap-4">
                                    <label className="text-sm font-medium text-gray-700">
                                        Trạng thái
                                    </label>

                                    <select
                                        className="w-44 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm
                   focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    >
                                        <option value="">Tất cả</option>
                                        <option value="shipping">Đang giao</option>
                                        <option value="delivered">Đã giao</option>
                                        <option value="cancelled">Đã hủy</option>
                                    </select>
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-lg border">
                                <div className="grid grid-cols-[80px_3fr_130px_130px_80px_100px]
                    bg-gray-100 px-4 py-3 text-sm font-medium text-gray-600">
                                    <span>Id</span>
                                    <span>Tên đơn hàng</span>
                                    <span>Ngày đặt</span>
                                    <span>Tổng tiền</span>
                                    <span>Số lượng</span>
                                    <span>Trạng thái</span>
                                </div>

                                {
                                    orders.map((o) => (
                                        <div className="grid grid-cols-[80px_3fr_130px_130px_80px_100px]
               items-center px-4 py-3 text-sm border-t hover:bg-gray-50 transition">
                                            <span>{o.id}</span>
                                            <div className="flex items-center gap-2 min-w-0">
                                                <img
                                                    src={o.image}
                                                    alt="item"
                                                    className="w-12 h-12 object-cover rounded flex-shrink-0"
                                                />

                                                <span
                                                    className="truncate max-w-[180px]"
                                                    title={o.productName}
                                                >
                                                    {o.productName}
                                                </span>
                                            </div>

                                            <span>{o.orderDate}</span>
                                            <span>{o.totalPrice}</span>
                                            <span>{o.quantity}</span>

                                            <span className="text-green-600 font-medium">{o.status}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    }
                    {activeTab === "lich-su-don-hang" &&
                        <div>
                            <h2 className="text-xl font-semibold mb-4">Lịch sử đơn hàng</h2>
                            <div className="flex flex-wrap items-end gap-4 rounded-lg border bg-gray-50 p-4 mb-3">
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm text-gray-600">Từ ngày</label>
                                    <input
                                        type="date"
                                        className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="flex flex-col gap-1">
                                    <label className="text-sm text-gray-600">Đến ngày</label>
                                    <input
                                        type="date"
                                        className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="flex gap-2 pb-[2px]">
                                    <button className="rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition">
                                        Clear
                                    </button>

                                    <button className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700 transition">
                                        Apply
                                    </button>
                                </div>
                            </div>
                            <div className="overflow-hidden rounded-lg border">
                                <div className="grid grid-cols-[80px_3fr_130px_130px_80px_100px_100px]
                    bg-gray-100 px-4 py-3 text-sm font-medium text-gray-600">
                                    <span>Id</span>
                                    <span>Tên đơn hàng</span>
                                    <span>Ngày đặt</span>
                                    <span>Tổng tiền</span>
                                    <span>Số lượng</span>
                                    <span className="text-center">Mua lại</span>
                                    <span className="text-center">Đánh giá</span>
                                </div>

                                {orders.map((order) => (
                                    <div
                                        key={order.id}
                                        className="grid grid-cols-[80px_3fr_130px_130px_80px_100px_100px]
               items-center px-4 py-3 text-sm border-t hover:bg-gray-50 transition"
                                    >
                                        <span className="text-gray-700">#{order.id}</span>

                                        <div className="flex items-center gap-3 min-w-0">
                                            <img
                                                src={order.image}
                                                alt={order.productName}
                                                className="w-12 h-12 object-cover rounded-md border flex-shrink-0"
                                            />

                                            <span
                                                className="truncate font-medium text-gray-800"
                                                title={order.productName}
                                            >
                                                {order.productName}
                                            </span>
                                        </div>

                                        <span className="text-gray-600">{order.orderDate}</span>
                                        <span className="font-semibold text-gray-800">{order.totalPrice}</span>
                                        <span>{order.quantity}</span>

                                        <button className="mx-auto rounded-md bg-blue-50 px-3 py-1 text-blue-600 hover:bg-blue-100 transition">
                                            Mua lại
                                        </button>

                                        <button className="mx-auto rounded-md bg-yellow-50 px-3 py-1 text-yellow-600 hover:bg-yellow-100 transition">
                                            Đánh giá
                                        </button>
                                    </div>
                                ))}

                            </div>
                        </div>


                    }
                </div>
            </div>
        </div>
    )
}