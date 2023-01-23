'use client';
import '../../utils/style/index.css'
import {Avatar, Card, Spin, Tag} from "antd";
import React, {useState} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {UserOutlined} from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";

export default function Postlist({
                                      postData,
                                  }: {
    postData: any
}) {
    const list: JSX.Element[] = []

    postData.data.posts.forEach((post:any) => {
        const date = new Date(post.createdAt).toLocaleDateString('en-EN', {  year:"numeric", month:"short", day:"numeric"})
        list.push(gg(post))
    })
    const [items, setItems] = useState(list);
    const [pageNumber, setPageNumber] = useState(2);
    async function fetchMoreData(){

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
        const res = await fetch(`https://api.mindwords.xyz/post`,
            {
                body:JSON.stringify(objectWithData),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

        const postsRes = await res.json()
        postsRes.data.posts.forEach((post:any) => {
            oldpost.push(gg(post))
        })
        setPageNumber(pageNumber+1)
        setItems(oldpost)
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

function gg(post:any){

    const date = new Date(post.createdAt).toLocaleDateString('en-EN', {  year:"numeric", month:"short", day:"numeric"})
    let coverImage = ''
    if(post.images.coverImage){
        coverImage = `https://api.mindwords.xyz/files/uploads/${post.images.coverImage}`
    }
    let slug ='/post/'
    if(post.slug){
        slug  = '/post/'+post.slug
    }
    return(
        <Card>
            <div className="flex gap-1 items-center mb-3">
                <Avatar size="small" icon={<UserOutlined />} />
                <p>{post.author.userName}</p>
                <p>.</p>
                <div>{date}</div>
            </div>
            <Link href={slug}>
                <div className="grid grid-cols-8  mb-3">

                    <div className="col-span-6">
                        <h1 className="text-2xl font-extrabold mb-1.5">{post.title}</h1>
                        <p>{post.shortDescription}</p>
                    </div>
                    <div className="col-span-2">
                        {image(coverImage)}
                    </div>
                </div>
            </Link>
            <Tag>Tag 1</Tag>
        </Card>
    )
}
function image(coverImage:string){
    if(coverImage) {
        return<Image
            src={coverImage}
            alt=''
            width={160}
            height={160}
            blurDataURL={coverImage}
            placeholder="blur"
        />;
    }
    else {
        return <></>;
    }
}