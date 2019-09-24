import React, {Component} from 'react';
import '../Register/style.css';
import close from '../assets/close.svg';

import InputText from '../../InputText';

export default class NewCategory extends Component {
    closeModal = () => {
        this.props.onChangeState();
    };

    openModalRegister = () => {
        this.props.onChangeState();
        this.props.handlerRegister();
    };
    
    render(){
        if (!this.props.show) {
            return null;
        }
        return(
            <>
                <div className="backgroundModal" onClick={this.closeModal}/>
                <div className="modal" style={{marginTop: '20vh'}}>
                    <div className="headerModal">
                        <p className="Medium-Text-Bold">Criar categoria</p>
                        <a onClick={this.closeModal}><img src={close} className="iconClose" /></a>
                    </div>
                    <div className="contentModal">
                        <form>
                            <InputText placeholder="Nome da categoria" type="text"/>
                        </form>
                    </div>
                    <div className="footerModal">
                        <button className="button buttonPrimary">Salvar</button>
                    </div>
                </div>
            </>
        )
    }
}