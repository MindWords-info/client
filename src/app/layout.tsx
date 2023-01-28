import React from "react";
import { Poppins } from '@next/font/google';
import '../utils/style/index.css'
import AntDTheme from "@/components/antdTheme";
const poppins =  Poppins({weight: "400"});
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={poppins.className}>
        <head/>
            <body >
            <AntDTheme>
            {children}
            </AntDTheme>
            </body>
        </html>
    )
}
