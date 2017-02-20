import React from 'react';
import BtnAllProducts from './BtnAllProducts';

var Filtro = React .createClass({

    render(){
        return (
            <div className="container container-padLine1-3">
                <div className="filter filter-title">
                    <span>
                        Chuteiras HyperVemon:
                    </span>
                </div>
                <div className="filter filter-options">
                    <menu>
                        <ul>
                            <li className="item-filter squaredTwo">
                                <input id="chkCanoAlto" type="checkbox" name="high-top" value="1" onClick={this.props.filterFunc}/>
                                <label htmlFor="chkCanoAlto"></label>
                                <span>Cano alto</span>
                            </li>
                            <li className="item-filter squaredTwo">
                                <input id="chkCanoBaixo" type="checkbox" name="high-top" value="" onClick={this.props.filterFunc}/>
                                <label htmlFor="chkCanoBaixo"></label>
                                <span>Cano baixo</span>
                            </li>
                            <li className="item-filter squaredTwo">
                                <input id="chkFutebolCampo" type="checkbox" name="category" value="campo" onClick={this.props.filterFunc}/>
                                <label htmlFor="chkFutebolCampo"></label>
                                <span>Futebol Campo</span>
                            </li>
                            <li className="item-filter squaredTwo">
                                <input id="chkFutebolSociety" type="checkbox" name="category" value="society" onClick={this.props.filterFunc}/>
                                <label htmlFor="chkFutebolSociety"></label>
                                <span>Futebol Society</span>
                            </li>
                        </ul>
                    </menu>
                </div>
                <div className="filter">
                    <BtnAllProducts />
                </div>
            </div>
        )
    }

})

export default Filtro;