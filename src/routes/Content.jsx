import React from 'react';
import OnlineNote from './OnlineNote';
import CreatNote from './CreatNote';
import TrashCan from './TrashCan';
import DrafBox from './DrafBox';


export default class extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            element: null,
        };
    }

    handlerClick() {

        // const backToTop = btn => {
        //     const callBack = () => {
        //         let top  = setInterval(() => {
        //             window.document.documentElement.scrollTop === 0 &&  clearInterval(top);
        //             let height =  window.document.documentElement.scrollTop;
        //             height -= 1/3*height;
        //             window.document.documentElement.scrollTop = height;
        //         },100);
        //     }
        //     btn.addEventListener('click', callBack);
        //     return callBack;

        // }


        // var a = backToTop(document.getElementById('btn'));

        // btn.removeEventl('cli', backToTop(btn));


        

    }

    componentWillMount() {
        const query = this.props.location.search;
        if (query === '?id=1') {
            this.state.element = <CreatNote />;
        } else if (query === '?id=2') {
            this.state.element = <OnlineNote />;
        } else if (query === '?id=3') {
            this.state.element = <TrashCan />;
        } else if (query === '?id=4') {
            this.state.element = <DrafBox />;
        }
    }

    componentDidMount() {
        // 监听路由变化
        this.props.history.listen(route => {
            const { search } = route;
            if (search === '?id=1') {
                this.state.element = <CreatNote />;
            } else if (search === '?id=2') {
                this.state.element = <OnlineNote />;
            } else if (search === '?id=3') {
                this.state.element = <TrashCan />;
            } else if (search === '?id=4') {
                this.state.element = <DrafBox />;
            }
        });
    }

    render() {
        return (
            <div>
                { this.state.element }
                <div style={{ height: '2000px' }} />
                <div onClick = {this.handlerClick}>backTop</div>
            </div>
        );
    }
}
