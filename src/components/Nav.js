import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {
  
  logout = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
  	dispatch(setAuthedUser(''))
    this.props.history.push(`/login`)
  }
  
  render() {
    const { authedUser, users } = this.props
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' activeClassName='active'>
              New Question
            </NavLink>
          </li>
              <li>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leader Board
            </NavLink>
          </li>
      		{authedUser !== '' && authedUser !== undefined && authedUser !== null &&
      			(<Fragment>
                    <li>
                        Hello, {users[authedUser].name}
                    </li>
                    <li>
                        <img src={users[authedUser].avatarURL} alt={users[authedUser].name} className="md-avatar rounded-circle smallImage"/>
                    </li>
					<li>
						<NavLink to='#' onClick={this.logout} activeClassName='active'>
							Logout
						</NavLink>
					</li>
				</Fragment>)
      		}
        </ul>
      </nav>
    )
  }
}

function mapStateToProps ({ users, authedUser }) {

	return {
      	users,
      	authedUser
    }
}

export default withRouter(connect(mapStateToProps)(Nav))