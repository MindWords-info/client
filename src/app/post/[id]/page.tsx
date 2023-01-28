import React from "react";
import { getPost } from "@/service/post";
import Leftsidebar from "@/components/post/leftsidebar";
import Post from "@/components/post/post";
import Rightsitebar from "@/components/post/rightsitebar";

export default async function Loader({ params }: { params: { id: any } }) {
  const post = await getPost({ postUrl: params.id.trim() });

  return (
    <div className="md:container md:mx-auto">
      <div className="grid md:grid-cols-12 grid-cols-1 md:gap-6 space-y-6">
        <div className="col-span-1">
          <nav className="space-y-2 md:fixed  hidden md:block">
            <Leftsidebar></Leftsidebar>
          </nav>
        </div>
        <div className="col-span-8 post">
          <Post post={post.data}></Post>
        </div>
        <div className="col-span-3 "> <div className="space-y-2 md:fixed md:max-w-xs">
          <Rightsitebar></Rightsitebar>
        </div></div>
      </div>
      <nav className="space-y-2 fixed visible md:hidden bottom-0 bg-white w-full">
        <Leftsidebar></Leftsidebar>
      </nav>
    </div>
  );
}
