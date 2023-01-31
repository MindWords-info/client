import React from "react";
import {Avatar} from "antd";
import {FacebookFilled} from "@ant-design/icons";

export enum SocialMediaEnum {
    WEBSITE = 'WEBSITE',
    FACEBOOK = 'FACEBOOK',
    TWITTER = 'TWITTER',
    YOUTUBE = 'YOUTUBE',
    LINKEDIN = 'LINKEDIN',
    GITHUB = 'GITHUB'
}

export default function SocialMedia({socialMedia}: {
    socialMedia: {
        platform: string,
        link: string,
    }
}) {
    if (socialMedia.platform === SocialMediaEnum.WEBSITE) {
        return (
            <>
                <a href={socialMedia.link} target="_blank" rel="noreferrer">
                    <div className="flex gap-1">
                        <Avatar shape="square" size="large" className="bg-gray-200" icon={
                            <FacebookFilled className="text-blue-500"/>
                        }/>
                    </div>
                </a>
            </>
        )
    }
    if (socialMedia.platform === SocialMediaEnum.FACEBOOK) {
        return (
            <>
                <a href={socialMedia.link} target="_blank" rel="noreferrer">
                    <div className="flex gap-1">
                        <Avatar shape="square" size="large" className="bg-gray-200" icon={
                            <FacebookFilled className="text-blue-500"/>
                        }/>
                    </div>
                </a>
            </>
        )
    }
}
