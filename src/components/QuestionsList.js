import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'


class QuestionsList extends Component {
  render() {
    
    const { type, questions, authedUser, users } = this.props
    
    
    const filteredQuestions = type === "answered" ? Object.assign(...Object.keys(questions)
                    .filter( questionId => users[authedUser].answers.hasOwnProperty(questionId))
					.sort((a,b) => questions[b].timestamp - questions[a].timestamp)
                    .map( id => ({ [id]: questions[id] }) ) ) :
                    Object.assign(...Object.keys(questions)
                                    .filter( questionId => !users[authedUser].answers.hasOwnProperty(questionId))
    								.sort((a,b) => questions[b].timestamp - questions[a].timestamp)
                                    .map( id => ({ [id]: questions[id] }) ) )
    
 	return (
    	<div>
          <ul>
            {Object.keys(filteredQuestions).map((questionId) => (
              <li key={questionId}>
              	<Question id={questionId}/>
              </li>
            ))}
          </ul>
		</div>
    ) 
  }
  
}

function mapStateToProps({authedUser, questions, users}, props) {
	const { type } = props
  
  	return {
    	type,
      	authedUser,
      	questions,
     	users
    }
}

export default connect(mapStateToProps)(QuestionsList)