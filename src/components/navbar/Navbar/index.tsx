"use client";

import React from 'react';
import Logo from "@/components/navbar/Logo";
import Categories from "@/components/navbar/Categories";
import UserMenu from "@/components/navbar/UserMenu";
import {User} from "@prisma/client";

const Navbar = ({user}: {user: User | any | undefined}) => {
    return (
        <div className="flex items-center justify-between h-16 bg-gradient-to-r from-[#2F234B] t0-[#F74A8A] px-1 md:px-7">
            <Logo/>
            <Categories/>
            <UserMenu user={user}/>
        </div>
    );
};

export default Navbar;
