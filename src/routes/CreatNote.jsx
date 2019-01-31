/* eslint linebreak-style: ["error", "windows"] */
import { Input, Button, Radio, Select } from 'antd';
import ReactMarkdown from 'react-markdown';
import React from 'react';

const { TextArea } = Input;
const Option = Select.Option;


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            title: '',
            tag: ''
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.clearNote = this.clearNote.bind(this);
        // this.handleBlur = this.handleBlur.bind(this);
        // this.changeSelect = this.changeSelect.bind(this);

    }
    // title失去焦点
    handleBlur(event){
        this.setState({
            title: event.target.value
        })
    }

    // 内容变更
    handleChange(event) {
        this.setState({
            value: event.target.value,
        });
    }

    // 点击清空
    clearNote() {
        this.setState({
            value: '',
        });
        document.body.getElementsByClassName('markDownTextarea')[0].value = '';
    }

    // 保存至草稿箱
    saveToDrafBox() {
        let preDatas = this.props.pre_datas;
        let addData = {

        }



    }

    render() {
        return <div>
                <label>文章标题</label>
                <Input placeholder="title" onBlur="this.handleBlur"/>
				<div style={{ background: '#000', height: '50vh', padding: '0 4%', margin: '3% 0'}}>
					<h3 style={{ color: '#fff', paddingLeft: '5%' }}>文章内容（ReactMarkdown）</h3>
					<TextArea style={{ display: 'inline-block', height: '40vh', width: '49%', verticalAlign: 'top', marginRight: '2%' }} onChange={this.handleChange} className="markDownTextarea" />
					<div style={{ display: 'inline-block', height: '40vh', width: '49%', verticalAlign: 'top', padding: '0 5%', background: '#fff' }}>
						<ReactMarkdown source={this.state.value} escapeHtml={false} />
					</div>
				</div>
                <label>标签选项</label>
                <Select labelInValue defaultValue={{ key: '1' }} style={{ width: 120, display: 'block' }} onChange={this.changeSelect}>
                    <Option value="1">JS</Option>
                    <Option value="2">CSS</Option>
                    <Option value="3">Others</Option>
                </Select>
				<Radio.Group style={{ float: 'right', marginTop: '20px' }}>
					<Radio.Button value="large" onClick={this.clearNote}>
						清空
					</Radio.Button>
                <Radio.Button value="default" onClick={this.saveToDrafBox()}>
						保存至草稿箱
					</Radio.Button>
					<Radio.Button value="small">发布</Radio.Button>
				</Radio.Group>
			</div>;
    }
}