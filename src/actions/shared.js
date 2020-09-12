import { _getUsers, _getQuestions } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'
import { receiveUsers } from '../actions/users'
import { setAuthedUser } from '../actions/authedUser'
import { receiveQuestions } from '../actions/questions'


const AUTHED_ID = ''

export function handleInitialData () {

  return (dispatch) => {
    dispatch(showLoading())
  	return Promise.all([
    	_getUsers(),
     	_getQuestions()
    ]).then(([ users, questions ]) => {
      	dispatch(receiveUsers(users))
      	dispatch(receiveQuestions(questions))
      	dispatch(setAuthedUser(AUTHED_ID))
      	dispatch(hideLoading())
    })
  }
  
}