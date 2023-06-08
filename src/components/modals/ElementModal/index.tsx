"use client";
import React, {useState} from 'react';
import Modal from "@/components/modals/Modal";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {useRouter} from "next/navigation";
import {categories} from "@/components/navbar/Categories";
import Image from "next/image";
import {useAtom} from "jotai";
import {elementAtom} from "@/atoms/ModalAtoms";
import CategorySelect from "@/components/listings/CategorySelect";
import CountrySelect from "@/components/listings/CountrySelect";
import CounterSelect from "@/components/listings/CounterSelect";
import axios from "axios";
import {toast} from "react-toastify";

const ElementModal = () => {
    const [imgsSrc, setImgsSrc] = useState([]);
    const [menuToggle, setMenuToggle] = useAtom(elementAtom)
    const {register, handleSubmit, watch, setValue, reset, formState: {errors}} = useForm<FieldValues>({
        defaultValues: {
            imageSrc: "",
            category: "",
            roomCount: 1,
            location: null
        }
    })
    const router = useRouter();

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        axios.post("/api/listings", data)
            .then(() => {
                toast.success("Created Listing")
                router.refresh()
                reset()
                closeModal()
            })
            .catch((err) => {
                toast.error("listing oluşturulamadı")
                console.log(err, data, "err")
            })
    }

    const category = watch("category");
    const roomCount = watch("roomCount");
    const imageSrc = watch("imageSrc");
    const location = watch("location");

    const closeModal = () => {
        setMenuToggle(prev => !prev)
    }
    const customSetValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true
        })
    }

    const imageSelectFunc = (e: any) => {
        for (const file of e.target.files) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setImgsSrc((imgs): any => [...imgs, reader.result])
                return customSetValue("imageSrc", reader.result)
            }
            reader.onerror = () => {
                console.log(reader.error)
            }
        }
    }

    if (!menuToggle) {
        return null
    }

    const bodyElement = (
        <>
            <div className="flex items-center gap-10 mb-5">
                {
                    categories.map((cat, i) => (
                        <CategorySelect
                            key={i}
                            name={cat.name}
                            icon={cat.icon}
                            onClick={(category) => {customSetValue("category", category)}}
                            selected={category == cat.name}
                        />
                    ))
                }
            </div>
            <div className="mb-5">
                <CountrySelect
                    value={location}
                    onChange={(value) => {customSetValue("location", value)}}
                />
            </div>
            <div className="mb-5">
                <CounterSelect
                    title="Stok sayısı"
                    description="Stok sayısı miktarı (des)"
                    value={roomCount}
                    onChange={value => {customSetValue("roomCount", value)}}
                />
            </div>
            <input className="mb-5" multiple type="file" name="file" onChange={val => imageSelectFunc(val)}/>
            <div className="mb-5">
                <Image src={imageSrc || "https://thumb.silhouette-ac.com/t/b2/b2dd5190896b01ced813918773c18b30_t.jpeg"} alt="" width={200} height={200}/>
            </div>
        </>
    )

    return (
        <div>
            <Modal bodyElement={bodyElement} isOpen onClose={closeModal} onSubmit={handleSubmit(onSubmit)} btnLabel="Create" title="Create Listing"/>
        </div>
    );
};

export default ElementModal;
