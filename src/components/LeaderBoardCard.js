import React, { Component } from 'react'
import { connect } from 'react-redux'


class LeaderBoardCard extends Component {
  render() {
    
    const { users, id } = this.props
    const answeredQuestions = Object.keys(users[id].answers).length
    const createdQuestions = users[id].questions.length
    
 	return (
      
      	
    
    	<div className="card size">
            <div className="card-header center">
					<h5>{users[id].name}</h5>
			</div>
			<div className="card-horizontal">
				<div className="img-square-wrapper d-flex flex-column align-items-center justify-content-center border-right">
            		<img src={users[id].avatarURL} alt={users[id].name} className="md-avatar rounded-circle mediumImage"/>
        		</div>
                <div className="card-body">
                    <h5 className="card-title">Answered Questions : {answeredQuestions}</h5>
					<h5 className="card-title">Created Questions : {createdQuestions}</h5>
					
                </div>
				<div className="card card-horizontal padding">
					<div className="card-header center">
						<h6>Score</h6>
					</div>
					<div className="card-body center">
						<h6>{answeredQuestions + createdQuestions }</h6>
					</div>
				</div>
			</div>
			
  		</div>
    ) 
  }
  
}

function mapStateToProps({ users }, props) {
	
  	const { id } = props
  	return {
    	id,
      	users
    }
}

export default connect(mapStateToProps)(LeaderBoardCard)