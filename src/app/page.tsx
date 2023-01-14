async function getData() {
    const res = await fetch('https://api.mindwords.info/post/this-is-a-title', {
        cache: "force-cache",
        next: {revalidate: 30}
    })
  return res.json()
}

export default async function Home() {
  const post = await getData()
    return (
        <div>{post.data.details}</div>
    )
}
