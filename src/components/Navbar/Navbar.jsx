import { useState, useEffect, useContext } from 'react';
import { assets } from '../../assets/frontend_assets/assets';
import { Link as ScrollLink } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/storeContext';

const Navbar = ({ setShowLogin }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active, setActive] = useState('home');
    const [isSticky, setIsSticky] = useState(false);

    const { getTotalCartAmount } = useContext(StoreContext);

    const navItems = [
        { label: 'home', target: 'home' },
        { label: 'menu', target: 'explore-menu' },
        { label: 'mobile-app', target: 'appDownload' },
        { label: 'contact-us', target: 'footer' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`navbar transition-all duration-300 ${isSticky ? 'fixed top-0 z-10 bg-white shadow-md' : 'relative'} w-full left-0 right-0`}>

            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to='/'>
                    <img
                        src={assets.logoSZ}
                        alt="logo"
                        className="w-24 h-10 object-contain"
                    /></Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex gap-6 text-gray-500 capitalize">
                    {navItems.map((item) => (
                        <li key={item.label}>
                            <ScrollLink
                                to={item.target}
                                smooth={true}
                                duration={2000}
                                offset={-80}
                                onClick={() => setActive(item.label)}
                                className={`cursor-pointer hover:text-orange-600 transition ${active === item.label ? 'text-orange-600 font-semibold' : ''
                                    }`}
                            >
                                {item.label.replace('-', ' ')}
                            </ScrollLink>
                        </li>
                    ))}
                </ul>

                {/* Right side icons */}
                <div className="flex items-center gap-4">
                    <img src={assets.search_icon} alt="search" className="w-5 h-5" />
                    <div className="relative">
                        <Link to='/cart'><img src={assets.basket_icon} alt="cart" className="w-5 h-5" /></Link>
                        <div className={`${getTotalCartAmount() === 0 ? "" : "absolute -top-1 -right-1 w-2 h-2 bg-orange-600 rounded-full"} `}></div>
                    </div>
                    <button onClick={() => setShowLogin(true)} className="bg-transparent text-blue-700 border border-blue-700 px-4 py-1 rounded-full hover:bg-orange-600 hover:text-white hover:border-orange-600 transition">
                        Sign In
                    </button>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        {menuOpen ? (
                            <FiX onClick={() => setMenuOpen(false)} className="w-6 h-6 cursor-pointer" />
                        ) : (
                            <FiMenu onClick={() => setMenuOpen(true)} className="w-6 h-6 cursor-pointer" />
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Drawer */}
            {menuOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md z-10 flex flex-col gap-4 p-6 md:hidden">
                    {navItems.map((item) => (
                        <ScrollLink
                            key={item.label}
                            to={item.target}
                            smooth={true}
                            duration={500}
                            offset={-80}
                            onClick={() => {
                                setActive(item.label);
                                setMenuOpen(false);
                            }}
                            className={`text-gray-700 hover:text-orange-600 capitalize cursor-pointer ${active === item.label ? 'font-semibold text-orange-600' : ''
                                }`}
                        >
                            {item.label.replace('-', ' ')}
                        </ScrollLink>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Navbar;
