'use client';
import React from "react";
import {Card, Spin} from "antd";
import Postlist from "@/components/post/postlist";
import Image from "next/image";


export default function Loading() {
    return (
        <div className=" container mx-auto">
        <div className="flex justify-center items-center min-h-[300px]">
            <Image
                priority
                src="/loading.svg"
                height={100}
                width={100}
                alt="Follow us on Twitter"
            />
        </div>
        </div>
    )
}
