import React from 'react';

const Filtro = React .createClass({

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
                                <input id="chkCanoAlto" type="checkbox" name="filterCano" value="1"/>
                                <label htmlFor="chkCanoAlto"></label>
                                <span>Cano alto</span>
                            </li>
                            <li className="item-filter squaredTwo">
                                <input id="chkCanoBaixo" type="checkbox" name="filterCano" value="2"/>
                                <label htmlFor="chkCanoBaixo"></label>
                                <span>Cano baixo</span>
                            </li>
                            <li className="item-filter squaredTwo">
                                <input id="chkFutebolCampo" type="checkbox" name="filterFutebol" value="1"/>
                                <label htmlFor="chkFutebolCampo"></label>
                                <span>Futebol Campo</span>
                            </li>
                            <li className="item-filter squaredTwo">
                                <input id="chkFutebolSociety" type="checkbox" name="filterFutebol" value="2"/>
                                <label htmlFor="chkFutebolSociety"></label>
                                <span>Futebol Society</span>
                            </li>
                        </ul>
                    </menu>
                </div>
                <div className="filter">
                    <a className="btn btn-default">TODOS OS PRODUTOS</a>
                </div>
            </div>
        )
    }

})

export default Filtro;