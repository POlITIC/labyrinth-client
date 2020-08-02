// TODO this one should be able to highlight code syntax and put value into state of parent component.
import React from 'react';
import {Button, Paper} from "@material-ui/core";
import CodeMirror from "react-codemirror";
import "codemirror/mode/javascript/javascript";
import "codemirror/lib/codemirror.css"
import 'codemirror/addon/display/autorefresh';
import 'codemirror/addon/comment/comment';
import 'codemirror/addon/edit/matchbrackets';

const fileInputID = "fileInput";

class CodeInput extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			code: "return ['left', 'up', 'right', 'down'][Math.floor(Math.random() * 4)];"
		};

		this.updateCode = this.updateCode.bind(this);

		this.mirrorRef = React.createRef();
	}

	updateCode(newCode) {
		this.setState({
			code: newCode
		});
	}

	submit() {
		this.updateCode("SDFAWDASDWQDASDAW");
	}

	readTextFile(file) {
		const reader = new FileReader();

		reader.onload = () => {
			const mirrInstance = this.mirrorRef.current.getCodeMirror();

			mirrInstance.doc.setValue(reader.result);

			this.updateCode();
		};
		reader.readAsText(file);
	};

	initFileSelector() {
		const fileSelector = document.getElementById(fileInputID);

		fileSelector.onchange = (e) => {
			const file = fileSelector.files[0];

			if (file) {
				this.readTextFile(file);
			}
		}

	}

	componentDidMount() {
		this.initFileSelector();
	}

	render() {
		return (
			<div>
				<CodeMirror
					value={this.state.code}
					onChange={this.updateCode}
					ref={this.mirrorRef}
					preserveScrollPosition={true}
					options={
						{
							smartIndent: true,
							mode: "javascript"
						}
					}
				/>

				<input
					accept="text/javascript"
					style={{display: 'none'}}
					id={fileInputID}
					multiple
					type="file"
				/>
				<label htmlFor={fileInputID}>
					<Button variant="contained" component="span">
						Load File
					</Button>
				</label>

				<Button variant="contained" label="Run">Run</Button>
				<Button
					variant="contained"
					color="primary"
					label="Submit"
					onClick={this.submit.bind(this)}
				>
					Submit
				</Button>
			</div>
		);
	}


}


export default CodeInput;
