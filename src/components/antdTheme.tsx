'use client';

import React from "react";
import {Button, ConfigProvider, Layout, theme} from 'antd';

const {Header, Content, Footer} = Layout;
export default function AntDTheme({
                                      children,
                                  }: {
    children: React.ReactNode
}) {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#262626',
                        colorInfoHover: '#262626',
                    },
                }}
            >

                <Layout>
                    <Header style={{
                        background: colorBgContainer,
                    }} className='flex items-center'>
                        <div className="text-2xl font-extrabold">
                            MindWords
                        </div>
                    </Header>
                    <Layout>
                        <Content style={{ margin: '24px 16px 0' }}>
                            <div style={{ padding: 24, minHeight: 750, background: colorBgContainer }}>{children}</div>
                        </Content>

                    </Layout>
                    <Footer style={{ textAlign: 'center' }}>Mind Words ©2023 Design and Dev Shafiul Islam</Footer>
                </Layout>

            </ConfigProvider>

        </>
    );
}