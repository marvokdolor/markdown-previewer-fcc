import React from 'react';
import './style.css';

// const Remarkable = require('remarkable');
const Marked = require('marked');

Marked.setOptions({
    renderer: new Marked.Renderer(),
    // highlight: function(code) {
    // return require('highlight.js').highlightAuto(code).value;
    // },
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
        return { __html: Marked(this.state.value) };
    }

    render() {
        return (
            <div>
                <h2>Go on, enter some more markdown. I've given it a start.</h2>
                <textarea
                id="editor"
                onChange={this.handleChange}
                defaultValue={this.state.value}
                />
                <div id="preview"
                    dangerouslySetInnerHTML={this.handleMarkUp()}
                />
            </div>
        );
    }
}


const placeholderText =
`# Welcome to my Markdown Previewer. \n## Thanks for checking it out. \n\n Here's a [link](http://mkdolor.com) to my website. \n
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

> We can do quotes, like this one.
And **bold** words like that one.
And last, but not least we can embed images:
![freeCodeCamp Logo](https://github.com/FreeCodeCamp/assets/blob/master/assets/logos/600x72%20Free%20Code%20Camp%20logo%20for%20Medium%20publication.png?raw=true)
`

export default App
