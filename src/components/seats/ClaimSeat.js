import React, { Component } from 'react';
import { connect } from 'react-redux';
import { claimSeat } from '../../store/actions/seatActions';
import { Redirect } from 'react-router-dom';

class ClaimSeat extends Component {
	state = {
		title:"",
		content:"",
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]:e.target.value
		})
	}	
	handleSubmit = (e) => {
		e.preventDefault();
		// console.log(this.state);
		this.props.claimSeat(this.state);
	}
	render(){
		const { auth } = this.props;
		if (!auth.uid) return <Redirect to='SignIn'/>
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit} className="white">
					<h5 className="grey-text text-darken-3">Claim Seat</h5>
					
					<div className="input-field">
						<button className="btn pink lighten-1 z-depth-0">Claim</button>
					</div>
				</form>

			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		claimSeat: (seat) => dispatch(claimSeat(seat))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ClaimSeat);







