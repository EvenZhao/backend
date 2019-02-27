import React from 'react';
import ReactMarkdown from 'react-markdown';
import { 
    Input, 
    Button, 
    Radio, 
    Select, 
} from 'antd';

import style from '../manageArticle/model/new/style';

const { TextArea } = Input;
const { Option } = Select;

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            title: '',
            tag: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    handleChange(event, key) {
        this.state[key] = event.target.value;
        this.setState({ ...this.state });
    }

    handleClear() {
        this.setState({
            value: '',
        });
    }

    render() {
        return(
            <>
                <label>文章标题</label>
                <Input placeholder="title" onChange={ event => { this.handleChange(event, 'title') } }  />
                <div style={ style.wrap }>
                    <h3 style={ style.title }>
                        文章内容（ReactMarkdown）
                    </h3>
                    <TextArea
                        value={ this.state.value }
                        style={ style.markDownTextarea }
                        onChange={ event => { this.handleChange(event, 'value') } }
                    />
                    <div style={ style.markdownDiv }>
                        <ReactMarkdown source={ this.state.value } escapeHtml={ false } />
                    </div>
                </div>

                <label>标签选项</label>
                <Select 
                    value={ this.state.tag }
                    style={ style.select }
                    onChange={ this.changeSelect }
                >
                    {
                        (function() {
                            const options = [
                                {
                                    label: 'JS',
                                    value: 0,
                                },
                                {
                                    label: 'CSS',
                                    value: 1,
                                },
                                {
                                    label: 'Others',
                                    value: 2,
                                },
                            ];
                            return options.map((item,index) => {
                                return (
                                     <Option value={ item.value } key={ index }>{ item.label }</Option>
                                )
                            })
                        })()
                    }
                </Select>

                <Radio.Group style={ style.radioGroup }>
                    <Radio.Button value="large" onClick={ this.handleClear }>
                        清空
                    </Radio.Button>
                <Radio.Button value="default">
                        保存至草稿箱
                    </Radio.Button>
                    <Radio.Button value="small">发布</Radio.Button>
                </Radio.Group>
            </>
        );
    }
}