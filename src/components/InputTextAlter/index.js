import React, {Component} from 'react';
import './style.css';

export default class InputTextAlter extends Component { 
    render(){
        const { title, value } = this.props;
        return(
            <div className="inputTextAlter">
                <p className="Medium-Text-Bold">{title + ":"}</p>
                <div className="inputContent">
                    <input type="text" className="input Medium-Text-Regular" placeholder={value} disabled/>
                    <div className="optionsInput">
                        <p className="Medium-Text-Regular">editar</p>
                    </div>
                </div>
            </div>
        )
    }
}