import React from "react";
import {Poppins} from '@next/font/google';
import '../utils/style/index.css'
import AntDTheme from "@/components/antdTheme";
import Script from 'next/script'

const poppins = Poppins({weight: "400"});
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={poppins.className}>
        <head/>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-1NST83KHSS"/>
        <Script
            id='google-analytics'
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-1NST83KHSS');
                `,
            }}
        />
        <body>
        <AntDTheme>
            {children}
        </AntDTheme>
        </body>
        </html>
    )
}
