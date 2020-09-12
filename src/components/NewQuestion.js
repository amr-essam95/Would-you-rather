import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class NewQuestion extends Component {
  
	addQuestion = (e) => {
    	e.preventDefault()
    }
  
	render() {
		return (
        <div class="card">
         <div class="card-header center">
         <h4>Create New Question</h4>
         </div>
         <div class="card-body">
         <p class="card-text">Complete the question:</p>
         <h5 class="card-title">Would you rather...</h5>

         <button type="button" onClick={(e) => this.addQuestion(e)} className="btn btn-primary btn-block">Submit</button>
  </div>
  </div>
      ) 
  }
  
}

export default withRouter(connect()(NewQuestion))