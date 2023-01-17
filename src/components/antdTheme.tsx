'use client';

import React from "react";
import {Radio, ConfigProvider, Space} from 'antd';
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
                <Radio>Radio</Radio>
            {children}
            </ConfigProvider>
        </>
    );
}