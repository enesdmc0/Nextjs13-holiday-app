"use client";

import React from 'react';
import Logo from "@/components/navbar/Logo";
import Categories from "@/components/navbar/Categories";
import UserMenu from "@/components/navbar/UserMenu";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between h-16 bg-gray-100 px-7">
            <Logo/>
            <Categories/>
            <UserMenu/>
        </div>
    );
};

export default Navbar;
