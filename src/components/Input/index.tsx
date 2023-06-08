"use client";
import React from 'react';
import {FieldErrors, FieldValues, UseFormRegister} from "react-hook-form";

interface InputProps {
    id: string;
    type: string;
    placeholder: string;
    required: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({errors, id, type, register, required, placeholder}) => {
    return (
        <div className="mb-3">
            <input
                className={`${errors[id] ? "border border-red-500" : "border border-gray-500"} rounded-md w-full px-3 py-2 text-lg outline-none`}
                {...register(id, {required})}
                type={type}
                placeholder={placeholder}
                id={id}
            />
        </div>
    )
};

export default Input;
