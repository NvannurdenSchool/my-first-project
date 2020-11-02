import React, {Component} from 'react';

import "../App.css" 

export default class AddStoreItem extends Component {
  render() {
		return <div className="output-store"><p>{this.props.task}</p></div>;
  }
}