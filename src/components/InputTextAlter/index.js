import React, {Component} from 'react';
import './style.css';

export default class InputTextAlter extends Component { 

    state = {
        alter: false,
        valueInput: this.props.value
    }

    handleAlter = () => {
        this.setState({alter: !this.state.alter});
    }

    handleInput = (e) => {
        this.setState({valueInput: e.target.value});
    }

    render(){
        const { title } = this.props;
        let { alter, valueInput } = this.state;
        return(
            <div className="inputTextAlter">
                <p className="Medium-Text-Bold">{title + ":"}</p>
                <div className="inputContent">
                    {alter ?
                        <input type="text" className="input Medium-Text-Regular" value={valueInput} onChange={this.handleInput}/>
                    :
                        <input type="text" className="input Medium-Text-Regular" placeholder={valueInput} disabled />
                    }

                    <div className="optionsInput">
                        {alter ?
                        <>
                            <p className="Medium-Text-Regular" onClick={this.handleAlter}>cancelar</p>
                            <p className="Medium-Text-Regular" onClick={this.handleAlter}>salvar</p>
                        </>
                        :
                            <p className="Medium-Text-Regular" onClick={this.handleAlter}>editar</p>
                        }
                           
                    </div>
                </div>
            </div>
        )
    }
}