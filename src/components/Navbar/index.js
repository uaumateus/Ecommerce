import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './style.css';

import Login from '../Modals/Login';
import Register from '../Modals/Register';

import iconCategories from './assets/categories_icon.svg';
import iconSearch from './assets/search_icon.svg';
import iconFavorite from './assets/favorite_icon.svg';
import iconBag from './assets/bag_icon.svg';
import iconPerson from './assets/person_icon.svg';

const categories = [
    {description: "Blusas"},
    {description: "Camisas"},
    {description: "Calças"},
    {description: "Saias"},
    {description: "Vestidos"},
]

class Navbar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showRegister: false,
            showLogin: false,
            logged: true,
            userType: 1, // 1 - user comum   /   2 - admin
            showSearch: false,
            classSearch: "inputSearch Medium-Text-Regular showSearch",
            searchTerm: null
        };
        this.handleModalRegister = this.handleModalRegister.bind(this);
        this.handleModalLogin = this.handleModalLogin.bind(this);
    }

    handleModalRegister = () => {
        const showRegister = !this.state.showRegister;
        this.setState({ showRegister });
    };
    
    handleModalLogin = () => {
        const showLogin = !this.state.showLogin;
        this.setState({ showLogin });
    };

    handlerSearch = () => {
        const showSearch = !this.state.showSearch;
        if(showSearch == true){
            this.setState({ showSearch });
        }
        else{
            this.setState({classSearch: "inputSearch Medium-Text-Regular closeSearch"});
            setTimeout(()=>{
                this.setState({ showSearch });
                this.setState({classSearch: "inputSearch Medium-Text-Regular showSearch"});
            }, 600);
        }
    }

    onKeyDown = e => {
        const { searchTerm } = this.state;

        if (e.key === 'Enter' && searchTerm !== '') {
            this.setState({ searchTerm: '' });
            this.handlerSearch();
            this.props.history.push(`/busca/${searchTerm}`);
            e.target.blur();
        }
    }

    handleSearchTerm = e => {
        this.setState({ searchTerm: e.target.value });
    }

    render(){
        return(
            <header className="navbar">
                <Login 
                    show={this.state.showLogin}
                    onChangeState={this.handleModalLogin}
                    handlerRegister={this.handleModalRegister}
                />
                <Register 
                    show={this.state.showRegister}
                    onChangeState={this.handleModalRegister}
                    handlerLogin={this.handleModalLogin}
                />
                <div className="containerLogo">
                    <Link to="/"><p className="Large-Text-Bold">LOGOAQUI</p></Link>
                    <div className="containerCategories">
                        <article>
                            <img src={iconCategories} />
                            <p className="Medium-Text-Regular">Categorias</p>
                        </article>
                        <ul className="dropdownCategories">
                            <div>
                                {categories.map((item, key) => (
                                    <Link to={`/categorias/${item.description}`}><li className="Large-Text-Regular">{item.description}</li></Link>
                                ))}
                            </div>
                        </ul>
                    </div>
                </div>
                
                <div className="optionsNavbar">
                    {this.state.showSearch &&
                        <input type="text" placeholder="Busca" className={this.state.classSearch} onChange={this.handleSearchTerm} onKeyDown={this.onKeyDown} value={this.state.searchTerm}/>
                    }
                    <img src={iconSearch} className="iconNavbar" onClick={this.handlerSearch}/>
                    {(this.state.userType == 1 && this.state.logged) &&
                        <Link to="/favoritos"><img src={iconFavorite} className="iconNavbar" /></Link>
                    }
                    {(this.state.userType == 1 || !this.state.logged) &&
                        <Link to="/sacola"><img src={iconBag} className="iconNavbar"/></Link>
                    }
                    {this.state.logged ?
                        <>
                            {this.state.userType == 1 &&
                                <div className="profileOptions">
                                    <img src={iconPerson} className="iconNavbar" />
                                    <ul className="dropdownUser">
                                        <Link to="/historico"><li className="Medium-Text-Regular liLine">Histórico de compra</li></Link>
                                        <Link to="/conta"><li className="Medium-Text-Regular liLine">Conta</li></Link>
                                        <li className="Medium-Text-Regular">Sair</li>
                                    </ul>
                                </div>
                            }
                            {this.state.userType == 2 &&
                                <div className="profileOptions">
                                    <img src={iconPerson} className="iconNavbar" />
                                    <ul className="dropdownUser">
                                        <Link to="/conta"><li className="Medium-Text-Regular liLine">Conta</li></Link>
                                        <Link to="/clientes"><li className="Medium-Text-Regular liLine ">Clientes</li></Link>
                                        <Link to="/estoque"><li className="Medium-Text-Regular liLine">Estoque</li></Link>
                                        <li className="Medium-Text-Regular liLine reports">Relatórios
                                            <ul className="subDropdown">
                                                <Link to="/relatorio-compras-por-cliente"><li className="Medium-Text-Regular liLine">Compras por cliente</li></Link>
                                                <Link to="/relatorio-produtos-em-falta"><li className="Medium-Text-Regular liLine">Produtos em falta</li></Link>
                                                <Link to="/relatorio-valor-diario"><li className="Medium-Text-Regular">Valor diário</li></Link>
                                            </ul>
                                        </li>
                                        <li className="Medium-Text-Regular">Sair</li>
                                    </ul>
                                </div>
                            }
                        </>
                    :
                        <>
                            <button className="button buttonSecundary" onClick={this.handleModalLogin}>Entrar</button>
                            <button className="button buttonPrimary" onClick={this.handleModalRegister}>Cadastre-se</button>
                        </>
                    }                    

                </div>
            </header>
        )
    }
}

export default withRouter(Navbar);