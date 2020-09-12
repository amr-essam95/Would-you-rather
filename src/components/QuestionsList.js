import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'


class QuestionsList extends Component {
  render() {
    
    const { type, questions, authedUser, users } = this.props
    console.log('que', questions)
    
    
    const filteredQuestions = type === "answered" ? Object.assign(...Object.keys(questions)
                    .filter( questionId => users[authedUser].answers.hasOwnProperty(questionId))
                    .map( id => ({ [id]: questions[id] }) ) ) :
                    Object.assign(...Object.keys(questions)
                                    .filter( questionId => !users[authedUser].answers.hasOwnProperty(questionId))
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
    console.log('type', type)
  
  	return {
    	type,
      	authedUser,
      	questions,
     	users
    }
}

export default connect(mapStateToProps)(QuestionsList)