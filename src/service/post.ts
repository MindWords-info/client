import "server-only";
export async function getPosts({pagination}: { pagination: {pageNumber:number,limitPerPage:number} }) {
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

export async function getPost({postUrl}: { postUrl: string }) {
    const res = await fetch(`${process.env.HOST}/post/`+postUrl)
    const ggg = res.json()
    return ggg
}