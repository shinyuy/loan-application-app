import React, { Component } from 'react';
import AddApplicant from './AddApplicant';

export default class Apply extends Component {

  render() {
    return (
      <div>
        <AddApplicant putDataToDB={this.putDataToDB} />
      </div>
    )
  }
}
