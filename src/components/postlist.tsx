'use client';

import {Avatar, Card, Divider, Spin, Tag} from "antd";
import React, {useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {UserOutlined} from "@ant-design/icons";
import Link from "next/link";
export default function Postlist({
                                      postData,
                                  }: {
    postData: any
}) {
    const list: JSX.Element[] = []

    console.log(postData)

    postData.data.posts.forEach((post:any) => {
        const date = new Date(post.createdAt).toLocaleDateString('en-EN', {  year:"numeric", month:"short", day:"numeric"})
        list.push(<Card>
            <div className="flex gap-1 items-center mb-3">
                <Avatar size="small" icon={<UserOutlined />} />
                <p>{post.author.userName}</p>
                <p>.</p>
                <div>{date}</div>
            </div>
            <Link href="/about">
            <div className="grid grid-cols-8  mb-3">

                <div className="col-span-6">
                    <h1 className="text-2xl font-extrabold mb-1.5">{post.title}</h1>
                    <p>{post.shortDescription}</p>
                </div>
                <div className="col-span-2">
                    <img className="rounded max-h-[10rem] max-w-[10rem]" src={post.images.coverImage? `https://api.mindwords.info/files/uploads/${post.images.coverImage}` : 'https://shafi-org.github.io/portfolio/assets/img_1.png'} alt=""/>
                </div>
            </div>
            </Link>
            <Tag>Tag 1</Tag>
        </Card>)
    })
    const [items, setItems] = useState(list);
    const [pageNumber, setPageNumber] = useState(2);
    async function fetchMoreData(){

        setTimeout(async () => {
            const oldpost = items
            const objectWithData = {
                "pagination":{
                    "pageNumber":pageNumber,
                    "limitPerPage":2
                },
                "query":{

                },
                "sort":{
                    "sortBy":"createdAt",
                    "sortOrder": -1
                }
            }
            const res = await fetch('http://localhost:8000/post',
                {
                    body:JSON.stringify(objectWithData),
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })

            const postsRes = await res.json()
            postsRes.data.posts.forEach((post:any) => {
                const date = new Date(post.createdAt).toLocaleDateString('en-EN', {  year:"numeric", month:"short", day:"numeric"})
                oldpost.push(<div>
                    <div className="flex gap-1 items-center mb-3">
                        <Avatar size="small" icon={<UserOutlined />} />
                        <p>{post.author.userName}</p>
                        <p>.</p>
                        <div>{date}</div>
                    </div>
                    <Link href="/about">
                        <div className="grid grid-cols-8 gap-6 mb-3">

                            <div className="col-span-6">
                                <h1 className="text-2xl font-extrabold mb-1.5">{post.title}</h1>
                                <p>{post.shortDescription}</p>
                            </div>
                            <div className="col-span-2">
                                <img className="rounded max-h-[10rem] max-w-[10rem]" src={post.images.coverImage? `https://api.mindwords.info/files/uploads/${post.images.coverImage}` : 'https://shafi-org.github.io/portfolio/assets/img_1.png'} alt=""/>
                            </div>
                        </div>
                    </Link>
                    <Tag>Tag 1</Tag>
                </div>)
            })
            setPageNumber(pageNumber+1)
            setItems(oldpost)
        }, 3000);
    }
    return (

            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={items.length<postData.data.count}
                loader={ <div style={{ textAlign: "center" }}>
                    <Spin />
                </div>}
            >
                {items.map((i, index) => (
                    <div key={index} className="space-y-3 py-3">
                        {items[index]}
                    </div>
                ))}
            </InfiniteScroll>
    );
}