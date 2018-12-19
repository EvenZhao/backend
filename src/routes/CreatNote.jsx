const ReactMarkdown = require('react-markdown');
import { Input } from 'antd';
const { TextArea } = Input;


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value:''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({
            value: event.target.value
        })
    }
    render() {
        return (
            <div style={{ background: "#000", height: "90vh",padding:"0 4%"}}>
                <h3 style={{color:"#fff",paddingLeft:"5%"}}>ReactMarkdown</h3>
                <TextArea style={{ display: "inline-block", height: "80vh", width: "49%", verticalAlign: "top",marginRight:"2%"}} onChange={this.handleChange}/>
                <div style={{display:"inline-block",height:"80vh",width:"49%",verticalAlign:"top",padding:"0 5%",background:"#fff"}}>
                    <ReactMarkdown
                        source={ this.state.value }
                        escapeHtml={ false }
                    />
                </div>
            </div>
        )
    }
}