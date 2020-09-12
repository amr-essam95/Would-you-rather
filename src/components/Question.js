import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { handleSubmitAnswer } from '../actions/questions'


class Question extends Component {
  
  state = {
    selectedOption: 'optionTwo'
  }
  
   toQuestion = (e, id) => {
     
		this.props.history.push(`/question/${id}`)
  }

   submitAnswer = (e) => {
		e.preventDefault()
     	const { dispatch, authedUser, id } = this.props
        
        dispatch(handleSubmitAnswer({
        	qid:id,
          	authedUser,
          	answer:this.state.selectedOption
        }))
  }

  onLabelChangeValue = (e, option) => {
  	this.setState(() => ({
    	selectedOption: option
    }))
  }

  onInputChangeValue = (event) => {
	const value = event.target.value
	this.setState(() => ({
    	selectedOption: value
    }))
  }

  render() {
    const { questions, id, users, type, authedUser } = this.props

    const question = questions[id]
	const user = users[authedUser]

	const answeredQuestion = user.answers.hasOwnProperty(id)
	const answeredOpitonOne = user.answers[id] === 'optionOne'

	const totalAnswers = question.optionOne.votes.length + question.optionTwo.votes.length
	const optionOneAnswersCount = question.optionOne.votes.length
	const optionTwoAnswersCount = question.optionTwo.votes.length
	const optionOnePercentage = ((optionOneAnswersCount / totalAnswers) * 100).toFixed(2)
	const optionTwoPercentage = ((optionTwoAnswersCount / totalAnswers) * 100).toFixed(2)
    
 	return (
    	<div>
			<div className="card">
            	<div className="card-header">
					<span>{users[question.author].name} asks:</span>
              	</div>
				<div className="card-horizontal">
					<div className="img-square-wrapper d-flex flex-column align-items-center justify-content-center border-right">
            			<img src={users[question.author].avatarURL} alt={users[question.author].name} className="md-avatar rounded-circle mediumImage"/>
        			</div>
                  	<div className="card-body">
                      <h5 className="card-title">Would you rather</h5>
					  {type === 'detailed' && answeredQuestion === false && 
                      	<div>
                          <div className="radio">
                            <input type="radio"  id="defaultUnchecked" value='optionOne' name="wouldRatherOptions" onChange={this.onInputChangeValue} checked={this.state.selectedOption === 'optionOne'}/>
                            <label className="rightMargin" onClick={(e) => this.onLabelChangeValue(e, 'optionOne')}>{question.optionOne.text}</label>
                          </div> 
                          <div className="radio">
                            <input type="radio"  id="defaultChecked" value='optionTwo' name="wouldRatherOptions"  onChange={this.onInputChangeValue} checked={this.state.selectedOption === 'optionTwo'}/>
                            <label className="rightMargin" onClick={(e) => this.onLabelChangeValue(e, 'optionTwo')}>{question.optionTwo.text}</label>
                          </div>
                          <br/>
						  <button type="button" onClick={(e) => this.submitAnswer(e)} className="btn btn-outline-primary btn-block">Submit</button>
                       </div>
                      }

					  {type === 'detailed' && answeredQuestion && 
                      	<div>
                       		<div className={answeredOpitonOne ? 'greenBorder' : ''}>
                              <div className="card">
                                <div className="card-body">
                                  <h5 className="card-title">Would you rather {question.optionOne.text}?</h5>
								  <ProgressBar now={optionOnePercentage} label={`${optionOnePercentage}%`} />
                                  <p className="card-text center">{optionOneAnswersCount} out of {totalAnswers} votes</p>
                                </div>
                              </div>
							</div>
                       		<br/>
							<div className={!answeredOpitonOne ? 'greenBorder' : ''}>
                              <div className="card">
                                <div className="card-body">
                                  <h5 className="card-title">Would you rather {question.optionTwo.text}?</h5>
								  <ProgressBar now={optionTwoPercentage} label={`${optionTwoPercentage}%`} />
                                  <p className="card-text center">{optionTwoAnswersCount} out of {totalAnswers} votes</p>
                                </div>
                              </div>
							</div>
                      	</div>
					  }

					  {type !== 'detailed' && 
                       	<div>
                       		<p className="card-text">...{question.optionOne.text}...</p>
							<button type="button" onClick={(e) => this.toQuestion(e, id)} className="btn btn-outline-primary btn-block">View Poll</button>
						</div>	
					  }
                  	</div>
				</div>
            </div>
      	</div>
    ) 
  }
  
}

function mapStateToProps ({authedUser, users, questions}, props) {
	const { id, type } = props
    return {
      	type,
    	id,
      	authedUser,
      	users,
      	questions
    }
}

export default withRouter(connect(mapStateToProps)(Question))