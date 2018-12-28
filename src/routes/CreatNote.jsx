/* eslint linebreak-style: ["error", "windows"] */
import { Input, Button, Radio} from 'antd';
import ReactMarkdown from 'react-markdown';
import React from 'react';

const { TextArea } = Input;


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.clearNote = this.clearNote.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
        });
    }

    clearNote() {
        this.setState({
            value: '',
        });
        document.body.getElementsByClassName('markDownTextarea')[0].value = '';
    }

    render() {
        return (
            <div>
                <div style={{ background: '#000', height: '90vh', padding: '0 4%' }}>
                    <h3 style={{ color: '#fff', paddingLeft: '5%' }}>ReactMarkdown</h3>
                    <TextArea style={{ display: 'inline-block', height: '80vh', width: '49%', verticalAlign: 'top', marginRight: '2%' }} onChange={this.handleChange} className="markDownTextarea"/>
                    <div style={{ display: 'inline-block', height: '80vh', width: '49%', verticalAlign: 'top', padding: '0 5%', background: '#fff' }}>
                        <ReactMarkdown source={this.state.value} escapeHtml={false} />
                    </div>
                </div>
                <Radio.Group style={{ float: 'right', marginTop: '20px' }}>
                    <Radio.Button value="large" onClick={this.clearNote}>清空</Radio.Button>
                    <Radio.Button value="default">保存至草稿箱</Radio.Button>
                    <Radio.Button value="small">发布</Radio.Button>
                </Radio.Group>
            </div>
        )
    }
}