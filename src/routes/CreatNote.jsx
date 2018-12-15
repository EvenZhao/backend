const ReactMarkdown = require('react-markdown');
const markdown = `
This block of Markdown contains <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>, and will require the <code>html-parser</code> AST plugin to be loaded, in addition to setting the <code class="prop">escapeHtml</code> property to false.
`


export default class extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ReactMarkdown
                source={markdown}
                escapeHtml={false}
            />
        )
    }
}