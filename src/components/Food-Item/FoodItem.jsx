import React, { useContext } from 'react';
import { assets } from '../../assets/frontend_assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div className="w-full max-w-sm bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg mx-auto">
            {/* Image Section */}
            <div className="relative">
                <img src={image} alt={name} className="w-full h-48 sm:h-56 object-cover" />

                {/* Add/Remove Button */}
                {!cartItems[id] ? (
                    <img
                        onClick={() => addToCart(id)}
                        src={assets.add_icon_white}
                        alt="add"
                        className="w-8 h-8 sm:w-9 sm:h-9 absolute bottom-3 right-3 bg-orange-500 rounded-full p-1 cursor-pointer"
                    />
                ) : (
                    <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-white px-2 py-1 rounded-full shadow-sm">
                        <img
                            onClick={() => removeFromCart(id)}
                            src={assets.remove_icon_red}
                            alt="remove"
                            className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer"
                        />
                        <p className="text-sm sm:text-base">{cartItems[id]}</p>
                        <img
                            onClick={() => addToCart(id)}
                            src={assets.add_icon_green}
                            alt="add"
                            className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer"
                        />
                    </div>
                )}
            </div>

            {/* Info Section */}
            <div className="px-4 py-3">
                <div className="flex justify-between items-center mb-2">
                    <p className="text-base sm:text-lg font-semibold text-gray-800">{name}</p>
                    <img src={assets.rating_starts} alt="stars" className="w-16 h-4 object-contain" />
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mb-1">{description}</p>
                <p className="text-lg font-bold text-orange-500">₹{price}</p>
            </div>
        </div>
    );
};

export default FoodItem;
