import React from "react";
import '../utils/style/index.css'
import AntDTheme from "@/components/antdTheme";
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head/>
            <body >
            <AntDTheme>
            {children}
            </AntDTheme>
            </body>
        </html>
    )
}
