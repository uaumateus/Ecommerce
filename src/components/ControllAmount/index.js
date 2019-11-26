import React, { Component } from 'react';
import './style.css';

export default class ControllAmount extends Component {
  addProduct = () => {
    this.props.add(this.props.max);
  }
  render() {
    const { remove, value } = this.props;
    return (
        <div className="ControllAmount">
            <p className="Large-Text-Bold" onClick={remove}>-</p>
            <p className="Small-Text-Bold">{value}</p>
            <p className="Large-Text-Bold" onClick={this.addProduct}>+</p>
        </div>
    );
  }
}
