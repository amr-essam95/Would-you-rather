import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import { handleAddQuestion } from '../actions/questions'


class NewQuestion extends Component {
  
  	state = {
    	optionOne: '',
		optionTwo: ''
    }
  
	addQuestion = (e) => {
		e.preventDefault()
		const { dispatch } = this.props
		dispatch(handleAddQuestion(this.state.optionOne, this.state.optionTwo))
    }

	optionOneChange = (e) => {
		this.setState({
        	optionOne: e.target.value
        })
    }

	optionTwoChange = (e) => {
    	this.setState({
        	optionTwo: e.target.value
        })
    }
  
	render() {
		return (
			<div className="card">
				<div className="card-header center">
					<h4>Create New Question</h4>
				</div>
				<div className="card-body">
					<p className="card-text">Complete the question:</p>
					<h5 className="card-title">Would you rather...</h5>
					<br/>
					<Form.Control type="text" placeholder="Enter Question One Text" value={this.state.optionOne} onChange={this.optionOneChange}/>
					<br/>
					<Form.Control type="text" placeholder="Enter Question One Text" value={this.state.optionTwo} onChange={this.optionTwoChange}/>
					<br/>
					<button type="button" onClick={(e) => this.addQuestion(e)} className="btn btn-primary btn-block">Submit</button>
  				</div>
  			</div>
      ) 
  }
  
}

export default withRouter(connect()(NewQuestion))