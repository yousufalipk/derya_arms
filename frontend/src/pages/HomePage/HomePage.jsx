import React, { useState } from 'react';
import { useUser } from '../../context';

import './HomePage.css';

import BackgroundVideo1 from '../../assets/background1.mp4';
import BackgroundVideo2 from '../../assets/background2.mp4';
import ScrollDownAnimation from '../../assets/scrollDown.gif';
import AboustUsLogo from '../../assets/aboutUsLogo.svg';
import AboutUsBg from '../../assets/aboutUsBg.webp';

import NavBar from '../../components/Navbar/Navbar';

//categories 
import Tactical from '../../assets/categories/tactical.webp';
import Hunting from '../../assets/categories/hunting.webp';
import Accessories from '../../assets/categories/accessories.webp';
import New from '../../assets/categories/new.webp';
import Sport from '../../assets/categories/sport.webp';
import PistolRiffle from '../../assets/categories/pistolRiffle.webp';

import Innvocation from '../../assets/cards/innovation.webp';
import Awards from '../../assets/cards/prize.webp';
import QualityPolicy from '../../assets/cards/human-resources.webp';

//Social 
import Facebook from '../../assets/social/facebook.svg';
import Twitter from '../../assets/social/twitter.svg';
import Instagram from '../../assets/social/instagram.svg';
import LinkedIn from '../../assets/social/linkedin.svg';
import Youtube from '../../assets/social/youtube.svg';
import Tiktok from '../../assets/social/tiktok.svg';

// Media 
import Catalogue from '../../assets/media/catalog.webp';
import ImagePic from '../../assets/media/image.webp';
import VideoPic from '../../assets/media/video.webp';

const Card = ({ frontContent, backContent }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleMouseEnter = () => setIsFlipped(true);
    const handleMouseLeave = () => setIsFlipped(false);

    return (
        <div
            className="relative w-[20vw] h-[50vh] perspective"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Card */}
            <div
                className={`card relative w-full h-full transition-transform duration-500 ${isFlipped ? 'rotate-y-180' : ''
                    }`}
            >
                {/* Front */}
                <div className="front absolute w-full h-full bg-white border-b-2 border-black flex flex-col justify-center items-center p-10 gap-7 backface-hidden">
                    {frontContent}
                </div>
                {/* Back */}
                <div className="back absolute w-full h-full bg-black border-b-2 border-white flex flex-col justify-center items-center p-10 gap-7 backface-hidden transform rotate-y-180">
                    {backContent}
                </div>
            </div>
        </div>
    );
};

const HomePage = () => {
    const { socialLink } = useUser();

    const icons = {
        Facebook: Facebook,
        Twitter: Twitter,
        Instagram: Instagram,
        LinkedIn: LinkedIn,
        YouTube: Youtube,
        TikTok: Tiktok
    };

    const cards = [
        {
            id: 1,
            frontContent: (
                <>
                    <img src={Innvocation} alt="innvocation_img" className="invert" />
                    <h1 className="text-2xl">Innvocation</h1>
                </>
            ),
            backContent: (
                <>
                    <img src={Innvocation} alt="innvocation_img" />
                    <h1 className="text-2xl text-white">Innvocation</h1>
                </>
            ),
        },
        {
            id: 2,
            frontContent: (
                <>
                    <img src={Awards} alt="awards_img" className="invert" />
                    <h1 className="text-2xl">Awards</h1>
                </>
            ),
            backContent: (
                <>
                    <img src={Awards} alt="awards_img" />
                    <h1 className="text-2xl text-white">Awards</h1>
                </>
            ),
        },
        {
            id: 3,
            frontContent: (
                <>
                    <img src={QualityPolicy} alt="quality_policy_img" className="invert" />
                    <h1 className="text-2xl">Quality Policy</h1>
                </>
            ),
            backContent: (
                <>
                    <img src={QualityPolicy} alt="quality_policy_img" />
                    <h1 className="text-2xl text-white">Quality Policy</h1>
                </>
            ),
        },
    ];

    return (
        <div className='w-full h-full overflow-x-hidden overflow-y-scroll'>

            <section className='relative w-full h-[100vh]'>
                <video
                    src={BackgroundVideo1}
                    type="video/mp4"
                    autoPlay
                    loop
                    muted
                    className="absolute z-0 top-0 left-0 w-full h-full object-cover"
                    style={{
                        filter: 'brightness(0.5) contrast(1)',
                    }}
                />
                <div className='absolute z-10 top-10 left-0 w-full h-[30vh]'>
                    <NavBar />
                </div>
                <div className='flex justify-center items-center h-[10vh] w-full absolute bottom-0'>
                    <img src={ScrollDownAnimation} alt="scroll_down_animation" className='invert' />
                </div>
            </section>

            <section className='w-full h-[100vh] flex justify-between items-center'>
                <div
                    className="w-1/2 h-full px-20 py-40 text-black flex justify-between items-center"
                >
                    <div className='w-[25%] h-full flex flex-col justify-start items-start gap-6'>
                        <img src={AboustUsLogo} alt="aboutUsLogo" width={100} />
                        <hr className='w-[40%]' />
                    </div>
                    <div className='w-[75%] h-full flex flex-col justify-start items-start gap-3'>
                        <h1 className='text-xl font-semibold'>
                            Our Integrated Management Systems Policy
                        </h1>
                        <p className='text-lg text-gray-700'>
                            As Derya Arms Industry, our policy in accordance with the Integrated Management Systems is to comply with all applicable legal procedures particularly the occupational health and safety at the time of providing services for defensive and recreational light weapons based on high quality and low cost principles; meet the requirements specific to our customers and contribute to the protection of environment by taking measures for this purpose with the required level of sensitivity during all these activities.
                        </p>
                        <button className='italic'>
                            Click For More
                        </button>
                    </div>
                </div>
                <div
                    style={{
                        backgroundImage: `url(${AboutUsBg})`,
                        backgroundAttachment: 'fixed',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    className="w-1/2 h-full px-20 py-40 text-white flex justify-between items-center"
                >
                    <div className='w-[25%] h-full flex flex-col justify-start items-start gap-6'>
                        <img src={AboustUsLogo} alt="aboutUsLogo" className='invert' width={100} />
                        <hr className='w-[40%]' />
                    </div>
                    <div className='w-[75%] h-full flex flex-col justify-start items-start gap-3'>
                        <h1 className='text-xl font-semibold'>
                            Our Integrated Management Systems Policy
                        </h1>
                        <p className='text-lg'>
                            As Derya Arms Industry, our policy in accordance with the Integrated Management Systems is to comply with all applicable legal procedures particularly the occupational health and safety at the time of providing services for defensive and recreational light weapons based on high quality and low cost principles; meet the requirements specific to our customers and contribute to the protection of environment by taking measures for this purpose with the required level of sensitivity during all these activities.
                        </p>
                        <button className='italic text-textColor'>
                            Click For More
                        </button>
                    </div>
                </div>
            </section>

            <section className='w-full h-[350vh] flex flex-col justify-center items-center gap-2 bg-[#F4F4F4]'>
                <div className='w-full h-[10vh] flex justify-center items-center'>
                    <h1 className='text-3xl'>PRODUCTS</h1>
                </div>
                {/* Row 1 */}
                <div className='w-[80vw] h-[80vh] flex justify-between items-center'>
                    <div className='w-1/2 h-full relative group overflow-hidden'>
                        <div className='grayscale hover:grayscale-0 hover:cursor-pointer w-full h-full bg-cover bg-center bg-gray-500 group-hover:scale-110 group-hover:transition-transform group-hover:duration-1000 group-hover:ease-in-out transition-all duration-500 ease-in-out'
                            style={{ backgroundImage: `url(${PistolRiffle})` }}>
                            <div className='w-full h-full flex justify-center items-center'>
                                <h2 className='text-white font-bold text-3xl uppercase tracking-wide transform group-hover:scale-105 group-hover:tracking-tight group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out transition-all duration-500 ease-in-out'>
                                    Your Text
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 h-full relative group overflow-hidden'>
                        <div className='grayscale hover:grayscale-0 hover:cursor-pointer w-full h-full bg-cover bg-center bg-gray-500 group-hover:scale-110 group-hover:transition-transform group-hover:duration-1000 group-hover:ease-in-out transition-all duration-500 ease-in-out'
                            style={{ backgroundImage: `url(${Sport})` }}>
                            <div className='w-full h-full flex justify-center items-center'>
                                <h2 className='text-white font-bold text-3xl uppercase tracking-wide transform group-hover:scale-105 group-hover:tracking-tight group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out transition-all duration-500 ease-in-out'>
                                    Your Text
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 2 */}
                <div className='w-[80vw] h-[80vh] flex justify-between items-center'>
                    <div className='w-1/2 h-full relative group overflow-hidden'>
                        <div className='grayscale hover:grayscale-0 hover:cursor-pointer w-full h-full bg-cover bg-center bg-gray-500 group-hover:scale-110 group-hover:transition-transform group-hover:duration-1000 group-hover:ease-in-out transition-all duration-500 ease-in-out'
                            style={{ backgroundImage: `url(${Hunting})` }}>
                            <div className='w-full h-full flex justify-center items-center'>
                                <h2 className='text-white font-bold text-3xl uppercase tracking-wide transform group-hover:scale-105 group-hover:tracking-tight group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out transition-all duration-500 ease-in-out'>
                                    Your Text
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 h-full relative group overflow-hidden'>
                        <div className='grayscale hover:grayscale-0 hover:cursor-pointer w-full h-full bg-cover bg-center bg-gray-500 group-hover:scale-110 group-hover:transition-transform group-hover:duration-1000 group-hover:ease-in-out transition-all duration-500 ease-in-out'
                            style={{ backgroundImage: `url(${Tactical})` }}>
                            <div className='w-full h-full flex justify-center items-center'>
                                <h2 className='text-white font-bold text-3xl uppercase tracking-wide transform group-hover:scale-105 group-hover:tracking-tight group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out transition-all duration-500 ease-in-out'>
                                    Your Text
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 3 */}
                <div className='w-[80vw] h-[80vh] flex justify-between items-center'>
                    <div className='w-1/2 h-full relative group overflow-hidden'>
                        <div className='grayscale hover:grayscale-0 hover:cursor-pointer w-full h-full bg-cover bg-center bg-gray-500 group-hover:scale-110 group-hover:transition-transform group-hover:duration-1000 group-hover:ease-in-out transition-all duration-500 ease-in-out'
                            style={{ backgroundImage: `url(${PistolRiffle})` }}>
                            <div className='w-full h-full flex justify-center items-center'>
                                <h2 className='text-white font-bold text-3xl uppercase tracking-wide transform group-hover:scale-105 group-hover:tracking-tight group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out transition-all duration-500 ease-in-out'>
                                    Your Text
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2 h-full relative group overflow-hidden'>
                        <div className='grayscale hover:grayscale-0 hover:cursor-pointer w-full h-full bg-cover bg-center bg-gray-500 group-hover:scale-110 group-hover:transition-transform group-hover:duration-1000 group-hover:ease-in-out transition-all duration-500 ease-in-out'
                            style={{ backgroundImage: `url(${New})` }}>
                            <div className='w-full h-full flex justify-center items-center'>
                                <h2 className='text-white font-bold text-3xl uppercase tracking-wide transform group-hover:scale-105 group-hover:tracking-tight group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out transition-all duration-500 ease-in-out'>
                                    Your Text
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Last Row */}
                <div className='w-[80vw] h-[80vh] flex justify-center items-center'>
                    <div className='w-1/2 h-full relative group overflow-hidden'>
                        <div className='grayscale hover:grayscale-0 hover:cursor-pointer w-full h-full bg-cover bg-center bg-gray-500 group-hover:scale-110 group-hover:transition-transform group-hover:duration-1000 group-hover:ease-in-out transition-all duration-500 ease-in-out'
                            style={{ backgroundImage: `url(${Accessories})` }}>
                            <div className='w-full h-full flex justify-center items-center'>
                                <h2 className='text-white font-bold text-3xl uppercase tracking-wide transform group-hover:scale-105 group-hover:tracking-tight group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out transition-all duration-500 ease-in-out'>
                                    Your Text
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='relative w-full h-[100vh]'>
                <video
                    src={BackgroundVideo2}
                    type="video/mp4"
                    autoPlay
                    loop
                    muted
                    className="absolute z-0 top-0 left-0 w-full h-full object-cover"
                    style={{
                        filter: 'brightness(0.5) contrast(1)',
                    }}
                />
            </section>

            <section className='relative w-full h-[70vh] flex flex-col justify-center items-center bg-[#F4F4F4]'>
                <div className='w-full h-[60vh] flex justify-center items-center gap-10'></div>
                <div className='absolute -top-[10%] w-full h-[60%] flex justify-center items-center gap-10'>
                    {cards.map((card) => (
                        <Card
                            key={card.id}
                            frontContent={card.frontContent}
                            backContent={card.backContent}
                        />
                    ))}
                </div>
                <div className='w-full h-[40%] flex justify-center items-center border-t-2 border-white'>
                    <ul className='w-[60%] h-[10vh] flex justify-center items-center gap-5'>
                        {socialLink.map((social) => (
                            <li
                                key={social.type}
                                onClick={() => {
                                    window.open(social.link, "_blank");
                                }}
                            >
                                <img src={icons[social.type]} alt={social.type.toLowerCase()} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className='w-full h-[80vh] flex justify-between items-center p-28 bg-[#0D0D0D] text-textColor'>
                <div className='w-[30%] h-full flex flex-col justify-start items-start gap-5'>
                    <h1 className='text-2xl font-bold'>
                        ABOUT US
                    </h1>
                    <p className='text-start'>
                        Our Company contributes to our country’s growth potential by continuously investing in modernization and improvement of its human resources, technologies and training processes. Our vision is to position Derya Arms Industry Company as one of the World’s leading brands by producing better products through more advanced technologies.
                    </p>
                    <span className='text-bold text-white'>
                        +90 332 514 81 18 (Extension 15)
                    </span>
                    <span className='text-bold text-white'>
                        support@deryaarms.com
                    </span>
                    <p className='text-gray font-semibold'>
                        41959 Street Number: 24-1, 42700, Beyşehir - KONYA/TURKEY
                    </p>
                </div>
                <div className='w-[25%] h-full flex flex-col justify-start items-start gap-3'>
                    <h1 className='text-2xl font-bold'>
                        MENU
                    </h1>
                    <hr className='w-24 border border-white mt-10' />
                    <button
                        onClick={() => {

                        }}
                        className='flex justify-start items-start gap-2 text-md font-semibold'
                    >
                        PRODUCTS
                    </button>
                    <hr className='w-24 border border-white' />
                    <button
                        onClick={() => {

                        }}
                        className='flex justify-start items-start gap-2 text-md font-semibold'
                    >
                        ABOUT US
                    </button>
                    <hr className='w-24 border border-white' />
                    <button
                        onClick={() => {

                        }}
                        className='flex justify-start items-start gap-2 text-md font-semibold'
                    >
                        SUPPORT
                    </button>
                    <hr className='w-24 border border-white' />
                </div>
                <div className='w-[30%] h-full flex flex-col justify-start items-start pr-10'>
                    <h1 className='text-2xl font-bold'>
                        MEDIA
                    </h1>
                    <div className='w-full h-[10vh] flex justify-start items-cente gap-2'>
                        <div
                            onClick={() => {

                            }}
                            className='relative w-[28%] h-full grayscale hover:grayscale-0 flex justify-center items-center hover:cursor-pointer'
                        >
                            <h1 className='text-xl font-bold absolute'>CATALOG</h1>
                            <img src={Catalogue} alt="catalogue" className='w-full h-full object-fill' />
                        </div>
                        <div
                            onClick={() => {

                            }}
                            className='relative w-[28%] h-full grayscale hover:grayscale-0 flex justify-center items-center hover:cursor-pointer'
                        >
                            <h1 className='text-xl font-bold absolute'>IMAGE</h1>
                            <img src={ImagePic} alt="image" className='w-full h-full object-fill' />
                        </div>
                        <div
                            onClick={() => {

                            }}
                            className='relative w-[28%] h-full grayscale hover:grayscale-0 flex justify-center items-center hover:cursor-pointer'
                        >
                            <h1 className='text-xl font-bold absolute'>VIDEO</h1>
                            <img src={VideoPic} alt="video" className='w-full h-full object-fill' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-full h-[15vh] bg-[#0A0A0A] flex justify-center items-center'>
                <h1 className='text-textColor'>
                    © 2025 All Rights Reserved.
                </h1>
            </section>

        </div>
    )
}

export default HomePage;
