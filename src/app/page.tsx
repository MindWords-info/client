
import AntDTheme from "@/components/antdTheme";
import {getData} from "@/service/test";


export default async function Home() {
    const post = await getData()
    console.log(post)
    return (
        <AntDTheme>
            <div>sdfsd</div>
        </AntDTheme>
    )
}
