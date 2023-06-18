"use client"
import React from 'react';
import Modal from "@/components/modals/Modal";
import {loginAtom} from "@/atoms/ModalAtoms";
import {useAtom} from "jotai";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import Input from "@/components/Input";
import Button from "@/components/Button";
import {FcGoogle} from "react-icons/fc";
import {signIn} from "next-auth/react";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";
import {GrGithub} from "react-icons/gr";

const LoginModal = () => {
    const router = useRouter()
    const [menuToggle, setMenuToggle] = useAtom(loginAtom)
     const {register, handleSubmit, watch, formState: {errors}} = useForm<FieldValues>({
         defaultValues: {email: "", password: ""}
     })
    const closeModal = () => {
        setMenuToggle(prev => !prev)
    }
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        signIn("credentials", {
            ...data,
            redirect: false
        }).then(callback => {
            if (callback?.ok) {
                closeModal()
                router.refresh()
                toast.success("Success..")
            }if (callback?.error){
                toast.error("Login failed..")
            }
        })
    }
    if (!menuToggle) {
        return null
    }

    const bodyElement = (
        <div>
            <Input id="email" type="text" placeholder="Email" required register={register} errors={errors}/>
            <Input id="password" type="password" placeholder="Password" required register={register} errors={errors}/>
        </div>
    )

    const footerElement = (
        <div className="mt-5 flex flex-col gap-4">
            <Button btnLabel="Google ile giriş yap" onSubmit={() => {signIn("google")}} outline icon={FcGoogle}/>
            <Button btnLabel="Github ile giriş yap" onSubmit={() => {signIn("github")}} outline icon={GrGithub}/>
        </div>
    )

    return (
        <div>
            <Modal bodyElement={bodyElement} footerElement={footerElement} isOpen onClose={closeModal} onSubmit={handleSubmit(onSubmit)} btnLabel="Login" title="Login"/>
        </div>
    );
};

export default LoginModal;
