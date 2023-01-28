'use client';

import React from "react";
import {Avatar, Card, Divider} from "antd";
import {AntDesignOutlined} from "@ant-design/icons";

export default function Rightsitebar() {
    return (
        <>
            <Card style={{width:'100%'}}>
                <div>
                    <div className="flex justify-center">
                        <Avatar
                            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                            icon={<AntDesignOutlined />}
                        />

                    </div>
                    <div className="flex justify-center">Name</div>
                    <div>Bio</div>
                    <br/>
                    <div className="flex gap-3 flex-wrap">
                        <div>dgsdfsd</div>
                        <div>dgsdfsd</div>
                        <div>dgsdfsd</div>
                        <div>dgsdfsd</div>
                        <div>dgsdfsd</div>
                        <div>dgsdfsd</div>
                        <div>dgsdfsd</div>
                        <div>dgsdfsd</div>
                    </div>
                    <Divider></Divider>
                    <div></div>
                </div>
            </Card>
        </>
    );
}