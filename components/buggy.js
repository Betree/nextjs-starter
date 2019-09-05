import React from "react";
import uuid from "uuid/v4";

class Buggy extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: `str-${uuid()}` };
  }

  render() {
    return <div id={this.state.id}>{this.state.id}</div>;
  }
}

export default Buggy;
