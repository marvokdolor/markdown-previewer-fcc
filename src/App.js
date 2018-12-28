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
                    <h1 id="title">Marvo's Markdown Previewer</h1>
                    <div class="row">
                        <div class="col-xs-6">
                            <div class="well">
                                <textarea
                                id="editor"
                                onChange={this.handleChange}
                                defaultValue={this.state.value}
                                />
                            </div>
                        </div>
                        <div class="col-xs-6">
                            <div class="well">
                                <div id="preview"
                                    dangerouslySetInnerHTML={this.handleMarkUp()}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const placeholderText =
`# Thanks for checking this out. \n## Go on, enter some more markdown, here or anywhere on the left. \n\n Here's a [link](https://markdownlivepreview.com) to the site that inspired the design of this one. \n
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

Test text with no markdown.
>We can do quotes, like this one. _Unfortunately, the greying out effect doesn't appear to be working right now. The indentation is though. **Hooray**!_

And **bold** words like that one.
And last, but not least we can embed images:
![freeCodeCamp Logo](https://github.com/FreeCodeCamp/assets/blob/master/assets/logos/600x72%20Free%20Code%20Camp%20logo%20for%20Medium%20publication.png?raw=true)
`

export default App
