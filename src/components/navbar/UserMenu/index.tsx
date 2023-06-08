"use client";
import {GiHamburgerMenu} from "react-icons/gi"
import {useState} from 'react';
import Image from "next/image";
import UserMenuItem from "@/components/navbar/UserMenuItem";
import {elementAtom, loginAtom, registerAtom} from "@/atoms/ModalAtoms";
import {useAtom} from "jotai";
import {User} from "@prisma/client";
import {signOut} from "next-auth/react";

const UserMenu = ({user}: {user: User | any | undefined}) => {
    const [openMenu, setOpenMenu] = useState(false);
    const [registerModal, setRegisterModal] = useAtom(registerAtom)
    const [loginModal, setLoginModal] = useAtom(loginAtom)
    const [elementModal, setElementModal] = useAtom(elementAtom)
    const toggleModalRegister = () => {
        setRegisterModal(prev => !prev)
    }
    const toggleModalLogin = () => {
        setLoginModal(prev => !prev)
    }
    const toggleModalElement = () => {
        setElementModal(prev => !prev)
    }
    return (
        <div onClick={() => setOpenMenu(prev => !prev)} className="relative gap-3 p-1 md:p-3 bg-white rounded-md flex items-center cursor-pointer">
            <div className="text-sm font-bold text-purple-950 hidden md:block">{user?.name}</div>
            <GiHamburgerMenu className="text-purple-950 hidden md:block" size={25}/>
            <Image
                src={user?.image || "https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png"}
                alt="User"
                width={40}
                height={40}
                className="object-cover rounded-full"
            />
            {openMenu && (
                <div className="absolute z-50 bg-white shadow-lg shadow-gray-500 w-[150px] top-16 right-0 rounded-md overflow-hidden">
                    {user ? (
                        <>
                            <UserMenuItem
                                name="Create Listing"
                                onClick={toggleModalElement}
                            />
                            <UserMenuItem
                                name="Favorites"
                                onClick={() => {}}
                            />
                            <UserMenuItem
                                name="Sign Out"
                                onClick={() => signOut()}
                            />
                        </>
                    ) : (
                        <>
                            <UserMenuItem
                                name="Sign In"
                                onClick={toggleModalLogin}
                            />
                            <UserMenuItem
                                name="Sign Up"
                                onClick={toggleModalRegister}
                            />
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default UserMenu;
