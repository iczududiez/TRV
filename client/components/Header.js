import React from 'react';
import Menu from './Menu.js';

const Header = React.createClass({

    render(){
        return (
            <header>
                <div className="row">
                    <div>
                        <img className="tam2-1" src="http://www.raphaelfabeni.com.br/rv/images/nike-logo.png"/>
                    </div>
                    <div>
                        <Menu />
                    </div>
                    <div>
                        <img className="tam2-1" src="http://www.raphaelfabeni.com.br/rv/images/cart.png"/>
                    </div>
                </div>
                <div className="row">
                    <img className="tam2-1" src="http://www.raphaelfabeni.com.br/rv/images/banner.png"/>
                </div>
            </header>
        )
    }

});

export default Header;