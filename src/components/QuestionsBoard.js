import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionsList from './QuestionsList'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { withRouter } from 'react-router-dom'


class QuestionsBoard extends Component {
  
	state = {
		activeTab:"unanswered"
	}
  
	getAnsweredQuestions = (e) => {
		this.setState(() => ({
			activeTab: "answered"
		}))
	}

	getUnansweredQuestions = (e) => {
		this.setState(() => ({
			activeTab: "unanswered"
		}))
	}
  
	render() {
    
		return (
    	<div >
          <Tabs defaultActiveKey="unanswered"  id="noanim-tab-example">
            <Tab eventKey="unanswered" title="Unanswered Questions" className="border">
              <QuestionsList type="unanswered" />
            </Tab>
            <Tab eventKey="answered" title="Aanswered Questions" className="border">
              <QuestionsList type="answered" />
            </Tab>
          </Tabs>
    	</div>
    ) 
  }
  
}

function mapStateToProps({ authedUser }) {
	return {
    	authedUser
    }
}

export default withRouter(connect(mapStateToProps)(QuestionsBoard))