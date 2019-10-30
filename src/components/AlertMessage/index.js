import React from 'react';
import './style.css';

const AlertMessage = ({ message }) => {
    return (
        <div className="alertMessage">
            {message == "addBag" &&
                <p className="Large-Text-Regular">Produto adicionado à sacola</p>
            }
            {message == "removeBag" &&
                <p className="Large-Text-Regular">Produto removido da sacola</p>
            }
            {message == "addFavorite" &&
                <p className="Large-Text-Regular">Produto adicionado aos favoritos</p>
            }
            {message == "removeFavorite" &&
                <p className="Large-Text-Regular">Produto removido dos favoritos</p>
            }
            {message == "registerSuccess" &&
                <p className="Large-Text-Regular">Cadastro realizado, faça login para continuar!</p>
            }
            {message == "categoryAdd" &&
                <p className="Large-Text-Regular">Categoria criada!</p>
            }
            {message == "productAdd" &&
                <p className="Large-Text-Regular">Produto criado!</p>
            }
        </div>
    );
}

export default AlertMessage;