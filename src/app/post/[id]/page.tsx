import React from "react";
import { getPost } from "@/service/post";
import Leftsidebar from "@/components/post/leftsidebar";
import Post from "@/components/post/post";
import Rightsitebar from "@/components/post/rightsitebar";

export default async function Loader({ params }: { params: { id: any } }) {
  const post = await getPost({ postUrl: params.id.trim() });

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-1">
          <nav className="space-y-2 fixed ">
            <Leftsidebar></Leftsidebar>
          </nav>
        </div>
        <div className="col-span-8 post">
          <Post post={post.data}></Post>
        </div>
        <div className="col-span-3 "> <div className="space-y-2 fixed max-w-xs">
          <Rightsitebar></Rightsitebar>
        </div></div>
      </div>
    </div>
  );
}
