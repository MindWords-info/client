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
            <body className="container mx-auto">

            {children}
            </body>
        </html>
    )
}
