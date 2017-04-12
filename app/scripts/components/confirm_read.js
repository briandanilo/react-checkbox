import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'

const ConfirmRead = React.createClass({

  didNotRead: function (){
    this.props.dispatch({ type: "UNCHECKED" })
  },

  confirmRead: function (){
    this.props.dispatch({ type: "CONFIRMED" })
  },

  render: function () {

    if(this.props.checked && !this.props.confirmed){

    return (
    <div className="confirm-modal">
      <h4>Are you sure? You look shifty.</h4>
      <button onClick={this.confirmRead} className="confirm-read-btn">Yes</button>
      <button onClick={this.didNotRead} className="cancel-read-btn">No</button>
    </div>)

    }
    else return null;
  }
});

export default connect(container.allState)(ConfirmRead)
