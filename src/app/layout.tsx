import React from "react";
import '../utils/style/index.css'
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head/>
            <body >

            {children}
            </body>
        </html>
    )
}
