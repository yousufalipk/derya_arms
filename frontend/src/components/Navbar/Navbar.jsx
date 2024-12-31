import React, { useState } from "react";
import Logo from '../../assets/logo.svg';
import Triangle from '../../assets/triangle.svg';
import styles from './Navbar.module.css';
import { useUser } from '../../context/index';
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const { language, setLanguage } = useUser();
    const [searchActive, setSearchActive] = useState(false);
    const [animating, setAnimating] = useState(false);
    const [isProductsOpen, setProductsOpen] = useState(false);
    const [isSupportOpen, setSupportOpen] = useState(false);

    const HandleToggleLanguage = () => {
        if (language === 'EN') {
            setLanguage('TR');
        } else {
            setLanguage('EN');
        }
    }

    const HandleToggleSearchActive = () => {
        if (!animating) {
            setAnimating(true);
            setSearchActive(!searchActive);
            setTimeout(() => {
                setAnimating(false);
            }, 500);
        }
    }

    return (
        <div className="w-full h-full flex justify-between items-center px-20 text-textColor text-md font-semibold">
            <div
                onClick={() => {
                    navigate('/');
                }}
                className="w-[25%] h-full flex justify-start items-center -mt-10 gap-5 hover:cursor-pointer">
                <img src={Logo} width={250} alt="derya_arms_logo" />
            </div>
            <div className="w-[75%] h-full flex justify-end items-center gap-5">
                <button className="-mt-2" onClick={HandleToggleSearchActive}>
                    <div
                        className={`${animating ? "animate-bounce-down-once" : ""}`}
                    >
                        {searchActive ? (
                            <IoMdClose size={25} />
                        ) : (
                            <IoIosSearch size={25} />
                        )}
                    </div>
                </button>
                <nav className={styles.nav}>
                    <a className="relative">
                        <button
                            onMouseEnter={() => setProductsOpen(true)}
                            onMouseLeave={() => setProductsOpen(false)}
                            className="text-white focus:outline-none"
                        >
                            PRODUCTS
                        </button>
                        {isProductsOpen && (
                            <div
                                onMouseEnter={() => setProductsOpen(true)}
                                onMouseLeave={() => setProductsOpen(false)}
                                className="absolute left-0 w-48 bg-black bg-opacity-70 rounded-md shadow-lg transition-opacity duration-300 opacity-100 p-3"
                            >
                                <button className="block w-full hover:bg-zinc-800 rounded-lg">Product 1</button>
                                <button className="block w-full hover:bg-zinc-800 rounded-lg">Product 2</button>
                                <button className="block w-full hover:bg-zinc-800 rounded-lg">Product 3</button>
                            </div>
                        )}
                    </a>
                    <a href="#">ABOUT US</a>
                    <a className="relative">
                        <button
                            onMouseEnter={() => setSupportOpen(true)}
                            onMouseLeave={() => setSupportOpen(false)}
                            className="text-white focus:outline-none"
                        >
                            SUPPORT
                        </button>
                        {isSupportOpen && (
                            <div
                                onMouseEnter={() => setSupportOpen(true)}
                                onMouseLeave={() => setSupportOpen(false)}
                                className="absolute left-0 w-48 bg-black bg-opacity-70 rounded-md shadow-lg transition-opacity duration-300 opacity-100 p-3"
                            >
                                <button className="block w-full hover:bg-zinc-800 rounded-lg">Support 1</button>
                                <button className="block w-full hover:bg-zinc-800 rounded-lg">Support 2</button>
                                <button className="block w-full hover:bg-zinc-800 rounded-lg">Support 3</button>
                            </div>
                        )}
                    </a>
                    <div className={`${styles.animation} ${styles.startHome}`}>
                        <img src={Triangle} alt="Triangle" className={styles.triangle} />
                    </div>
                </nav>
                <button
                    onClick={HandleToggleLanguage}
                >
                    {language === 'EN' ? `TR` : `EN`}
                </button>
            </div>
        </div>
    );
};

export default Navbar;
