import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './cart.css';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
    const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

    const delivery = 5 / 100 * getTotalCartAmount();

    const navigate = useNavigate();

    return (
        <div className="cart px-4 md:px-10 mt-12 max-w-7xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-700 my-4">Your Cart</h2>

            <div className="overflow-x-auto">
                <div className="hidden md:grid grid-cols-6 font-semibold text-gray-600 border-b pb-2 gap-3">
                    <p>Item</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>

                {food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div key={index} className="grid grid-cols-2 md:grid-cols-6 items-center gap-4 py-4 border-b text-sm md:text-base">
                                <img src={item.image} alt="food" className="w-16 h-16 object-cover rounded-md" />
                                <p className="capitalize">{item.name}</p>
                                <p>₹{item.price}</p>
                                <p>{cartItems[item._id]}</p>
                                <p>₹{item.price * cartItems[item._id]}</p>
                                <button onClick={() => removeFromCart(item._id)} className="text-red-500 underline text-start">Remove</button>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>

            <div className="mt-10 flex flex-col md:flex-row lg:flex-row gap-8">
                {/* Cart Totals */}
                <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">Cart Total</h2>
                    <div className="flex justify-between text-gray-600">
                        <p>Subtotal</p>
                        <p>₹{getTotalCartAmount()}</p>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between text-gray-600">
                        <p>Delivery Charges</p>
                        <p>₹{delivery}</p>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between text-black font-bold">
                        <p>Total</p>
                        <p>₹{getTotalCartAmount() + delivery}</p>
                    </div>
                    <button onClick={() => navigate('/order')} className="mt-5 w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition">Proceed to checkout</button>
                </div>

                {/* Promo Code */}
                <div className="flex-1 bg-gray-100 p-6 rounded-lg shadow-sm">
                    <p className="text-gray-600 mb-2">If you have a promo code, enter it here:</p>
                    <div className="flex flex-col sm:flex-row items-center gap-2">
                        <input type="text" placeholder="Promo code" className="flex-1 py-2 px-4 rounded-md border border-gray-300 outline-none" />
                        <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
