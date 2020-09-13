import React, { Component, Fragment } from 'react';
import '../App.css';
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './Nav'
import QuestionsBoard from './QuestionsBoard'
import QuestionPage from './QuestionPage'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import Login from './Login'
import PrivateRoute from './PrivateRoute'

class App extends Component {
  
	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}
  
	render() {
		return (
			<Router>
				<Fragment>
					<LoadingBar/>
					<div className="d-flex flex-column"> 
						<div className="d-flex justify-content-center">
							<Nav/>
						</div>
						{this.props.loading === true
							? null
							: <div className="d-flex justify-content-center ">
          						<Route path='/login' component={Login} />
          						<PrivateRoute path='/' exact component={QuestionsBoard} />
								<PrivateRoute path='/question/:id' component={QuestionPage} />
								<PrivateRoute path='/add' component={NewQuestion} />
								<PrivateRoute path='/leaderboard' component={LeaderBoard} />
							</div>}
					</div>
				</Fragment>
			</Router>
		);
	}
}

function mapStateToProps ({ authedUser }) {
	return {
		authedUser,
		loading: authedUser === null
	}
}

export default connect(mapStateToProps)(App)
