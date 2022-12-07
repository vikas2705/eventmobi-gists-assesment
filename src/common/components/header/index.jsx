import React from "react";
import Logo from "../logo";
import NavRight from "../nav-right";

const Header = () => {
    return (
        <div className='bg-slate-900'>
            <div className='container mx-auto flex p-4 items-center	justify-between'>
                <Logo />
                <NavRight />
            </div>
        </div>
    );
};

export default Header;
