import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';

//import NewItem from  './component/new_item';
import NewItem from  './component/card_item';

import {Input, Layout, Menu, Breadcrumb, Icon, Avatar, Col, Row, Button} from 'antd';
import openNotificationWithIcon from './utils/openNotificationUtils';
const {Header, Content, Footer, Sider} = Layout;
const Search = Input.Search;
const SubMenu = Menu.SubMenu;

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			collapsed: false,
		};
	}
	
	onCollapse = (collapsed) => {
		console.log(collapsed);
		this.setState({collapsed});
	};
	
	render() {
		return (
			<Layout style={{minHeight: '100vh'}}>
				
				<Sider
					collapsible
					collapsed={this.state.collapsed}
					onCollapse={this.onCollapse}>
					
					<Avatar icon="user" className="center-block" style={
						{
							marginBottom: '20px',
							marginTop: '18px'
						}
					}
					/>
					
					<Search
						className={this.state.collapsed ? "hidden" : "show center-block" }
						placeholder="input search text"
						onSearch={value => console.log(value)}
						
						style={
							{
								marginBottom: '8px',
								marginTop: '8px'
							}
						}
					/>
					<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
						
						<Menu.Item key="1">
							<Icon type="pie-chart"/>
							<span>Option 1</span>
						</Menu.Item>
						<Menu.Item key="2">
							<Icon type="desktop"/>
							<span>Option 2</span>
						</Menu.Item>
						<SubMenu
							key="sub1"
							title={<span><Icon type="user"/><span>User</span></span>}>
							<Menu.Item key="3">Tom</Menu.Item>
							<Menu.Item key="4">Bill</Menu.Item>
							<Menu.Item key="5">Alex</Menu.Item>
						</SubMenu>
						<SubMenu
							key="sub2"
							title={<span><Icon type="team"/><span>Team</span></span>}>
							<Menu.Item key="6">Team 1</Menu.Item>
							<Menu.Item key="8">Team 2</Menu.Item>
						</SubMenu>
						<Menu.Item key="9">
							<Icon type="file"/>
							<span>File</span>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Header style={{background: '#fff', padding: 0}}/>
					<Content style={{margin: '0 16px'}}>
						<Breadcrumb style={{margin: '12px 0'}}>
						</Breadcrumb>
						
						{/*目前表示的是正文*/}
						<div style={{padding: 24, background: '#fff', minHeight: 360}}>
							<div>
								<Row gutter={16}>
									<Col span={12} style={{marginBottom: "12px"}}><NewItem /></Col>
									<Col span={12} style={{marginBottom: "12px"}}><NewItem /></Col>
									<Col span={12} style={{marginBottom: "12px"}}><NewItem /></Col>
									<Col span={12} style={{marginBottom: "12px"}}><NewItem /></Col>
									<Col span={12} style={{marginBottom: "12px"}}><NewItem /></Col>
									<Col span={12} style={{marginBottom: "12px"}}><NewItem /></Col>
									<Col span={12} style={{marginBottom: "12px"}}><NewItem /></Col>
									<Col span={12} style={{marginBottom: "12px"}}><NewItem /></Col>
									<Col span={12} style={{marginBottom: "12px"}}><NewItem /></Col>
									<Col span={12} style={{marginBottom: "12px"}}><NewItem /></Col>
									<Col span={12} style={{marginBottom: "12px"}}><NewItem /></Col>
								</Row>
							</div>
							<div>
								<Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
								<Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
								<Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
								<Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
							</div>
						</div>
					</Content>
					<Footer style={{textAlign: 'center'}}>
						Card-Know
					</Footer>
				</Layout>
			</Layout>
		
		);
	}
}

export default connect()(App);
