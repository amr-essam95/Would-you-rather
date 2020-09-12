import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class LeaderBoard extends Component {
  render() {
    
 	return (
    	<div>LeaderBoard</div>
    ) 
  }
  
}

export default withRouter(connect()(LeaderBoard))