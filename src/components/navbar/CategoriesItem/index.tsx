"use client";

import {IconType} from "react-icons";
import React from "react";
import {useRouter} from "next/navigation";

type CategoriesItemProps = {
    name: string,
    icon: IconType,
    selected: boolean
}

const CategoriesItem: React.FC<CategoriesItemProps> = ({name, icon: Icon, selected}) => {
    const router = useRouter()
    return (
        <div onClick={() => router.push(`?category=${name}`)} className={` ${selected ? "border-b-2 border-b-purple-950 text-purple-950" : "text-white"} font-bold text-sm sm:text-lg flex items-center gap-2 cursor-pointer`}>
            <div className="hidden sm:block"><Icon size={18}/></div>
            <div className=" md:tracking-normal tracking-wider">{name}</div>
        </div>
    );
};

export default CategoriesItem;
