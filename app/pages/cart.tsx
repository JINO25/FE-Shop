import React, { useMemo, useState } from "react";
import { CartItem } from "~/components/cart-tem";
import { useCart } from "~/contexts/CartContext";

export const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const [items, setItems] = useState([
    { id: 1, name: "Product 1", image: "/images/product.jpg", price: 190, quantity: 2 },
    { id: 2, name: "Product 2", image: "/images/product.jpg", price: 120, quantity: 1 },
    { id: 3, name: "Product 3", image: "/images/product.jpg", price: 90, quantity: 3 },
  ]);

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const toggleSelectProduct = (id: number, checked: boolean) => {
    setSelectedItems(prev =>
      checked ? [...prev, id] : prev.filter(itemId => itemId !== id)
    );
  };

  const toggleSelectAllProducts = (checked: boolean) => {
    if (checked) {
      setSelectedItems(items.map(item => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  const total = useMemo(() => {
    return items
      .filter(item => selectedItems.includes(item.id))
      .reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [items, selectedItems]);

  return (
    <section className="py-20">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="shoping__cart__table">
              <table>
                <thead>
                  <tr>
                    <th><input
                      type="checkbox"
                      onChange={(e) => { toggleSelectAllProducts(e.target.checked) }}
                      checked={items.length === selectedItems.length}
                    /></th>
                    <th className="text-left text-xl font-bold pb-5">Products</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map(item => (
                    <CartItem
                      key={item.id}
                      {...item}
                      onRemove={() => removeFromCart(item.id)}
                      onQuantityChange={(newQty) => updateQuantity(item.id, newQty)}
                      onSelectProduct={(checked) => toggleSelectProduct(item.id, checked)}
                      checked={selectedItems.includes(item.id)}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 offset-lg-6">
            <div className="!bg-[#f5f5f5] !p-[30px] !pt-[20px] !mt-[50px]">
              <h5 className="!font-bold !text-xl !mb-[28px]">Cart Total</h5>
              <ul className="mb-7">
                <li className="text-[16px] text-[#1c1c1c] font-bold">
                  Total (selected only): <span className="text-[18px] text-red-500 float-right">${total.toFixed(2)}</span>
                </li>
              </ul>
              <a href="#" className="primary-btn !no-underline">
                PROCEED TO CHECKOUT
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
