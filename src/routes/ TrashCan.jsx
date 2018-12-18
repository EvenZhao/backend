import { Button, Table, Divider} from 'antd';

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
		key: i,
		title: `Edward King ${i}`,
		time: `2018-09-11`,
		status: `js`,
	});
}
export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myModalVisible: false,
            selectedRowKeys: [],
            columns: [
                {
                    title: '主题',
                    dataIndex: 'title',
                },
                {
                    title: '标签',
                    dataIndex: 'status',
                },
                {
                    title: '编辑时间',
                    dataIndex: 'time',
                },
                {
                    title: '操作',
                    dataIndex: 'action',
                    render: (text, record) => (
                        <div>
                            <Button type="primary">编辑</Button>
                            <Divider type="vertical" />
                            <Button type="default">还原</Button>
                            <Divider type="vertical" />
                            <Button type="danger">删除</Button>
                        </div>
                    ),
                },
            ]
        };
        this.onSelectChange = this.onSelectChange.bind(this);
    }
    
    onSelectChange(selectedRowKeys) {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };
        

    render() {
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
            hideDefaultSelections: true,
            selections: [{
                key: 'all-data',
                text: 'Select All Data',
                onSelect: () => {
                    this.setState({
                        selectedRowKeys: [...Array(46).keys()], // 0...45
                    });
                },
            }, {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }
                        return true;
                    });
                    this.setState({ selectedRowKeys: newSelectedRowKeys });
                },
            }, {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }
                        return false;
                    });
                    this.setState({ selectedRowKeys: newSelectedRowKeys });
                },
            }],
            onSelection: this.onSelection,
        };
        return <div className="Content">
				<Table rowSelection={rowSelection} columns={this.state.columns} dataSource={data} title={() => '笔记列表'} footer={() => <Button type="primary">清空</Button>}/>
			</div>;
    }
}