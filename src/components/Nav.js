import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {
  
  logout = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
  	dispatch(setAuthedUser(''))
    this.props.history.push(`/`)
  }
  
  render() {
    const { authedUser } = this.props
    console.log('authedUser', authedUser)
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/home' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/new' activeClassName='active'>
              New Question
            </NavLink>
          </li>
              <li>
            <NavLink to='/board' activeClassName='active'>
              Leader Board
            </NavLink>
          </li>
          <li>
      		Hello, {this.props.authedUserName}
          </li>
		  <li>
			<img src={this.props.authedUserAvatar} alt={this.props.authedUserName} className="md-avatar rounded-circle smallImage"/>
		  </li>
          <li>
            <NavLink to='#' onClick={this.logout} activeClassName='active'>
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

function mapStateToProps ({ users, authedUser }) {

    if (!users.hasOwnProperty(authedUser)) {
    	return {}
    }
    const user = users[authedUser]
    console.log('user', user)
  	console.log('avatar', user.avatarURL)
	return {
      	authedUser,
    	authedUserName: user.name,
      	authedUserAvatar: user.avatarURL
    }
}

export default withRouter(connect(mapStateToProps)(Nav))