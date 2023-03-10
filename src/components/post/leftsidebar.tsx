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
        <div className="flex flex-row justify-between md:flex-col gap-3 md:items-center px-6 py-3">
            <Button className="flex justify-center items-center" shape="default" icon={<LikeOutlined />} />
            <Button className="flex justify-center items-center"  shape="default" icon={<CommentOutlined />} />
            <Popover placement="rightTop" title="Share" content={content} trigger="click">
                <Button className="flex justify-center items-center"  shape="default" icon={<ShareAltOutlined />} />
            </Popover>
            <Button className="flex justify-center items-center"  shape="default" icon={<DiffOutlined />} />
        </div>
    );
}