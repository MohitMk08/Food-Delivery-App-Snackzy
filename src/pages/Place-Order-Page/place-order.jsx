import React from 'react'
import './place-order.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext.jsx'

const placeOrder = () => {

    const { getTotalCartAmount } = useContext(StoreContext);

    const delivery = 5 / 100 * getTotalCartAmount();
    return (
        <form className='place-order flex items-start justify-between gap-12 mt-24'>
            <div className="place-order-left w-full max-w-xl  bg-gray-100 p-6 rounded-lg shadow-sm">
                <p className="title text-xl font-semibold mb-4 text-gray-700">Delivery Information</p>
                <div className="multi-fields">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                </div>
                <input type="email" placeholder="Email Address" />
                <input type="text" placeholder="Street" />
                <div className="multi-fields">
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="State" />
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder="Zip-Code" />
                    <input type="text" placeholder="Country" />
                </div>
                <input type="text" placeholder="Phone Number" />
            </div>
            <div className="place-order-right w-full max-w-lg">
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
                    <button className="mt-5 w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition">Proceed to Payment</button>
                </div>
            </div>

        </form>
    )
}

export default placeOrder;
