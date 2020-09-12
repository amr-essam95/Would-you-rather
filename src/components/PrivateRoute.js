import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, authedUser, ...rest }) => {

  	console.log('aaaaaaaaaaaaaaaaaa', authedUser)
	const isLoggedIn = authedUser !== ''
    console.log('isLoggedIn', isLoggedIn)
          
    return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
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