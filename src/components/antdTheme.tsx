'use client';
import '../utils/style/index.css'
import React, {useState} from "react";
import {AutoComplete, Input, ConfigProvider, Layout, Select, theme, SelectProps} from 'antd';
import Link from "next/link";

const {Header, Content, Footer} = Layout;


const getRandomInt = (max: number, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (query: string) =>
    new Array(getRandomInt(5))
        .join('.')
        .split('.')
        .map((_, idx) => {
            const category = `${query}${idx}`;
            return {
                value: category,
                label: (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
            <span>
              Found {query} on{' '}
                <a
                    href={`https://s.taobao.com/search?q=${query}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                {category}
              </a>
            </span>
                        <span>{getRandomInt(200, 100)} results</span>
                    </div>
                ),
            };
        });
export default function AntDTheme({
                                      children,
                                  }: {
    children: React.ReactNode
}) {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const [options, setOptions] = useState<SelectProps<object>['options']>([]);
    const handleSearch = (value: string) => {
        setOptions(value ? searchResult(value) : []);
    };

    const onSelect = (value: string) => {
        console.log('onSelect', value);
    };

    const headerStyle = {
        '@media (max-width: 640px)': {
            display: 'none',
        },

    };
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
                        position: 'sticky', top: 0, zIndex: 1,
                    }
                    } className='flex items-center justify-between gap-6'>
                        <Link href="/">
                            <div className="md:text-2xl font-extrabold">
                                MindWords
                            </div>
                        </Link>
                        <AutoComplete
                            dropdownMatchSelectWidth={252}
                            style={{ width: 300 }}
                            options={options}
                            onSelect={onSelect}
                            onSearch={handleSearch}
                        >
                            <Input.Search size="large" placeholder="Search Post..." />
                        </AutoComplete>
                    </Header>
                    <Layout>
                        <Content style={{ margin: '24px 16px 0' }}>
                            <div style={{ minHeight: 300, background: colorBgContainer }}>{children}</div>
                        </Content>

                    </Layout>
                    <Footer style={{ textAlign: 'center' }}>Mind Words ©2023 Design and Dev Shafiul Islam</Footer>
                </Layout>

            </ConfigProvider>

        </>
    );
}