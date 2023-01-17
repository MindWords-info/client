import "server-only";
export async function getData() {
    const objectWithData = {
        "pagination":{
            "pageNumber":1,
            "limitPerPage":100
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