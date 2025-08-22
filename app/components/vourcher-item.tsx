import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";

type Voucher = {
    id: number;
    title: string;
    desc: string;
    expiry: string;
    discount: number;
    disabled?: boolean;
};


function VoucherItem({ voucher, selected, onSelect }: { voucher: Voucher; selected: boolean; onSelect: () => void }) {
    return (
        <div
            className={`flex justify-between items-center border rounded-md p-3 mb-3 ${voucher.disabled ? "opacity-50" : "hover:border-orange-400 cursor-pointer"
                }`}
            onClick={!voucher.disabled ? onSelect : undefined}
        >
            <div className="flex gap-3">
                <div className="bg-teal-500 text-white px-2 py-1 text-xs font-bold rounded">FREE SHIP</div>
                <div>
                    <div className="text-sm font-medium">{voucher.desc}</div>
                    <div className="text-xs text-gray-500">{voucher.expiry}</div>
                    {voucher.disabled && (
                        <div className="text-xs text-red-500 mt-1">Vui lòng mua hàng trên app để sử dụng</div>
                    )}
                </div>
            </div>
            <input type="radio" checked={selected} readOnly />
        </div>
    );
}

export default function VoucherSelector({ vouchers, onSelectVoucher }: { vouchers: Voucher[], onSelectVoucher: (vourcher: Voucher | null) => void; }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedVoucher, setSelectedVoucher] = useState<number | null>(null);
    const [voucher, setVoucher] = useState<Voucher | null>(null);

    return (
        <div className="m-5 bg-white shadow">
            <div className="flex justify-between items-center p-4 border-b">
                <div className="flex items-center text-red-500">
                    <i className="fa fa-ticket pr-2" />
                    Shopee Voucher
                </div>
                <button
                    onClick={() => setIsOpen(true)}
                    className="text-blue-600 hover:underline"
                >
                    Chọn Voucher
                </button>
            </div>

            {voucher && (
                <div className="p-4 text-sm text-green-600">
                    Voucher áp dụng:{" "}
                    <span className="font-bold">{voucher.title}</span>
                </div>
            )}

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center">
                    <DialogPanel className="bg-white rounded-md shadow-lg w-[90%] sm:w-[500px] max-h-[600px] overflow-y-auto">

                        <div className="p-4 border-b font-bold">Chọn Shopee Voucher</div>
                        <div className="p-4">
                            {vouchers.map((v) => (
                                <VoucherItem
                                    key={v.id}
                                    voucher={v}
                                    selected={selectedVoucher === v.id}
                                    onSelect={() => setSelectedVoucher(v.id)}
                                />
                            ))}
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
                                    const select = vouchers.find((v) => v.id === selectedVoucher) || null;
                                    onSelectVoucher?.(select);
                                    setVoucher?.(select)
                                    setIsOpen(false)
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
