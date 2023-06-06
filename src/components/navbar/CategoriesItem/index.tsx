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
        <div onClick={() => router.push(`?category=${name}`)} className={` ${selected ? "border-b-2 border-b-purple-700 text-purple-800" : ""} flex items-center gap-2 cursor-pointer`}>
            <div><Icon size={20}/></div>
            <div className="tracking-wider">{name}</div>
        </div>
    );
};

export default CategoriesItem;
