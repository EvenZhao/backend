import React from 'react';
import { Menu } from 'antd';

import routes from '../routes/config';

const SubMenu = Menu.SubMenu;
const style_menu = {
    width: '15%', 
    height: '100vh', 
    float: 'left',
};

export default class SideMenu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectKey: ['new'],
            openKey: ['manageArticle'],
        }
    }
    
    componentWillMount() {
        const pathName = this.props.history.location.pathname;
        const arr = pathName.split("/");
        arr.shift();
        const len = arr.length;
        if (len > 1) {
            this.setState({
                selectKey: [arr[len-1]],
            });
            arr.pop();
            this.setState({
                openKey: arr,
            });
        } else {
            this.setState({
                selectKey: [arr[0]],
            })
        }
    }
    
	render() {
		return (
			<Menu
                mode="inline" 
                defaultSelectedKeys={ this.state.selectKey }
                defaultOpenKeys={ this.state.openKey }
                style={ style_menu }
            >
                {
                    routes.map(item => {
                        if (!item.children) {
                            return (
                                <Menu.Item key={ item.key } onClick={ () => this.props.history.push({ pathname: item.path }) }>
                                    { item.title }
                                </Menu.Item>
                            );
                        }
                        return (
                            <SubMenu key={ item.key } title={ item.title }>
                                {
                                    item.children.map(__item => {
                                        return (
                                            <Menu.Item key={ __item.key } onClick={ () => this.props.history.push({ pathname: __item.path }) }>
                                                { __item.title }
                                            </Menu.Item>
                                        );
                                    })
                                }
                            </SubMenu>
                        )
                    })
                }
            </Menu>
		);
	}
}
