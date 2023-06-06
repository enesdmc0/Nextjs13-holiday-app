"use client";
import {GiHamburgerMenu} from "react-icons/gi"
import {useState} from 'react';
import Image from "next/image";
import UserMenuItem from "@/components/navbar/UserMenuItem";

const UserMenu = () => {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <div onClick={() => setOpenMenu(prev => !prev)} className="relative flex items-center cursor-pointer">
            <GiHamburgerMenu size={25}/>
            <Image
                src={"https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png"}
                alt="User"
                width={40}
                height={40}
            />
            {openMenu && (
                <div className="absolute bg-white shadow-lg shadow-gray-500 w-[150px] top-16 right-0">
                    <UserMenuItem
                        name="Sign In"
                        onClick={() => {}}
                    />
                    <UserMenuItem
                        name="Sign Up"
                        onClick={() => {}}
                    />
                </div>
            )}
        </div>
    );
};

export default UserMenu;
