import React from 'react';

var Menu = React.createClass({
    render(){
        return (
            <nav>
                <ul>
                    <li className="nav-bar-item"><a href="#">MASCULINO</a></li>
                    <li className="nav-bar-item"><a href="#">FEMININO</a></li>
                    <li className="nav-bar-item"><a href="#">MENINO</a></li>
                    <li className="nav-bar-item"><a href="#">MENINA</a></li>
                </ul>
            </nav>
        )
    }
})


export default Menu;