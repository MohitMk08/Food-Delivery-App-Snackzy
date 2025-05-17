import React from 'react';

const Header = () => {
    return (
        <div className="relative w-full h-[70vh] z-1 bg-cover bg-center bg-[url('/header_img.png')]">
            <div className="absolute bottom-6 left-4 md:bottom-10 md:left-8 flex flex-col items-start gap-4 max-w-md text-white animate-fadeIn">
                <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                    Order your favorite food here
                </h2>
                <p className="text-sm sm:text-base md:text-lg">
                    Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.
                </p>
                <button className="bg-white text-gray-700 font-medium py-2 px-6 sm:px-8 text-sm sm:text-base rounded-full hover:bg-orange-600 hover:text-white transition">
                    View Menu
                </button>
            </div>
        </div>
    );
};

export default Header;
