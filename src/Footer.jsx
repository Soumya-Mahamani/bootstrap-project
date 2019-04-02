import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <div className="text-center" style={{paddingBottom: '20px', backgroundColor: '#00004d', paddingTop: '10px'}}>
					<i className="fa fa-bell" aria-hidden="true" style={{fontSize: '1.5rem', color: '#ffffff'}}>
						<span style={{padding: '20px'}}>You have excess cash available for investing</span>
						<button type="button" className="btn btn-danger" >Allocate Funds</button>
					</i>
        </div>
    )
  }
}

// #000080
