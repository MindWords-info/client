'use client';

import React from "react";
import {Card, Spin} from 'antd';
import Image from "next/image";

export default function Post({
    post,
}: {
post: any
}) {
    let coverImage = ''
    if(post?.images?.coverImage){
        coverImage = `https://api.mindwords.xyz/files/uploads/${post.images.coverImage}`
    }
    return (
        <>
        <Card className="p-0">
                {image(coverImage)}
               <div className="p-6">
                   <div>
                       <h1 className="font-extrabold">{post.title}</h1>
                   </div>
                   <div dangerouslySetInnerHTML={{__html:post.detailsHtml}}></div>
               </div>
               </Card>
        </>
    );
}

function image(coverImage:string){
    console.log(coverImage)
    if(coverImage) {
        return<Image
            src={coverImage}
            alt=''
            width={300}
            height={300}
            className='w-full'
            blurDataURL={coverImage}
            placeholder="blur"
        />;
    }
    else {
        return <></>;
    }
}