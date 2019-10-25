import React, {Component} from 'react';
import '../Register/style.css';
import api from '../../../services/api';

import close from '../assets/close.svg';

import InputText from '../../InputText';

export default class NewCategory extends Component {
    state = {
        nameCategory: ''
    }

    closeModal = () => {
        this.props.onChangeState();
    };

    newCategory = async () => {
        const nameCategory = this.state.nameCategory;
        if(nameCategory !== ''){
            await api.post('/admin/category', {
                name: nameCategory
            }).then(resp => {
                this.closeModal();
            })
            .catch(error => {          
                console.log("deu erro")  
            })
        }
    }

    onChange = e => {
        this.setState({nameCategory: e.target.value});
    }
    
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
                            <InputText placeholder="Nome da categoria" type="text" onChange={this.onChange}/>
                        </form>
                    </div>
                    <div className="footerModal">
                        <button className="button buttonPrimary" onClick={this.newCategory}>Salvar</button>
                    </div>
                </div>
            </>
        )
    }
}