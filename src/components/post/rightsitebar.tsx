'use client';

import React from "react";
import {Avatar, Card, Divider} from "antd";
import {UserOutlined} from "@ant-design/icons";
import SocialMedias from "@/components/post/social-media-link/socialmedias";

export default function Rightsitebar({
                                         author,
                                     }: {
    author: any
}) {
    return (
        <>
            <Card style={{minWidth:300,width:'100%'}} className="md:w-xs ">
                <div>
                    <div className="flex justify-center">
                        <Avatar
                            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                            icon={<UserOutlined />}
                        />

                    </div>
                    <h4 className="flex justify-center">{author?.userName || ''}</h4>
                    <div className="flex justify-center">{author?.email || ''}</div>
                    <div>{author?.bio || ''}</div>
                    <br/>
                    <SocialMedias socialMedias={[
                        {
                            platform: "FACEBOOK",
                            link: "https://www.facebook.com/shafipolu/",
                        }
                    ]}/>
                    <Divider></Divider>
                    <div></div>
                </div>
            </Card>
        </>
    );
}