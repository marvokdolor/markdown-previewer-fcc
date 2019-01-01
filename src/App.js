import React from 'react';
import './style.css';
// import hljs from 'highlight.js';

// const Remarkable = require('remarkable');
const Marked = require('marked');

Marked.setOptions({
    renderer: new Marked.Renderer(),
    highlight: function(code) {
        return require('highlight.js').highlightAuto(code).value;
    },
    pedantic: false,
    gfm: true,
    tables: true,
    breaks: true,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
});

class App extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: placeholderText
        };
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleMarkUp() {
        // const markup = new Remarkable();
        // return { __html: markup.render(this.state.value) }
        return { __html: Marked(this.state.value) };
    }

    render() {
        return (
            <div>
                <div id="container-fluid">
                    <h1 id="title">Markdown Previewer</h1>
                    <div id="frame">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="well">
                                    <textarea
                                    id="editor"
                                    onChange={this.handleChange}
                                    defaultValue={this.state.value}
                                    />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="well">
                                    <div id="preview"
                                        dangerouslySetInnerHTML={this.handleMarkUp()}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const placeholderText =
`# Thanks for checking this out. \n---\n## Go on, enter some more markdown anywhere in the box on the left. \n\n ---\nHere's a [link](https://markdownlivepreview.com) to the site that inspired the design of this one. \n

A little code \`const cool = true;\` and a code block:
\`\`\`
constructor(props) {
    \tsuper(props);
    \tthis.state = {
        \t\tvalue: placeholderText
    \t};
\`\`\`
A list of exciting things:
  - bullets
    - etc.

A few intriguing bullets:
1. bullet
1. bullets
1. bullets
1. .

> This should be an indented block quote. like this one. _Unfortunately, the greying out effect and indentation don't appear to be working right now._

And **bold** words like that one.

And last, but not least we can embed images:
![a couple owls](https://openclipart.org/image/200px/svg_to_png/302992/1528491676.png)
`


export default App
