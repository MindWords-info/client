import 'antd/es/style/reset.css'
import React from "react";
import * as process from "process";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head/>
            <body>{children}</body>
        </html>
    )
}
