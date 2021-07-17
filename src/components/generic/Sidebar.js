import React from 'react';
import {Link} from 'react-router-dom';
import { Menu } from 'antd';
import { MailOutlined, DashboardOutlined} from '@ant-design/icons';

const { SubMenu } = Menu;

class Sidebar extends React.Component {
    render (){
        return (
            <Menu
                onClick={this.handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['/']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                <Menu.Item key="/">
                    <DashboardOutlined />
                        <Link to="/">
                            داشبورد
                        </Link>
                </Menu.Item>

                <SubMenu key="sub1" icon={<MailOutlined />} title="مدیریت موجودیت ها">
                    <Menu.ItemGroup key="g1" title="کاربران">
                        <Menu.Item key="1">
                            <Link to="/person">
                                لیست کاربران
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/person/new">
                                افزودن کاربر
                            </Link>
                        </Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup key="g2" title="مقالات">
                        <Menu.Item key="3">
                            <Link to="/post">
                                لیست مقالات
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to="/post/new">
                                افزودن مقاله
                            </Link>
                        </Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
            </Menu>
        );
    }
}

export default Sidebar