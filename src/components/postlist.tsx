'use client';

import {Card, Spin} from "antd";
import React, {useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
export default function Postlist({
                                      post,
                                  }: {
    post: any
}) {
    const list: JSX.Element[] = []



    post.data.posts.forEach((p:any) => {
        list.push(<Card title={p.title} bordered={false} style={{ height: 500 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
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
            postsRes.data.posts.forEach((p:any) => {
                oldpost.push(<Card title={p.title} bordered={false} style={{ height: 500 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>)
            })
            setPageNumber(pageNumber+1)
            setItems(oldpost)
        }, 3000);
    }
    return (

            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={items.length<post.data.count}
                loader={ <div style={{ textAlign: "center" }}>
                    <Spin />
                </div>}
            >
                {items.map((i, index) => (
                    <div key={index}>
                        {items[index]}
                    </div>
                ))}
            </InfiniteScroll>
    );
}