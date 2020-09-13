import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderBoardCard from './LeaderBoardCard'


class LeaderBoard extends Component {
  render() {
    
    const { users } = this.props
    const sortedUsers = Object.keys(users).sort((b,a) => (((Object.keys(users[a].answers).length)+(users[a].questions.length)) - ((Object.keys(users[b].answers).length)+(users[b].questions.length))))
    
	return (
      	<div>
      	{sortedUsers.map((userId) => (
      		<div key={userId}>
      			<LeaderBoardCard  id={userId}/>
				<br/>
			</div>
		))}
		</div>
    ) 
  }
  
}

function mapStateToProps({ users }) {
  	return {
      	users
    }
}

export default connect(mapStateToProps)(LeaderBoard)