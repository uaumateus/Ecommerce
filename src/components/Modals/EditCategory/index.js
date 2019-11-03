import React, {Component} from 'react';
import '../Register/style.css';
import api from '../../../services/api';
import { withRouter } from 'react-router-dom';

import close from '../assets/close.svg';

import InputText from '../../InputText';

class EditCategory extends Component {
    state = {
        nameCategory: ''
    }

    componentDidMount() {
        this.setState({ nameCategory: this.props.categoryName });
    }

    closeModal = () => {
        this.props.onChangeState();
    };

    editCategory = async () => {
        const nameCategory = this.state.nameCategory;
        if(nameCategory !== ''){
            await api.put('/admin/category/'+this.props.categoryKey, {
                name: nameCategory
            }).then(resp => {
                this.setState({nameCategory: ''});
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
                        <p className="Medium-Text-Bold">Editar categoria</p>
                        <a onClick={this.closeModal}><img src={close} className="iconClose" /></a>
                    </div>
                    <div className="contentModal">
                        <form>
                            <InputText value={this.state.nameCategory} placeholder="Nome da categoria" type="text" onChange={this.onChange}/>
                        </form>
                    </div>
                    <div className="footerModal">
                        <button className="button buttonPrimary" onClick={this.editCategory}>Salvar</button>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(EditCategory);