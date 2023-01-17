import 'antd/es/style/reset.css'
import React from "react";
async function getData() {
    const res = await fetch('https://api.mindwords.info/post/this-is-a-title', {
        cache: "force-cache",
        next: {revalidate: 30}
    })
    return res.json()
}
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
