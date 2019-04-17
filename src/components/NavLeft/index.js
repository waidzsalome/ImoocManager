import React from 'react';
import MenuConfig from './../../resource/menuConfig';
import { Menu, Icon } from 'antd';
import './index.less'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class NavLeft extends React.Component {

    constructor(props) {
        super(props);
        this.state=({
            menuTreeNode:this.renderMenu(MenuConfig)
        });
    }

    //菜单渲染
    renderMenu = (data) => {
        return data.map((item)=>{
            if(item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                {item.title}
            </Menu.Item>
        })
    };

    render() {
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="" />
                    <h1>Imooc MS</h1>
                </div>
                <Menu
                    theme="dark"
                >
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }

}