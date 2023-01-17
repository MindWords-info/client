
import AntDTheme from "@/components/antdTheme";
import {getData} from "@/service/test";
import Postlist from "@/components/postlist";


export default async function Home() {
    const post = await getData({pagination:{pageNumber:1,limitPerPage:2}})
    console.log(post)
    return (
        <AntDTheme>

                <Postlist post={post}></Postlist>
        </AntDTheme>
    )
}
