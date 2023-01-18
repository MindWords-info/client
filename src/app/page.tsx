
import AntDTheme from "@/components/antdTheme";
import {getData} from "@/service/test";
import Postlist from "@/components/postlist";
import Navbar from "@/components/navbar";


export default async function Home() {
    const post = await getData({pagination:{pageNumber:1,limitPerPage:2}})
    console.log(post)
    return (
        <AntDTheme>
               <div className="grid grid-cols-5 container mx-auto">

                   <div className="col-span-3 border-r px-3">
                       <Postlist postData={post}></Postlist>
                   </div>
                   <div className="col-span-2 px-3">asdasd</div>
               </div>
        </AntDTheme>
    )
}
