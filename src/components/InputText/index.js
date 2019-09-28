import React, {Component} from 'react';
import './style.css';

export default class InputText extends Component { 
    render(){
        const { placeholder, type, onChange, name } = this.props;
        return(
            <div className="contentInputText">
                <input type={type} placeholder={placeholder} name={name} className="inputText Medium-Text-Regular" onChange={onChange}/>
            </div>
        )
    }
}