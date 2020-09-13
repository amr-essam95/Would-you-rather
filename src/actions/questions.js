import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SUBMIT_ANSWER = 'SUBMIT_ANSWER'

function addQuestion (question) {
	return {
    	type: ADD_QUESTION,
      	question
    }
}

export function handleAddQuestion (option1, option2) {
	return (dispatch, getState) => {
    	const { authedUser } = getState()
        
        dispatch(showLoading())
      	const info = {
        	optionOneText:option1,
			optionTwoText:option2,
			author:authedUser
        }
      	return _saveQuestion(info)
      	.then((question) => dispatch(addQuestion(question)))
      	.then(() => dispatch(hideLoading()))
    }
}

function submitAnswer ({ qid, answer, authedUser }) {
  return {
    type: SUBMIT_ANSWER,
    qid,
    answer,
    authedUser
  }
}

export function handleSubmitAnswer (info) {
  return (dispatch) => {
	dispatch(showLoading())
    return _saveQuestionAnswer(info)
      .then((questionInfo) => dispatch(submitAnswer(info)))
      .then(() => dispatch(hideLoading()))
  }
}

export function receiveQuestions (questions) {
	return {
    	type: RECEIVE_QUESTIONS,
      	questions
    }
}