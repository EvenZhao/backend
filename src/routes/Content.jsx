import OnlineNote from './OnlineNote.jsx';
import CreatNote from './CreatNote.jsx';
import TrashCan from './TrashCan.jsx';
import DrafBox from './DrafBox.jsx';


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            element: null
        }

    }

    componentWillMount() {
        const query = this.props.location.search;
        if (query == '?id=1'){
            this.state.element = <CreatNote />;
        } else if (query === '?id=2') {
            this.state.element =  <OnlineNote /> ;
        } else if (query === '?id=3') {
            this.state.element = <TrashCan />;
        } else if (query === '?id=4') {
            this.state.element = <DrafBox />;
        }
    }

    render(){
        return <div>{this.state.element}</div>;
    }
}