export default function Head() {
    return (
        <>
            <title>MindWords - A place Where i can express myself</title>
            <meta content="width=device-width, initial-scale=1" name="viewport"/>
            <meta name="description" content="MindWord is a blog site where those who are curious can find things to read."/>
            <link rel="icon" href="/favicon.ico"/>

            {/*Og*/}
            <meta property="og:url"
                  content="https://mindwords.info"/>
            <meta property="og:type" content="article"/>
            <meta property="og:title" content="MindWords"/>
            <meta property="og:description" content="MindWord is a blog site where those who are curious can find things to read."/>
            <meta property="og:image"
                  content="/baseOg.png"/>
            <meta property="og:site_name" content="MindWords" />

            {/*twitter*/}
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content="MindWords"/>
            <meta name="twitter:description" content="MindWord is a blog site where those who are curious can find things to read."/>
            <meta name="twitter:site" content="https://mindwords.info"/>
            <meta name="twitter:image" content="/baseOg.png"/>
        </>
    )
}
