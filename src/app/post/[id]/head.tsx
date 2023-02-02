import {getPost} from "@/service/post";

export default async function Head({params}: { params: { id: any } }) {
    const post = await getPost({postUrl: (params.id).trim()})
    return (
        <>
            <title>{post.data.title}</title>
            <meta content="width=device-width, initial-scale=1" name="viewport"/>
            <meta name="description" content={post.data.shortDescription}/>
            <link rel="icon" href="/favicon.ico"/>

            {/*Og*/}
            <meta property="og:url"
                  content={`https://mindwords.info/post/${post.data.slug}`}/>
            <meta property="og:type" content="article"/>
            <meta property="og:title" content={post.data.title}/>
            <meta property="og:description" content={post.data.shortDescription}/>
            <meta property="og:image"
                  content={`https://www.mindwords.info/api/og?image=https://api.mindwords.xyz/files/uploads/${post.data.images?.coverImage || ''}&title=${post.data.title}`}/>
            <meta property="og:site_name" content="MindWords"/>

            {/*twitter*/}
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content={post.data.title}/>
            <meta name="twitter:description" content={post.data.shortDescription}/>
            <meta name="twitter:site" content={`https://mindwords.info/post/${post.data.slug}`}/>
            <meta name="twitter:image" content={`https://www.mindwords.info/api/og?image=https://api.mindwords.xyz/files/uploads/${post.data.images?.coverImage || ''}&title=${post.data.title}`}/>
            <meta name="twitter:type" content="article"/>
        </>
    )
}
