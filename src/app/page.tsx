import {getPosts} from "@/service/post";
import Postlist from "@/components/post/postlist";


export default async function Home() {
    const post = await getPosts({pagination:{pageNumber:1,limitPerPage:10}})
    return (

               <div className=" container mx-auto">
                   <div className="col-span-3 px-3">
                       <Postlist postData={post}></Postlist>
                   </div>
               </div>

    )
}
