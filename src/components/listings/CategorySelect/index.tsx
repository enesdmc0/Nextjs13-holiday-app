"use client";
import React from 'react';
import {IconType} from "react-icons";

interface CategorySelectProps {
    name: string;
    icon: IconType;
    onClick: (category: string) => void
    selected: boolean
}

const CategorySelect: React.FC<CategorySelectProps> = ({selected, onClick, name ,icon: Icon}) => {
    return (
        <div onClick={() => onClick(name)} className={`${selected ? "text-purple-900 border-b-2 border-b-purple-950" : "text-gray-500 border-b-2 border-b-white"} pb-2 cursor-pointer flex items-center gap-2`}>
            <Icon size={25}/>
            <div>{name}</div>
        </div>
    );
};

export default CategorySelect;
