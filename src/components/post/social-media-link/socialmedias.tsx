import React from "react";
import SocialMedia from "@/components/post/social-media-link/socialmedia";


export default function SocialMedias({socialMedias}: {
    socialMedias:
        {
            platform: string,
            link: string,
        }[]
}) {
    const socialMedia:any = []
    socialMedias.forEach((socialMedias:{
        platform: string,
        link: string,
    })=>{
        socialMedia.push(SocialMedia({socialMedia: socialMedias}));
    })
    return (
        <div className="flex gap-3 flex-wrap">
            {socialMedia}
        </div>
    )
}
