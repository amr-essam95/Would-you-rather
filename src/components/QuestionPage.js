import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import { withRouter } from 'react-router-dom'


class QuestionPage extends Component {
  render() {
    
    const { id } = this.props
 	return (
    	<div>
        	<Question id={id} type='detailed'/>
      	</div>
    ) 
  }
  
}

function mapStateToProps (state, props) {
	const { id } = props.match.params
    return {
    	id
    }
}

export default withRouter(connect(mapStateToProps)(QuestionPage))