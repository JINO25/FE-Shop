import React, { useEffect, useState } from "react";

export const CartItem = ({
  name,
  quantity: initialQuantity,
  image,
  price,
  onRemove,
  onQuantityChange,
  onSelectProduct,
  checked
}: {
  name: string;
  quantity: number;
  image: string;
  price: number;
  onRemove: () => void;
  onQuantityChange: (quantity: number) => void;
  onSelectProduct: (checked: boolean) => void;
  checked: boolean
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [total, setTotal] = useState(price * initialQuantity);

  useEffect(() => {
    setTotal(price * quantity);
    onQuantityChange(quantity);
  }, [price, quantity]);

  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <tr>
      <td className="">
        <input type="checkbox" onChange={(e) => onSelectProduct(e.target.checked)} checked={checked} />
      </td>
      <td className="flex items-center text-left">
        <img src={image} alt={name} style={{ width: "50px", marginRight: "10px" }} />
        <h5>{name}</h5>
      </td>

      <td className="text-[18px] font-bold text-[#1c1c1c]">${price}</td>

      <td className="shoping__cart__quantity">
        <div className="quantity">
          <div className="pro-qty">
            <button
              onClick={decreaseQty}
              style={{ marginRight: "5px" }}
              className="w-[20%]"
            >
              -
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              style={{ width: "40px", textAlign: "center" }}
            />
            <button
              onClick={increaseQty}
              style={{ marginLeft: "5px" }}
              className="w-[20%]"
            >
              +
            </button>
          </div>
        </div>
      </td>

      <td className="font-bold text-xl text-[#1c1c1c]">${total}</td>

      <td className="shoping__cart__item__close">
        <span
          className="icon_close cursor-pointer"
          onClick={onRemove}
        >x</span>
      </td>
    </tr>
  );
};
