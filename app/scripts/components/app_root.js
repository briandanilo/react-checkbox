import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'
import Doc from './doc.js'
import ConfirmRead from './confirm_read.js'
import Checkbox from './checkbox.js'

const AppRoot = React.createClass({
  render: function () {
    return (
      <div>
      <Doc />
      <Checkbox />
      <ConfirmRead />
      </div>
    );
  }
});

export default connect(container.allState)(AppRoot)
