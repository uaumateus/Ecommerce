import React, { Component } from 'react';
import './style.css';

export default class ControllAmount extends Component {
  render() {
    const { add, remove, value } = this.props;
    return (
        <div className="ControllAmount">
            <p className="Large-Text-Bold" onClick={remove}>-</p>
            <p className="Small-Text-Bold">{value}</p>
            <p className="Large-Text-Bold" onClick={add}>+</p>
        </div>
    );
  }
}
