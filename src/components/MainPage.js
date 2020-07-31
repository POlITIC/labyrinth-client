import React from 'react';
import Container from "@material-ui/core/Container";
import {Button, Paper} from "@material-ui/core";
import {connect} from "react-redux";

const mapStateToProps = ({loginData}) => {
	return {
		userName: loginData.name
	}
};

class MainPage extends React.Component{
	render() {
		return (
			<Container maxWidth="sm">
				<Paper elevation={1}>
					Hello {this.props.userName}!

					<Button variant="contained" color="primary" label="Name">Create Bot</Button>
					<Button variant="contained" color="primary" label="Name">Death match</Button>
				</Paper>
			</Container>
		);
	}
}

export default connect(mapStateToProps)(MainPage);
