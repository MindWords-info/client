'use client';

import React from "react";
import {Button, Popover, Spin} from 'antd';
import {CommentOutlined, DiffOutlined, LikeOutlined, ShareAltOutlined} from "@ant-design/icons";
const content = (
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
);
export default function Leftsidebar() {
    return (
        <>
            <Button className="flex justify-center items-center" shape="circle" icon={<LikeOutlined />} />
            <Button className="flex justify-center items-center"  shape="circle" icon={<CommentOutlined />} />
            <Popover placement="rightTop" title="Share" content={content} trigger="click">
                <Button className="flex justify-center items-center"  shape="circle" icon={<ShareAltOutlined />} />
            </Popover>
            <Button className="flex justify-center items-center"  shape="circle" icon={<DiffOutlined />} />
        </>
    );
}