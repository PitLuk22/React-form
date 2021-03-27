import React, { Component } from 'react';
import { withRouter } from "react-router";
// Components
import MainContainer from './MainContainer';
// mui

//SweetAlert
import Swal from 'sweetalert2'

class ErrorBoundary extends Component {
	state = {
		error: null,
		errorInfo: null
	};

	componentDidCatch(error, errorInfo) {
		// Catch errors in any components below and re-render with error message
		this.setState({
			error: error,
			errorInfo: errorInfo
		})
	}

	alert = () => {
		// Popup will be shown
		Swal.fire({
			icon: 'warning',
			title: 'Oops...',
			text: 'Something went wrong!',
			confirmButtonText: 'Reload',
			preConfirm: () => {
				this.props.history.push('/');
				window.location.reload();
			}
		})
	}

	render() {
		console.log(this.props);
		if (this.state.errorInfo) {
			// Error path
			return (
				<MainContainer>
					{this.alert()}
				</MainContainer>
			);
		}
		// Normally, just render children
		return this.props.children;
	}
}

export default withRouter(ErrorBoundary);