import React from 'react';
import Menu from './Menu.js';
import banner from '../../public/image/banner-header.png';

var Header = React.createClass({

    render(){
        return (
            <header>
                <div className="row">
                    <div className="container">
                        <div className="item-Header logo">
                            <a>
                                <figure>
                                    <img src="http://www.raphaelfabeni.com.br/rv/images/nike-logo.png" alt="Logo"/>
                                </figure>
                            </a>
                        </div>
                        <div className="item-Header nav-bar">
                            <Menu />
                        </div>
                        <div className="item-Header cart">
                            <a>
                                <img src="http://www.raphaelfabeni.com.br/rv/images/cart.png" alt="Cart"/>
                            </a>
                        </div>
                    </div>
                    <div className="banner">
                        <img src={banner} alt="Main Banner"/>
                    </div>
                </div>
            </header>
        )
    }

});

export default Header;