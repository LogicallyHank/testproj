import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reserveSeat } from '../../store/actions/seatActions';
import { Redirect } from 'react-router-dom';

class ReserveSeat extends Component {
	state = {
		taken:false,
		reserved:false,
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id]:e.target.value
		})
	}	
	handleSubmit = (e) => {
		e.preventDefault();
		// console.log(this.state);
		this.setState({reserved:true})
		this.props.reserveSeat(this.state);
	}
	render(){
		const { auth } = this.props;
		if (!auth.uid) return <Redirect to='SignIn'/>
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit} className="white">
					<h5 className="white-text text-darken-3">Reserve Seat</h5>
					<div className="input-field">
						<button className="btn pink lighten-1 z-depth-0">Reserve</button>
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
		reserveSeat: (seat) => dispatch(reserveSeat(seat))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(ReserveSeat);





