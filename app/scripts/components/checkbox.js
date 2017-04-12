import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'

const Checkbox = React.createClass({

  checkboxHandler: function (e)  {
    e.target.checked ? this.props.dispatch({ type: "CHECKED" }) : this.props.dispatch({ type: "UNCHECKED" })
  },

  render: function () {
    return (<div>
      <label onChange={this.checkboxHandler} className="mark-as-read">Mark As Read
      <input checked={this.props.checked} disabled={this.props.confirmed} name="hasRead" type="checkbox"/></label>
      </div>
    )
  }
});

export default connect(container.allState)(Checkbox)
