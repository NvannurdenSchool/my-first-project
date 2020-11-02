import React, {Component} from 'react';
import "../App.css";

export default class AddItem extends Component {
  render() {
    return <p>{this.props.task}</p>;
  }
}
