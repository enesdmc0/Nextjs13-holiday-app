"use client";
import {FaUmbrellaBeach, FaCampground, FaHotel} from "react-icons/fa";
import {MdOutlineVilla} from "react-icons/md"

export const categories = [
    {name: "Tatil-Köyü", icon: FaUmbrellaBeach},
    {name: "Kamp", icon: FaCampground},
    {name: "Otel", icon: FaHotel},
    {name: "Villa", icon: MdOutlineVilla},
]

import React from 'react';
import CategoriesItem from "@/components/navbar/CategoriesItem";
import {useSearchParams} from "next/navigation";

const Categories = () => {
    const searchParams = useSearchParams()
    const urlItem = searchParams?.get("category");
    return (
        <div className="flex items-center md:gap-5 gap-2">
            {categories?.map(item => (
                <CategoriesItem key={item.name} name={item.name} icon={item.icon} selected={urlItem === item.name} />
            ))}
        </div>
    );
};

export default Categories;
