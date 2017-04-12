import React from 'react'
import { connect } from 'react-redux'
import container from '../containers/all.js'


var docBody = `Lorem blah blahLorem blah blahLorem blah blahLorem blah blahLorem blah blahLorem blah
Lorem blah blahLorem blah blahLorem blah blahLorem blah blahLorem blah blahLorem blah blah`;

const Doc = React.createClass({

  render: function () {
    return (<div className="doc-container">
      <p className="doc">{docBody}</p>
    </div>);
  }
});

export default connect(container.allState)(Doc)
