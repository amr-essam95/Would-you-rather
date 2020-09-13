import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSetAuthedUser } from '../actions/authedUser'
import { withRouter } from 'react-router-dom'


class Login extends Component {
  
	state = {
		selectedUser:''
	}

	componentDidMount() {
		this.setState({
  			selectedUser:this.props.users[Object.keys(this.props.users)[0]].id
		})
	}

	handleChangeUserSelection = (event) => {
    	this.setState({
        	selectedUser:event.target.value
        })
    }

	submitUser = (event) => {
    	event.preventDefault()
      	const { dispatch } = this.props
        dispatch(handleSetAuthedUser(this.state.selectedUser)).then(() => {
			this.props.history.push('/')
		})      	
    }
  
  render() {

 	return (
		<div className="card">
  			<div className="card-header">
    			<h4 className='center'>Welcome to the Would You Rather App!</h4>
      			<h6 className='center'>Press sign in to continue</h6>
  			</div>
            <div className="card-body">
      			<div className='center'>
      				<svg width="6em" height="6em" viewBox="0 0 16 16" className="bi bi-patch-question" fillRule="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745z"/>
  <path fillRule="evenodd" d="M10.273 2.513l-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
					</svg>
      			</div>
      			<br/>
                <h4 className="card-title center">Sign In</h4>
         		<div >
                    <select value={this.state.selectedUser} onChange={this.handleChangeUserSelection} className='w-100 p-3'>
                        {Object.keys(this.props.users).map((userId) => (
                            <option value={userId} key={userId}>{this.props.users[userId].name}</option>
                        ))}
                    </select>
				</div>
				<br/>
				<button type="button" onClick={(e) => this.submitUser(e)} className="btn btn-light btn-block">Sign In</button>
            </div>
		</div>
    ) 
  }
  
}

function mapStateToProps ({users}) {
	return {
    	users
    }
}

export default withRouter(connect(mapStateToProps)(Login))