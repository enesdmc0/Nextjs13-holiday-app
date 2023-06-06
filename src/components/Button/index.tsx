"use client";
import React from 'react';
import {IconType} from "react-icons";

interface ButtonProps {
    btnLabel: string;
    onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
    outline?: boolean;
    icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({btnLabel, onSubmit, icon: Icon, outline}) => {
    return <button onClick={onSubmit}
                   className={`w-full flex items-center justify-center gap-2 rounded-md py-2 text-xl ${outline ? "border border-black" : "bg-black text-white"}`}
    >{btnLabel}</button>
};

export default Button;
