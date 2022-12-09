import React from "react";

const NavRight = () => {
    return (
        <nav className='p-2 items-center justify-between hidden sm:flex'>
            <a
                className='text-white ml-8 text-xl sm:text-2xl font-semibold p-1 hover:underline'
                href='#/'
            >
                List
            </a>
            <a
                className='text-white ml-8 text-xl sm:text-2xl font-semibold p-1 hover:underline'
                href='/'
            >
                Search
            </a>
            <a
                className='text-white ml-8 text-xl sm:text-2xl font-semibold p-1 hover:underline'
                href='#/'
            >
                Create
            </a>
        </nav>
    );
};

export default NavRight;
