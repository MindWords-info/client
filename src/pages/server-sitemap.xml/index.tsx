import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import {getPosts} from "@/service/post";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const response = await getPostsSitemap({pagination:{pageNumber:1,limitPerPage:99999}})
    const capsules: any[] = await response.data.posts;

    const fields: ISitemapField[] = capsules.map((capsule) => ({
        loc: `https://www.mindwords.info/post/${capsule.slug}`,
        lastmod: new Date().toISOString(),
    }));

    return getServerSideSitemap(ctx, fields);
};
async function getPostsSitemap({pagination}: { pagination: {pageNumber:number,limitPerPage:number} }) {
    const objectWithData = {
        "pagination":{
            "pageNumber":pagination.pageNumber,
            "limitPerPage":pagination.limitPerPage
        },
        "query":{

        },
        "sort":{
            "sortBy":"createdAt",
            "sortOrder": -1
        }
    }
    const res = await fetch(`${process.env.HOST}/post`,
        {
            body:JSON.stringify(objectWithData),
            cache: "force-cache",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            next: {revalidate: 60 * 5}
        })
    return res.json()
}

export default function Site() {}