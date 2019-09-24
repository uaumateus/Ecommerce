import React, {Component} from 'react';
import './style.css';

export default class InputTextAlter extends Component { 

    state = {
        alter: false
    }

    handleAlter = () => {
        this.setState({alter: !this.state.alter});
    }

    render(){
        const { title, value, onChange, name } = this.props;
        let { alter } = this.state;
        return(
            <div className="inputTextAlter">
                <p className="Medium-Text-Bold">{title + ":"}</p>
                <div className="inputContent">
                    {alter ?
                        <input type="text" name={name} className="input Medium-Text-Regular" value={value} onChange={onChange}/>
                    :
                        <input type="text" className="input Medium-Text-Regular" placeholder={value} disabled />
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