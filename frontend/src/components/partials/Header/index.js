import React from 'react';
import {HeaderArea} from './styled';
import {Link} from 'react-router-dom';
import {isLogged} from '../../../ajudas/Autenticacao';

const Header = () => {

    let logged = isLogged(); 

    return(
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <span className="logo1">O</span>
                        <span className="logo2">L</span>
                        <span className="logo3">X</span>
                    </Link>
                </div>
                <nav>
                    <ul>
                        {logged &&
                            <>
                                <li>
                                    <Link to="/my-account">Minha conta</Link>
                                </li>
                                <li>
                                    <Link to="/logout">Sair</Link>
                                </li>
                                <li>
                                    <Link to="/post-an-ad" className="button">Poste um anúncio</Link>
                                </li>
                            </>
                        }
                        {!logged &&
                            <>
                                <li>
                                    <Link to="/signin">Login</Link>
                                </li>
                                <li>
                                    <Link to="/singup">Cadastro</Link>
                                </li>
                                <li>
                                    <Link to="/signin" className="button">Poste um anúncio</Link>
                                </li>
                            </>
                        }                        
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    );
};

export default Header;