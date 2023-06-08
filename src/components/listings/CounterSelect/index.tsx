"use client";
import React from 'react';
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

interface CounterSelectProps {
    title: string;
    description: string;
    value: number;
    onChange: (value: number) => void
}

const CounterSelect: React.FC<CounterSelectProps> = ({value, title, onChange, description}) => {
    const decrement = () => {
        if (value === 1) return null
        onChange(value - 1)
    }
    const increment = () => {
        onChange(value + 1)
    }
    return (
        <div className="flex items-center justify-between border-b pb-3">
            <div className="">
                <div className="text-xl font-bold tracking-wider">{title}</div>
                <div className="text-gray-500">{description}</div>
            </div>
            <div className="flex gap-5 items-center">
               <div className="border border-gray-500 cursor-pointer hover:opacity-70 transition p-1" onClick={decrement}><AiOutlineMinus size={25}/></div>
                <div className="font-bold text-xl">{value}</div>
                <div className="border border-gray-500 cursor-pointer hover:opacity-70 transition p-1" onClick={increment}><AiOutlinePlus size={25}/></div>
            </div>
        </div>
    );
};

export default CounterSelect;
