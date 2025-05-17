import React from 'react';
import { assets } from '../../assets/frontend_assets/assets';

const Footer = () => {
    return (
        <footer className="mt-24 px-4 sm:px-6 md:px-10 py-10 bg-gray-700 text-gray-300" id="footer">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {/* Left Section */}
                <div className='lg:col-span-2'>
                    <img src={assets.logoSZ} alt="Logo" className="w-36 sm:w-40 mb-4" />
                    <p className="text-sm sm:text-base leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit fuga excepturi magni, quos autem nisi, dignissimos, in pariatur praesentium nemo rem maiores incidunt veniam provident voluptas atque consequatur? Vel, id.
                    </p>
                    <div className="flex gap-4 items-center mt-5">
                        <img src={assets.facebook_icon} alt="facebook" className="w-6 h-6 cursor-pointer" />
                        <img src={assets.twitter_icon} alt="twitter" className="w-6 h-6 cursor-pointer" />
                        <img src={assets.linkedin_icon} alt="linkedin" className="w-6 h-6 cursor-pointer" />
                    </div>
                </div>

                {/* Center Section */}
                <div>
                    <h2 className="text-xl sm:text-2xl text-white font-semibold mb-3">Company</h2>
                    <ul className="space-y-2 text-sm sm:text-base">
                        <li className="hover:text-white cursor-pointer">Home</li>
                        <li className="hover:text-white cursor-pointer">About Us</li>
                        <li className="hover:text-white cursor-pointer">Delivery</li>
                        <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                    </ul>
                </div>

                {/* Right Section */}
                <div>
                    <h2 className="text-xl sm:text-2xl text-white font-semibold mb-3">Get In Touch</h2>
                    <ul className="space-y-2 text-sm sm:text-base">
                        <li>+91-1234567890</li>
                        <li>contact@snackzy.com</li>
                    </ul>
                </div>
            </div>

            <hr className="my-6 border-gray-400" />

            <p className="text-center text-xs sm:text-sm">
                &copy; {new Date().getFullYear()} <a href="http://" className="underline hover:text-white">Snackzy.com</a> — All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
