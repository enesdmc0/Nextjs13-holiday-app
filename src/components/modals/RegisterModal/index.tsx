"use client";
import React from 'react';
import Modal from "@/components/modals/Modal";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {FcGoogle} from 'react-icons/fc'
import Input from "@/components/Input";
import Button from "@/components/Button";
import {useAtom} from "jotai";
import {registerAtom} from "@/atoms/ModalAtoms";
import axios from "axios";
import {toast} from "react-toastify";
import {signIn} from "next-auth/react";
import {GrGithub} from "react-icons/gr";

const RegisterModel = () => {
    const [menuToggle, setMenuToggle] = useAtom(registerAtom)
    const {register, handleSubmit, watch, formState: {errors}} = useForm<FieldValues>({
        defaultValues: {name: "", email: "", password: ""}
    })

    const closeModal = () => {
        setMenuToggle(prev => !prev)
    }

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        axios.post("/api/register", data)
            .then(() => {
                closeModal()
                toast.success("Register işlemi başarılı.")
            })
            .catch((err: any) => {
                toast.error("Register başarısız")
            })
    }

    if (!menuToggle) {
        return null
    }
    const bodyElement = (
        <div>
            <Input id="name" type="text" placeholder="Name" required register={register} errors={errors}/>
            <Input id="email" type="text" placeholder="Email" required register={register} errors={errors}/>
            <Input id="password" type="password" placeholder="Password" required register={register} errors={errors}/>
        </div>
    )

    const footerElement = (
        <div className="mt-5">
            <Button btnLabel="Google ile giriş yap" onSubmit={() => {signIn("google")}} outline icon={FcGoogle}/>
            <Button btnLabel="Github ile giriş yap" onSubmit={() => {signIn("github")}} outline icon={GrGithub}/>
        </div>
    )

    return (
        <div>
            <Modal footerElement={footerElement} bodyElement={bodyElement} isOpen onClose={closeModal}
                   onSubmit={handleSubmit(onSubmit)} btnLabel="Register" title="Register"/>
        </div>
    );
};

export default RegisterModel;
