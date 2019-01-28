import { Router, Route, } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import React from 'react';
import '../assets/css/global.css';
import '../assets/css/main.css';
import { hot } from 'react-hot-loader';
import { Menu, Icon } from 'antd';
import Index from '../routes/Index';
import Content from '../routes/Content';
import Login from '../routes/Login';
import { jsonData } from "../../data";
const SubMenu = Menu.SubMenu;
const history = createHistory();


class App extends React.Component {
    constructor(props){
		super(props);
		this.state = {
			isShow : true,
			datas: jsonData
		}
	}

	myEvent(){
		this.setState({
			isShow: false
		})
	}

	changeDatas(){

	}

	render() {
		return (
			<Router history={ history }>
			{
				(function () {
					console.log(history.location.pathname);
					if(this.state.isShow){
						 return <Route exact path="/login" component={ () => <Login myEvent={ this.myEvent.bind(this) } history={ history }/>  } />
					}else{
						return <div className="App">
							<Menu
								style={{ width: '15%', height: '100vh', float: 'left' }}
								mode="inline" defaultSelectedKeys={['0']}
								defaultOpenKeys={['sub1']}
							>
								<Menu.Item key="0" onClick={() => history.push({ pathname: '/' })}>
									后台简介
								</Menu.Item>
								<SubMenu key="sub1" title="文章管理">
									<Menu.Item key="1" onClick={() => history.push({
												pathname: '/content',
												search: '?id=1',
											})} pushDate={ this.changeDatas.bind(this) } pre_datas= { this.state.datas }>
										新建文章
									</Menu.Item>
									<Menu.Item key="2" onClick={() => history.push({
												pathname: '/content',
												search: '?id=2',
											})}>
										已传文章
									</Menu.Item>
									<Menu.Item key="4" onClick={() => history.push({
												pathname: '/content',
												search: '?id=3',
											})}>
										草稿箱
									</Menu.Item>
									<Menu.Item key="5" onClick={() => history.push({
												pathname: '/content',
												search: '?id=4',
											})}>
										垃圾箱
									</Menu.Item>
								</SubMenu>
							</Menu>
							<div className="right_item" style={{ width: '85%', float: 'right' }}>
									<div style={{ margin: '0 20px', paddingTop: '20px'}}>
										<Route exact path="/index" component={Index} />
										<Route exact path="/content" component={Content} />
									</div>
							</div>
						</div>
					}
			}.bind(this))()
		}
	</Router>
		);
	}
}

export default hot(module)(App);
