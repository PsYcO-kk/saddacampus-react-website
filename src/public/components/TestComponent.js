import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

let Bold = Quill.import('formats/bold');
Bold.tagName = 'b';
Quill.register(Bold, true);

export default class RichTextEditor extends React.Component {
	constructor(props) {
		super(props);
		this.state = { html: '' };
	}

	handleChange = (value) => {
		this.setState({ html: value });
		console.log(this.state.html);
	}

	render() {
		const modules = {
			toolbar: [
				[{ 'font': [] }],
				[{ 'header': [1, 2, 3, false] }],
				['bold', 'italic', 'underline','strike'],
				[{'script': 'sub'}, {'script': 'super'}],
				[{ 'color': [] }, { 'background': [] }],
				[{'list': 'ordered'}, {'list': 'bullet'}],
				[{'indent': '-1'}, {'indent': '+1'}],
				[{ 'align': [] }],
				['blockquote', 'code-block'],
				['link', 'image', 'video'],
				['clean']
			],
		};

		const formats = [
			'font',
			'header',
			'bold', 'italic', 'underline', 'strike',
			'script',
			'color', 'background',
			'list', 'indent', 'align',
			'blockquote', 'code-block',
			'link', 'image'
		];

		return (
			<ReactQuill
				theme='snow'
				placeholder={this.props.placeholder ? this.props.placeholder : 'Write something...'}
				modules={modules}
				formats={formats}
				value={this.state.html}
				onChange={this.handleChange}
			/>
		);
	}
}
