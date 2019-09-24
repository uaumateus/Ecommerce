import React, {Component} from 'react';
import '../Register/style.css';
import close from '../assets/close.svg';

import InputText from '../../InputText';

export default class NewProduct extends Component {
    state = {
        categorys: ["Camisetas", "Camisas", "Bermudas", "Calças"],
        valueCategory: "",
        selectedCategorys: []
    }

    closeModal = () => {
        this.props.onChangeState();
    };

    openModalRegister = () => {
        this.props.onChangeState();
        this.props.handlerRegister();
    };

    changeCategoryInput = (e) => {
        this.setState({valueCategory: e.target.value});
    }

    addCategoryList = () => {
        const value = this.state.valueCategory;
        const categorys = this.state.categorys;
        if(value != "" && value != null && categorys.indexOf(value) != -1){
            let test = this.state.selectedCategorys.concat(this.state.valueCategory);
            this.setState({selectedCategorys: test});
            this.setState({valueCategory: ""});
        }
    }
    
    render(){
        if (!this.props.show) {
            return null;
        }
        return(
            <>
                <div className="backgroundModal" onClick={this.closeModal}/>
                <div className="modal" style={{marginTop: '10vh'}}>
                    <div className="headerModal">
                        <p className="Medium-Text-Bold">Adicionar produto</p>
                        <a onClick={this.closeModal}><img src={close} className="iconClose" /></a>
                    </div>
                    <div className="contentModal">
                        <form>
                            <label for="uploadImage" className="inputFile">Carregar imagem</label>
                            <input id="uploadImage" type="file" className="inputFileHidden"/>
                            <div className="containerCategorys">
                                <input 
                                    list="categorys" 
                                    placeholder="Categoria" 
                                    onChange={this.changeCategoryInput} 
                                    value={this.state.valueCategory} 
                                    className="inputDataList Medium-Text-Regular"
                                />
                                <span className="button buttonSecundary" onClick={this.addCategoryList}>Adicionar</span>
                            </div>
                            <div className="selectedCategorys">
                                {this.state.selectedCategorys.map((item) => (
                                    <p className="Small-Text-Regular">{item}</p>
                                ))}
                            </div>
                            <datalist id="categorys">
                                {this.state.categorys.map((item) => (
                                    <option value={item} />
                                ))}
                            </datalist>
                            <InputText placeholder="Nome do produto" type="text"/>
                            <InputText placeholder="Quantidade em estoque" type="text"/>
                            <InputText placeholder="Preço" type="text"/>
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