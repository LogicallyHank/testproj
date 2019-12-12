import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
	const { auth } = props;
	const links = auth.uid ? <SignedInLinks/> : <SignedOutLinks/>
	return(
		<nav className="nav-wrapper blue darken-7">
			<div className="container">
				
				{ links }

			</div>
			<Link to="/" className="brand-logo">Seat Reservation System</Link>
		</nav>
		)
}

const mapStateToProps = (state) => {
	console.log(state);
	return{
		auth: state.firebase.auth,
	}
}

export default connect(mapStateToProps)(Navbar);