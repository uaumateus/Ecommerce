import React, {Component} from 'react';
import '../Register/style.css';
import close from '../assets/close.svg';
import api from '../../../services/api';

import InputText from '../../InputText';

export default class NewProduct extends Component {
    state = {
        categorys: [],
        valueCategory: "",
        selectedCategorys: [],
        image: null,
        name: '',
        amount: '',
        price: '',
        error: false
    }

    componentDidMount = async () => {
        await api.get('admin/category').then(resp => {
            let aux = [];
            for(let i = 0; i < resp.data.length; i++)
                aux.push(resp.data[i].name);
            this.setState({categorys: aux});
        }).catch(error => {
            console.log(error)
        });
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

    handleImage = e => {
        this.setState({ image: e.target.files[0] });
    }

    onChangeText = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    saveNewProduct = () => {
        const { image, name, amount, price, selectedCategorys } = this.state;
        if(image !== null && name !== '' && amount !== '' && price !== '' && selectedCategorys !== '')
            console.log(this.state);
        else
            this.setState({error: "Preencha todos os campos"});
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
                        {this.state.error &&
                            <p className="Medium-Text-Regular errorInput otherError">{this.state.error}</p>
                        }
                        <form>
                            <label for="uploadImage" className="inputFile">Carregar imagem</label>
                            <input id="uploadImage" type="file" className="inputFileHidden" onChange={this.handleImage}/>
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
                            <InputText placeholder="Nome do produto" name="name" onChange={this.onChangeText} type="text"/>
                            <InputText placeholder="Quantidade em estoque" name="amount" onChange={this.onChangeText} type="text"/>
                            <InputText placeholder="Preço" name="price" onChange={this.onChangeText} type="text"/>
                        </form>
                    </div>
                    <div className="footerModal">
                        <button className="button buttonPrimary" onClick={this.saveNewProduct}>Salvar</button>
                    </div>
                </div>
            </>
        )
    }
}