'use client';

import React from "react";
import {ConfigProvider, Layout} from 'antd';

const {Header, Content, Footer} = Layout;
export default function AntDTheme({
                                      children,
                                  }: {
    children: React.ReactNode
}) {
    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#262626',
                    },
                }}
            >
                    {children}
            </ConfigProvider>
        </>
    );
}