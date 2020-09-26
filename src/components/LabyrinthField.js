// TODO this component will be taking care of pixi and canvas.
import PixiApp from "../pixi/PixiApp";

import store from "../store/store";
import React from 'react';
import {Button} from "@material-ui/core";
import {getLab} from "../ServerAPI";
import showLabAction from "../store/actionCreators/showLabAction";

const APP_CONTAINER_ID = "pixiAppContainer";

class LabyrinthField extends React.Component {

	constructor(props) {
		super(props);

	}

	componentDidMount() {
		const appContainer = document.getElementById(APP_CONTAINER_ID);

		if (appContainer) {
			appContainer.appendChild(PixiApp.view);
		}
	}

	getLabyrinth() {
		getLab(0)
			.then((response) => {
				const config = response.config;
				if (config) {
					PixiApp.showLabyrinth(config);
					store.dispatch(showLabAction(config));
				}
			});
	}

	render() {
		return (
			<div className="App">
				<Button variant="contained" color="primary" label="getLab"
						onClick={this.getLabyrinth.bind(this)}>Render</Button>
				<div id={APP_CONTAINER_ID}></div>
			</div>
		);
	}
}

export default LabyrinthField;
