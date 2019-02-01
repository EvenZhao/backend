import React from 'react';
import {
    Form,
    Input,
    Icon,
    Checkbox,
    Button,
} from 'antd';

const { FormItem } = Form;

class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                // window.state = false;
                // console.log(global.constants.isShow);
                // global.constants.isShow = false;
                setTimeout(this.props.myEvent,0);
                this.props.history.push({ pathname: 'index' })

            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form" style={{width: "300px", margin: "0 auto", position: "relative", right: "150px"}}>
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </FormItem>
            </Form>
        )
    }
}
export default Form.create({
    // 子节点值发生变化时触发
    onFieldsChange(props, fields) {
    },
    // 任一表单域发生改变时的回调
    onValuesChange(_, values) {
    },
    // 把父组件的属性映射到表单项上
    mapPropsToFields(props) {
        return {
            a: Form.createFormField({
                value: props.a,
            }),
        };
    },
})(MyForm);