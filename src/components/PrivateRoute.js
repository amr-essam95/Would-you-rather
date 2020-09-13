import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, authedUser, ...rest }) => {

	const isLoggedIn = authedUser !== ''
          
	return (
		<Route
			{...rest}
			render={props =>
				isLoggedIn ? (
					<Component {...props} />
				) : (
					<Redirect to={{ pathname: '/login', state: { from: props.location } }} />
				)
			}
		/>
	)
}

function mapStateToProps ({ authedUser }) {
	return {
		authedUser
	}
}

export default connect(mapStateToProps)(PrivateRoute)