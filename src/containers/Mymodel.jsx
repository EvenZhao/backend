import { Modal, Form, Input } from 'antd';
import Editor from 'wangeditor';
const Mymodelo = Form.create()("Mymodel");
const FormItem = Form.Item;
class Mymodel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			content: '',
		};
		this.handleSubmit = e => {
			e.preventDefault();
			// this.props.form.validateFields((err, values) => {
			// 	if (!err) {
			// 		console.log('Received values of form: ', values);
			// 	}
			// });
		};
		//自定义表单验证规则
		this.validateEditorFrom = (rule, value, callback) => {
			//此处根据富文本框的text值进行验证，但注意富文本框中输入空格，使用‘&nbsp‘表示，此方法不能处理只输入空格的验证。
			if (this.state.editorText.trim() === '') {
				callback('不能为空');
			}
			// Note: 必须总是返回一个 callback，否则 validateFieldsAndScroll 无法响应
			callback();
		};
	}

	componentDidMount() {
		if (this.props.visible) {
			var editor = new Editor(ReactDOM.findDOMNode(this._div));
			// 使用 onchange 函数监听内容的变化，并实时更新到 state 中
			editor.customConfig.onchange = html => {
				this.setState({ editorHtml: html, editorText: editor.txt.text() });
				//将html值设为form表单的desc属性值
				this.props.form.setFieldsValue({ desc: html });
			};
			editor.create();
		}
	}

	render() {
		const { visible } = this.props;
		const { getFieldDecorator } = this.props.form;
		return (
			<Modal
				title="笔记编辑"
				visible={this.props.visible}
				onOk={this.props.onCancel}
				onCancel={this.props.onCancel}
				okText="确认"
				cancelText="取消"
			>
				<Form onSubmit={this.handleSubmit} className="login-form">
					<FormItem label="主题">
						{getFieldDecorator('title', {
							rules: [{ required: true, message: '请填写主题' }],
						})(<Input placeholder="主题" />)}
					</FormItem>
					<FormItem label="描述">
						{getFieldDecorator('desc', {
							rules: [
								{
									required: true,
									message: '请填写描述',
								},
								{
									// 使用自定义的校验规则
									validator: this.validateEditorFrom,
								},
							],
						})(<div ref={ref => (this._div = ref)} />)}
					</FormItem>
				</Form>
			</Modal>
		);
	}
}
export default Mymodelo;