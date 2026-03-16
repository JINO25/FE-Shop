import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";

type Address = {
    id: number;
    phone: string;
    street: string;
    district: string;
    city: string;
    country: string
};

function AddressItem({
    address,
    selected,
    onSelect,
    index
}: {
    address: Address;
    selected: boolean;
    onSelect: () => void;
    index: number
}) {
    return (
        <div
            className={`flex justify-between items-start border rounded-md p-3 mb-3 ${selected ? "border-orange-500" : "hover:border-orange-400 cursor-pointer"
                }`}
            onClick={onSelect}
        >
            <div className="text-sm">
                <div className="font-bold">Địa chỉ {index + 1}</div>
                <div className="text-gray-700">{address.phone}</div>
                <div className="text-gray-600">
                    {address.street}, {address.district}, {address.city}, {address.country}
                </div>
            </div>
            <input type="radio" checked={selected} readOnly />
        </div>
    );
}

export default function AddressSelector({
    addresses,
    onSelectAddress,
}: {
    addresses: Address[];
    onSelectAddress: (address: Address | null) => void;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [address, setAddress] = useState<Address | null>(null);

    // state thêm địa chỉ
    const [isAdding, setIsAdding] = useState(false);
    const [newAddress, setNewAddress] = useState<Omit<Address, "id">>({
        phone: "",
        street: "",
        district: "",
        city: "",
        country: ""
    });

    useEffect(() => {
        if (addresses.length > 0) {
            setAddress(addresses[0]);
            setSelectedId(addresses[0].id);
            onSelectAddress(addresses[0]);
        }
    }, [addresses]);


    const handleAddAddress = () => {
        const newAddr: Address = {
            id: Date.now(),
            ...newAddress
        };

        onSelectAddress(newAddr);

        setNewAddress({
            phone: "",
            street: "",
            district: "",
            city: "",
            country: ""
        });

        setIsAdding(false);
    };

    return (
        <div className="m-5 bg-white rounded-xl shadow-sm border">

            {/* top stripe */}
            <div className="w-full h-[3px] bg-[repeating-linear-gradient(45deg,#6fa6d6,#6fa6d6_33px,transparent_0,transparent_41px,#f18d9b_0,#f18d9b_74px,transparent_0,transparent_82px)] bg-[length:116px_3px] bg-[-30px_0]" />

            {/* header */}
            <div className="flex justify-between items-center p-4 border-b">
                <div className="flex items-center text-red-500 font-semibold">
                    <i className="fa fa-map-marker pr-2 text-lg" />
                    Địa chỉ nhận hàng
                </div>

                <button
                    onClick={() => setIsOpen(true)}
                    className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
                >
                    Thay đổi
                </button>
            </div>

            {/* selected address */}
            {address && (
                <div className="flex items-start p-4 text-sm">
                    <div className="flex flex-col">
                        <span className="font-semibold">
                            {address.phone}
                        </span>

                        <span className="text-gray-600 mt-1">
                            {address.street}, {address.district}, {address.city}
                        </span>
                    </div>
                </div>
            )}

            {/* dialog */}
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">

                <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />

                <div className="fixed inset-0 flex items-center justify-center p-4">

                    <DialogPanel className="bg-white rounded-xl shadow-xl w-full max-w-lg max-h-[650px] overflow-y-auto">

                        {/* title */}
                        <div className="p-5 border-b font-semibold text-lg">
                            Chọn địa chỉ
                        </div>

                        {/* address list */}
                        <div className="p-5 space-y-3">

                            {addresses.map((a, index) => (
                                <AddressItem
                                    key={a.id}
                                    address={a}
                                    selected={selectedId === a.id}
                                    onSelect={() => setSelectedId(a.id)}
                                    index={index}
                                />
                            ))}

                            {/* add new address */}
                            {!isAdding ? (
                                <button
                                    className="w-full border-2 border-dashed border-gray-300 rounded-lg py-3 text-gray-500 hover:border-orange-400 hover:text-orange-500 transition"
                                    onClick={() => setIsAdding(true)}
                                >
                                    + Thêm địa chỉ mới
                                </button>
                            ) : (

                                <div className="space-y-3 mt-4">

                                    <input
                                        className="border p-2 w-full rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                                        placeholder="Số điện thoại"
                                        value={newAddress.phone}
                                        onChange={(e) =>
                                            setNewAddress({ ...newAddress, phone: e.target.value })
                                        }
                                    />

                                    <input
                                        className="border p-2 w-full rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                                        placeholder="Đường"
                                        value={newAddress.street}
                                        onChange={(e) =>
                                            setNewAddress({ ...newAddress, street: e.target.value })
                                        }
                                    />

                                    <input
                                        className="border p-2 w-full rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                                        placeholder="Quận/Huyện"
                                        value={newAddress.district}
                                        onChange={(e) =>
                                            setNewAddress({ ...newAddress, district: e.target.value })
                                        }
                                    />

                                    <input
                                        className="border p-2 w-full rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                                        placeholder="Thành phố"
                                        value={newAddress.city}
                                        onChange={(e) =>
                                            setNewAddress({ ...newAddress, city: e.target.value })
                                        }
                                    />

                                    <input
                                        className="border p-2 w-full rounded-md focus:ring-2 focus:ring-orange-400 outline-none"
                                        placeholder="Quốc gia"
                                        value={newAddress.country}
                                        onChange={(e) =>
                                            setNewAddress({ ...newAddress, country: e.target.value })
                                        }
                                    />

                                    <div className="flex justify-end gap-3 pt-2">

                                        <button
                                            className="px-4 py-2 border rounded-md hover:bg-gray-50"
                                            onClick={() => setIsAdding(false)}
                                        >
                                            Hủy
                                        </button>

                                        <button
                                            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                                            onClick={handleAddAddress}
                                        >
                                            Lưu
                                        </button>

                                    </div>

                                </div>

                            )}

                        </div>

                        {/* footer */}
                        <div className="flex justify-between p-4 border-t">

                            <button
                                className="px-4 py-2 border rounded-md hover:bg-gray-50"
                                onClick={() => setIsOpen(false)}
                            >
                                Trở lại
                            </button>

                            <button
                                className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
                                onClick={() => {
                                    const select =
                                        addresses.find((a) => a.id === selectedId) || null;

                                    onSelectAddress?.(select);
                                    setAddress(select);
                                    setIsOpen(false);
                                }}
                            >
                                Xác nhận
                            </button>

                        </div>

                    </DialogPanel>
                </div>
            </Dialog>

        </div>
    );
}
