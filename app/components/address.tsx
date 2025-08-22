import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";

type Address = {
    id: number;
    name: string;
    phone: string;
    street: string;
    district: string;
    city: string;
};

function AddressItem({
    address,
    selected,
    onSelect,
}: {
    address: Address;
    selected: boolean;
    onSelect: () => void;
}) {
    return (
        <div
            className={`flex justify-between items-start border rounded-md p-3 mb-3 ${selected ? "border-orange-500" : "hover:border-orange-400 cursor-pointer"
                }`}
            onClick={onSelect}
        >
            <div className="text-sm">
                <div className="font-bold">{address.name}</div>
                <div className="text-gray-700">{address.phone}</div>
                <div className="text-gray-600">
                    {address.street}, {address.district}, {address.city}
                </div>
            </div>
            <input type="radio" checked={selected} readOnly />
        </div>
    );
}

export default function AddressSelector({
    addresses: initAddresses,
    onSelectAddress,
}: {
    addresses: Address[];
    onSelectAddress: (address: Address | null) => void;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const [address, setAddress] = useState<Address | null>(null);
    const [addresses, setAddresses] = useState<Address[]>(initAddresses);

    // state cho thêm địa chỉ
    const [isAdding, setIsAdding] = useState(false);
    const [newAddress, setNewAddress] = useState<Omit<Address, "id">>({
        name: "",
        phone: "",
        street: "",
        district: "",
        city: "",
    });

    useEffect(() => {
        if (addresses.length > 0) {
            setAddress(addresses[0]);
        }
    }, []);

    const handleAddAddress = () => {
        const newAddr: Address = {
            id: Date.now(), // tạm ID, thực tế nên lấy từ DB
            ...newAddress,
        };
        setAddresses((prev) => [...prev, newAddr]);
        setNewAddress({ name: "", phone: "", street: "", district: "", city: "" });
        setIsAdding(false);
    };

    return (
        <div className="m-5 bg-[#F3F6FA] rounded-b-2xl shadow-sm">
            <div className="w-full h-[3px] bg-[repeating-linear-gradient(45deg,#6fa6d6,#6fa6d6_33px,transparent_0,transparent_41px,#f18d9b_0,#f18d9b_74px,transparent_0,transparent_82px)] bg-[length:116px_3px] bg-[-30px_0]"></div>

            <div className="flex justify-between items-center p-4">
                <div className="flex items-center text-red-500">
                    <i className="fa fa-map-marker pr-2" />
                    Địa chỉ nhận hàng
                </div>
                <button
                    onClick={() => setIsOpen(true)}
                    className="text-blue-600 hover:underline"
                >
                    Chọn địa chỉ
                </button>
            </div>

            {address && (
                <div className="flex py-1">
                    <div className="px-4">
                        <span className="pr-5 font-bold">{address.name}</span>
                        <span className="pr-5 font-bold">{address.phone}</span>
                        <span>
                            {address.street}, {address.district}, {address.city}
                        </span>
                    </div>
                </div>
            )}

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center">
                    <DialogPanel className="bg-white rounded-md shadow-lg w-[90%] sm:w-[500px] max-h-[600px] overflow-y-auto">
                        <div className="p-4 border-b font-bold">Chọn địa chỉ</div>
                        <div className="p-4">
                            {addresses.map((a) => (
                                <AddressItem
                                    key={a.id}
                                    address={a}
                                    selected={selectedId === a.id}
                                    onSelect={() => setSelectedId(a.id)}
                                />
                            ))}

                            {!isAdding ? (
                                <button
                                    className="w-full border-dashed border-2 border-gray-300 rounded-md p-3 text-center text-gray-500 hover:border-orange-400 hover:text-orange-500"
                                    onClick={() => setIsAdding(true)}
                                >
                                    + Thêm địa chỉ mới
                                </button>
                            ) : (
                                <div className="space-y-2 mt-3">
                                    <input
                                        className="border p-2 w-full rounded"
                                        placeholder="Tên"
                                        value={newAddress.name}
                                        onChange={(e) =>
                                            setNewAddress({ ...newAddress, name: e.target.value })
                                        }
                                    />
                                    <input
                                        className="border p-2 w-full rounded"
                                        placeholder="Số điện thoại"
                                        value={newAddress.phone}
                                        onChange={(e) =>
                                            setNewAddress({ ...newAddress, phone: e.target.value })
                                        }
                                    />
                                    <input
                                        className="border p-2 w-full rounded"
                                        placeholder="Đường"
                                        value={newAddress.street}
                                        onChange={(e) =>
                                            setNewAddress({ ...newAddress, street: e.target.value })
                                        }
                                    />
                                    <input
                                        className="border p-2 w-full rounded"
                                        placeholder="Quận/Huyện"
                                        value={newAddress.district}
                                        onChange={(e) =>
                                            setNewAddress({ ...newAddress, district: e.target.value })
                                        }
                                    />
                                    <input
                                        className="border p-2 w-full rounded"
                                        placeholder="Thành phố"
                                        value={newAddress.city}
                                        onChange={(e) =>
                                            setNewAddress({ ...newAddress, city: e.target.value })
                                        }
                                    />
                                    <div className="flex justify-end space-x-2 mt-2">
                                        <button
                                            className="!mr-2 px-3 py-1 border rounded"
                                            onClick={() => setIsAdding(false)}
                                        >
                                            Hủy
                                        </button>
                                        <button
                                            className="px-3 py-1 bg-green-500 text-white rounded"
                                            onClick={handleAddAddress}
                                        >
                                            Lưu
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="flex justify-between p-4 border-t">
                            <button
                                className="px-4 py-2 border rounded"
                                onClick={() => setIsOpen(false)}
                            >
                                Trở lại
                            </button>
                            <button
                                className="px-4 py-2 bg-orange-500 text-white rounded"
                                onClick={() => {
                                    const select =
                                        addresses.find((a) => a.id === selectedId) || null;
                                    onSelectAddress?.(select);
                                    setAddress(select);
                                    setIsOpen(false);
                                }}
                            >
                                OK
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    );
}
