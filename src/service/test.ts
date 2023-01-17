import "server-only";
export async function getData({pagination}: { pagination: {pageNumber:number,limitPerPage:number} }) {
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
    const res = await fetch('http://localhost:8000/post',
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