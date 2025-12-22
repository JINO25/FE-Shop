import { useState } from "react";
import AddressSelector from "~/components/address";
import { Link } from "react-router";

export default function Profile() {
    const [activeTab, setActiveTab] = useState("profile");

    const addresses = [
        {
            id: 1,
            name: "Jino",
            phone: "0123456789",
            street: "123 Main St",
            district: "District 1",
            city: "Ho Chi Minh City",
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-6">
                {/* Sidebar */}
                <div className="w-full md:w-1/4">
                    <div className="flex items-center gap-4 mb-6">
                        <img
                            src="/images/shop-logo.jpeg"
                            alt="avatar"
                            className="w-12 h-12 rounded-full object-cover border"
                        />
                        <div>
                            <div className="font-bold">Jino</div>
                            <i className="fa fa-pencil"></i> Sửa hồ sơ
                        </div>
                    </div>

                    <div className="space-y-1">
                        <button
                            onClick={() => setActiveTab("profile")}
                            className={`w-full text-left px-4 py-2 rounded ${activeTab === "profile" ? "text-orange-500 font-medium" : "text-gray-700 hover:text-orange-500"
                                }`}
                        >
                            <i className="fa fa-user w-6 text-center text-blue-800"></i> Hồ sơ
                        </button>
                        <button
                            onClick={() => setActiveTab("address")}
                            className={`w-full text-left px-4 py-2 rounded ${activeTab === "address" ? "text-orange-500 font-medium" : "text-gray-700 hover:text-orange-500"
                                }`}
                        >
                            <i className="fa fa-map-marker w-6 text-center text-orange-600"></i> Địa chỉ
                        </button>
                        <button
                            onClick={() => setActiveTab("password")}
                            className={`w-full text-left px-4 py-2 rounded ${activeTab === "password" ? "text-orange-500 font-medium" : "text-gray-700 hover:text-orange-500"
                                }`}
                        >
                            <i className="fa fa-lock w-6 text-center text-gray-600"></i> Đổi mật khẩu
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-3/4 bg-white shadow-sm rounded-lg p-6 border">
                    {activeTab === "profile" && <ProfileTab />}
                    {activeTab === "address" && (
                        <div>
                            <h2 className="text-xl font-medium mb-4">Địa chỉ của tôi</h2>
                            <AddressSelector
                                addresses={addresses}
                                onSelectAddress={(addr) => console.log(addr)}
                            />
                        </div>
                    )}
                    {activeTab === "password" && <PasswordTab />}
                </div>
            </div>
        </div>
    );
}

function ProfileTab() {
    return (
        <div>
            <div className="border-b pb-4 mb-6">
                <h2 className="text-xl font-medium">Hồ sơ của tôi</h2>
                <p className="text-gray-500 text-sm mt-1">Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
            </div>

            <div className="flex flex-col-reverse md:flex-row gap-8">
                <form className="flex-1 space-y-6">
                    <div className="flex items-center">
                        <label className="w-1/3 text-gray-500 text-right pr-6">Tên</label>
                        <input type="text" defaultValue="Jino" className="flex-1 border rounded px-3 py-2 focus:outline-none focus:border-orange-500" />
                    </div>
                    <div className="flex items-center">
                        <label className="w-1/3 text-gray-500 text-right pr-6">Email</label>
                        <div className="flex-1">jino@example.com</div>
                    </div>
                    <div className="flex items-center">
                        <label className="w-1/3 text-gray-500 text-right pr-6">Số điện thoại</label>
                        <div className="flex-1">********89 <a href="#" className="text-blue-500 underline ml-2">Thay đổi</a></div>
                    </div>
                    <div className="flex items-center">
                        <label className="w-1/3 text-gray-500 text-right pr-6">Giới tính</label>
                        <div className="flex-1 flex gap-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="gender" defaultChecked /> Nam
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="gender" /> Nữ
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="radio" name="gender" /> Khác
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button type="button" className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">Lưu</button>
                    </div>
                </form>

                <div className="w-full md:w-1/3 flex flex-col items-center border-l pl-8">
                    <div className="w-28 h-28 rounded-full border overflow-hidden mb-4">
                        <img src="/images/shop-logo.jpeg" alt="avatar" className="w-full h-full object-cover" />
                    </div>
                    <button className="border border-gray-300 
                    px-4 py-2 rounded text-gray-600 hover:bg-gray-50 text-sm mb-3">
                        <input type="file" name="avatar" className="w-28 text-wrap" />
                    </button>
                    <div className="text-gray-400 text-xs text-center">
                        <p>Dụng lượng file tối đa 1 MB</p>
                        <p>Định dạng:.JPEG, .PNG</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function PasswordTab() {
    return (
        <div>
            <div className="border-b pb-4 mb-6">
                <h2 className="text-xl font-medium">Đổi mật khẩu</h2>
                <p className="text-gray-500 text-sm mt-1">Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác</p>
            </div>

            <form className="max-w-xl mx-auto space-y-6">
                <div className="flex items-center">
                    <label className="w-1/3 text-gray-500 text-right pr-6">Mật khẩu hiện tại</label>
                    <input type="password" className="flex-1 border rounded px-3 py-2 focus:outline-none focus:border-orange-500" />
                </div>
                <div className="flex items-center">
                    <label className="w-1/3 text-gray-500 text-right pr-6">Mật khẩu mới</label>
                    <input type="password" className="flex-1 border rounded px-3 py-2 focus:outline-none focus:border-orange-500" />
                </div>
                <div className="flex items-center">
                    <label className="w-1/3 text-gray-500 text-right pr-6">Xác nhận mật khẩu</label>
                    <input type="password" className="flex-1 border rounded px-3 py-2 focus:outline-none focus:border-orange-500" />
                </div>
                <div className="flex justify-end">
                    <button type="button" className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">Xác nhận</button>
                </div>
            </form>
        </div>
    );
}
