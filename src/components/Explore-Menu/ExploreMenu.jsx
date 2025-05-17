import React from 'react';
import { menu_list } from '../../assets/frontend_assets/assets';
import './ExploreMenu.css';

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <section id="explore-menu" className="flex flex-col gap-5 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto mt-10">
            <h1 className="text-2xl font-semibold text-gray-700">Explore Our Menu</h1>
            <p className="max-w-lg text-gray-600 text-sm">
                Choose from a diverse menu featuring a detectable array of dishes crafted with the finest ingredients and culinary expertise.
            </p>

            <div className="explore-menu-list flex space-x-6 overflow-x-auto py-4">
                {menu_list.map((item, idx) => (
                    <div
                        key={idx}
                        onClick={() => setCategory(prev => (prev === item.menu_name ? 'All' : item.menu_name))}
                        className="flex flex-col items-center cursor-pointer min-w-[72px] sm:min-w-[96px] select-none"
                    >
                        <img
                            src={item.menu_image}
                            alt={item.menu_name}
                            className={`w-14 h-14 sm:w-20 sm:h-20 rounded-full object-cover transition duration-200 ${category === item.menu_name ? 'ring-4 ring-orange-400' : ''
                                }`}
                        />
                        <p className="mt-3 text-gray-600 text-base">{item.menu_name}</p>
                    </div>
                ))}
            </div>

            <hr className="my-3 border-gray-300" />
        </section>
    );
};

export default ExploreMenu;
