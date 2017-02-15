import React from 'react';

const Menu = React.createClass({
    render(){
        return (
            <nav>
                <ul>
                    <li><a href="#">MASCULINO</a></li>
                    <li><a href="#">FEMININO</a></li>
                    <li><a href="#">MENINO</a></li>
                    <li><a href="#">MENINA</a></li>
                </ul>
            </nav>
        )
    }
})


export default Menu;