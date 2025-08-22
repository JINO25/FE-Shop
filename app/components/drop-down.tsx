// DropDown.tsx
import React, { useState } from 'react'

interface ProductVariant {
    id: string | number;
    option: string;
    stock: number;
}

interface OptionSelectProps {
    variants: ProductVariant[];
    onSelect?: (variant: ProductVariant) => void;
}

export const DropDown = ({ variants, onSelect }: OptionSelectProps) => {
    const [selected, setSelected] = useState<ProductVariant | null>(variants[0] || null);

    const handleChange = (variantId: string) => {
        const chosen = variants.find(v => v.id.toString() === variantId) || null;
        setSelected(chosen);
        if (chosen && onSelect) {
            onSelect(chosen);
        }
    };

    return (
        <div className="relative w-40">
            <select
                value={selected?.id ?? ""}
                onChange={(e) => handleChange(e.target.value)}
                className="w-full appearance-none border border-gray-300 rounded-lg px-4 py-2 my-2 text-gray-700 focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
            >
                {variants.map((v) => (
                    <option key={v.id} value={v.id}>
                        {v.option}
                    </option>
                ))}
            </select>
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                <i className="fa fa-chevron-down"></i>
            </span>
        </div>
    );
};
