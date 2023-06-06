"use client";

import {GrClose} from "react-icons/gr";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: () => void;
    btnLabel: string;
    title: string;
    bodyElement?: React.ReactElement;
    footerElement?: React.ReactElement;
}

import React from 'react';
import Button from "@/components/Button";

const Index: React.FC<ModalProps> = ({isOpen, bodyElement, footerElement, btnLabel, onClose, onSubmit, title}) => {
    const closeFunc = () => {
        onClose()
    }
    const submitFunc = () => {
        onSubmit()
    }
    return (
        <div className="bg-black bg-opacity-70 flex fixed items-center justify-center w-full h-full z-50">
            <div className="w-1/2 bg-white rounded-lg p-5">
                <div className="flex items-center justify-between pb-3 mb-3 border-b">
                    <div className="text-2xl">{title}</div>
                    <div onClick={closeFunc}>
                        <GrClose size={25} className="cursor-pointer"/>
                    </div>
                </div>
                <Button
                    onSubmit={submitFunc}
                    btnLabel={btnLabel}
                />
            </div>
        </div>
    );
};

export default Index;
