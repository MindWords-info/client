'use client';

import React from "react";
import {Avatar, Card, Spin} from 'antd';
import Image from "next/image";
import {UserOutlined} from "@ant-design/icons";

export default function Post({
    post,
}: {
post: any
}) {
    let coverImage = ''
    if(post?.images?.coverImage){
        coverImage = `https://api.mindwords.xyz/files/uploads/${post.images.coverImage}`
    }
    const date = new Date(post.createdAt).toLocaleDateString('en-EN', {  year:"numeric", month:"short", day:"numeric"})
    return (
        <>
        <Card className="p-0">
                {image(coverImage)}
               <div className="p-6">
                   <div>
                       <div className="flex gap-3 items-center">
                           <Avatar size="large" icon={<UserOutlined />} />
                          <div>
                              <h6 className="text-[12px]">{post.author?.userName || ''}</h6>
                              <h6 className="text-[12px]">Posted {date}</h6>
                          </div>
                       </div>

                       <h1 className="font-extrabold">{post.title}</h1>
                       <br/>
                   </div>
                   <div dangerouslySetInnerHTML={{__html:post.detailsHtml}}></div>
               </div>
               </Card>
        </>
    );
}

function image(coverImage:string){
    if(coverImage !=='') {
        return<Image
            src={coverImage}
            alt=''
            width={851}
            height={851}
            className='w-full'
            blurDataURL={coverImage}
            placeholder="blur"
        />;
    }
    else {
        return <></>;
    }
}