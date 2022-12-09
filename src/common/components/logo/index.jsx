import React from "react";
import logo from "../../assets/images/logo.png";

const Logo = () => {
    return (
        <a className='flex items-center	justify-center' href='/'>
            <img src={logo} alt='App logo' className='h-[40px] sm:h-[60px]' />
            <h2 className='text-white text-xl sm:text-4xl font-bold p-3'>
                GISTS
            </h2>
        </a>
    );
};

export default Logo;
