import React, {Component} from 'react';
import '../Register/style.css';
import close from '../assets/close.svg';
import api from '../../../services/api';
import {withRouter} from 'react-router-dom';

import InputText from '../../InputText';

class NewProduct extends Component {
    state = {
        categorys: [],
        valueCategory: "",
        selectedCategorys: [],
        image: null,
        name: '',
        description: '',
        amount: '',
        price: '',
        error: false,
        test: false,
        product: null
    }

    componentDidMount = () => {
        this.getCategories();
    }

    componentDidUpdate(){
            if(this.props.product)
                if(!this.state.test)
                    this.setState({test: true,
                                    name: this.props.product.name,
                                    description: this.props.product.description,
                                    amount: this.props.product.amount,
                                    price: this.props.product.price,
                                    image: `data:image/jpg;base64,${this.props.product.photo}`})     
    }

    getCategories = async () => {
        await api.get('/categories').then(resp => {
            let aux = [];
            for(let i = 0; i < resp.data.length; i++)
                aux.push(resp.data[i]);
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
        if(value != "" && value != null){
            let test;
            for(var i = 0; i < categorys.length; i++)
                if(categorys[i].name === value)
                    test = this.state.selectedCategorys.concat(categorys[i]);
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

    saveNewProduct = async (e) => {
        e.preventDefault();
        const { image, name, description, amount, price, selectedCategorys } = this.state;
        if(this.props.type === "insert"){
            if(image !== null && name !== '' && amount !== '' && price !== '' && selectedCategorys !== []){
                const data = new FormData;
                let categories = [];
                for(var i = 0; i < selectedCategorys.length; i++)
                    categories.push(selectedCategorys[i].id);
                data.append('name', name);
                data.append('description', description);
                data.append('amount', amount);
                data.append('price', price);
                data.append('file', image);
                data.append('categories', JSON.stringify(categories));
                await api.post('/admin/product', data).then(resp => { 
                    this.props.notification();
                    this.closeModal();
                });
            }else
                this.setState({error: "Preencha todos os campos"});
        }else if(this.props.type === "edit"){
            if(image !== null && name !== '' && amount !== '' && price !== ''){
                const data = new FormData;
                data.append('name', name);
                data.append('description', description);
                data.append('amount', amount);
                data.append('price', price);
                data.append('file', image);
                await api.put('/admin/product/'+this.props.product.id, data).then(resp => { 
                    this.closeModal();
                });
            }else
                this.setState({error: "Preencha todos os campos"});
        }
        
    }
    
    render(){
        const { name, description, amount, price } = this.state;
        if (!this.props.show) {
            return null;
        }
        return(
            <>
                <div className="backgroundModal" onClick={this.closeModal}/>
                <div className="modal modalNewProduct" style={{marginTop: '10vh'}}>
                    <div className="headerModal">
                        <p className="Medium-Text-Bold">Adicionar produto</p>
                        <a onClick={this.closeModal}><img src={close} className="iconClose" /></a>
                    </div>
                    <div className="contentModal">
                        {this.state.error &&
                            <p className="Medium-Text-Regular errorInput otherError">{this.state.error}</p>
                        }
                        <form id="newProduct" onSubmit={this.saveNewProduct}>
                            <label for="uploadImage" className="inputFile">Carregar imagem</label>
                            <input id="uploadImage" type="file" className="inputFileHidden" onChange={this.handleImage}/>
                            {this.props.type === "insert" && 
                                <>    
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
                                            <p className="Small-Text-Regular">{item.name}</p>
                                        ))}
                                    </div>
                                    <datalist id="categorys">
                                        {this.state.categorys.map((item) => (
                                            <option value={item.name} />
                                        ))}
                                    </datalist>
                                </>
                            }
                            <InputText value={name} placeholder="Nome do produto" name="name" onChange={this.onChangeText} type="text"/>
                            <InputText value={description} placeholder="Descrição" name="description" onChange={this.onChangeText} type="textarea"/>
                            <InputText value={amount} placeholder="Quantidade em estoque" name="amount" onChange={this.onChangeText} type="text"/>
                            <InputText value={price} placeholder="Preço" name="price" onChange={this.onChangeText} type="text"/>
                            <button type="submit" className="button buttonPrimary">Salvar</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(NewProduct);