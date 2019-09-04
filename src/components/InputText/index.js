import React, {Component} from 'react';
import './style.css';

export default class InputText extends Component { 
    render(){
        const { placeholder, type } = this.props;
        return(
            <div className="contentInputText">
                <input type={type} placeholder={placeholder} className="inputText Medium-Text-Regular" />
            </div>
        )
    }
}