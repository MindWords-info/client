'use client';

import React from "react";
import {Card, Spin} from 'antd';
import Image from "next/image";
import EditorJsRenderer from "@/components/editorjs/EditorJsRenderer";
export default function Post({
    post,
}: {
post: any
}) {
    let coverImage = ''
    if(post?.images?.coverImage){
        coverImage = `https://api.mindwords.info/files/uploads/${post.images.coverImage}`
    }
    return (
        <>
        <Card>
                {image(coverImage)}
               <div>
                <h1>{post.title}</h1>
                </div>
                   {post.details && <EditorJsRenderer data={post.details} />}
               </Card>
        </>
    );
}

function image(coverImage:string){
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