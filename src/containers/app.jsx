import { Router, Route, } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import React, { Component } from 'react';
import globalCss from '../assets/css/global.css';
import mainCss from '../assets/css/main.css';
import { hot } from 'react-hot-loader';
import { Menu, Icon } from 'antd';
import Index from '../routes/Index';
import Content from '../routes/Content';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const history = createHistory();

class App extends React.Component {
	render() {
		return (
			<div className="App">
                <Menu
                    style={{ width: '15%', height: '100vh', float: 'left' }}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="mail" />
                                <span>Navigation One</span>
                            </span>
                        }
                    >
                        <MenuItemGroup key="g1" title="Item 1">
                            <Menu.Item key="1" onClick={() => history.push({
                                pathname: "/content"
                            })}>笔记</Menu.Item>
                            <Menu.Item key="2">Option 2</Menu.Item>
                        </MenuItemGroup>
                        <MenuItemGroup key="g2" title="Item 2">
                            <Menu.Item key="3">Option 3</Menu.Item>
                            <Menu.Item key="4">Option 4</Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                    </Menu>
				<div className="right_item" style={{ width: '85%', float: 'right' }}>
					<Router history={history}>
                        <div style={{ marginLeft : '20px',paddingTop: '20px'}}>
							<Route exact path="/" component={Index} />
							<Route exact path="/content" component={ Content } />
						</div>
					</Router>
				</div>
			</div>
		);
	}
}

export default hot(module)(App);
