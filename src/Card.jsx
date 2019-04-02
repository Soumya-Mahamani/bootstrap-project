import React, { Component } from 'react'
import './changes.css'
export default class Card extends Component {
  render() {
    return (
      
        <div className="card text-black mb-3" style={{ backgroundColor: '#00001a'}} >
            <div className="card-body" style={{color: '#ffffff'}}>
						<div className="row">
							<div className="col">Investment Value</div>
							<div className="col">Current Value</div>
							<div className="col">Annulised Return</div>
							<div className="col">Cash Balance</div>
						</div>
						<div className="row">
							<div className="col">SGD 7,924</div>
							<div className="col" style={{ color: '#009933'}}>SGD 2,839</div>
							<div className="col" style={{ color: '#009933'}}>-100%<i className="fa fa-level-down" aria-hidden="true" style={{ color: '#ff3300'}}></i></div>
							<div className="col" style={{ color: '#009933'}}>SGD 1,097</div>
						</div>
            </div>
        </div>
  
    )
  }
}
